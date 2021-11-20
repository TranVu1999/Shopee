import React, {useEffect, useState, lazy, Suspense} from "react";
import { Switch, Route } from 'react-router-dom';
import jwt from 'jwt-decode';

// Components
import WidgetSidebar from "../../feature/User/WidgetSidebar";
import SuccessPopup from "../../feature/Layout/SuccessPopup";
import HandlingData from "../../feature/Layout/HandlingData";

// Apis
import accountApi from "../../../api/accountAPI";
import addressApi from "../../../api/addressAPI";
import invoiceApi from "../../../api/invoiceAPI";
import administrativeUnitApi from "../../../api/administrativeUnitAPI";

// Modules
import firebase from "../../../config/firebase-config";

// routes
import routes from './routes';
const WidgetUserPortfolio = lazy(() => import("../../feature/User/WidgetUserProfile"));
const WidgetListAddress = lazy(() => import("../../feature/User/WidgetListAddress"));
const WidgetUpdatePassword = lazy(() => import("../../feature/User/WidgetUpdatePassword"));
const WidgetPurchase = lazy(() => import("../../feature/User/WidgetPurchase"));
const WidgetPurchaseDetail = lazy(() => import("../../feature/User/WidgetPurchaseDetail"));
function UserPage(props) {
    // Data
    const {path} = props.match;
    const {pathname} = props.location;
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [amountImageUploaded, setAmountImageUploaded] = useState(0);
    const [avatarAsUrl, setAvatarAsUrl] = useState([]);

    const [user, setUser] = useState(null);
    const [listAddress, setListAddress] = useState(null);
    const [listOptionAddress, setListOPtionAddress] = useState([]);
    const [oldPassword, setOldPassword] = useState(null);
    const [verifyCode, setVerifyCode] = useState("");
    const [listInvoice, setListInvoice] = useState(null);

    // effect
    useEffect(() => {
        const fetchUserInfo = async function() {
            const res = await accountApi.getFullInfo();
            if(res.success) {
                setUser(res.user);
            }
        }

        const fetchListAddress = async function() {
            const [resListAddress, resListProvince] = await Promise.all([
                addressApi.get(),
                administrativeUnitApi.getListProvince()
            ]);

            if(resListAddress.success && resListProvince.success) {
                setListAddress(resListAddress.listAddress);
                setListOPtionAddress(resListProvince.listProvince);
            }
        }

        const fetchPassword = async function() {
            const res = await accountApi.getPassword();
            if(res.success) {
                setOldPassword(res.password);
            }
        }

        const fetchListInvoice = async function() {
            const res = await invoiceApi.get();

            if(res.success) {
                setListInvoice(res.listInvoice);
            }
        }

        switch(pathname) {
            case `${path}`:
            case `${path}/information`:
                if(!user) {
                    fetchUserInfo();
                }
                break;

            case `${path}/address`:
                fetchListAddress();
                break;

            case `${path}/update-password`:
                fetchPassword();
                break;

            case `${path}/purchase`:
                fetchListInvoice();
                break;

            default: 
                break;
        }
    }, [pathname]);

    useEffect(() => {
        const prepareData = function() {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken) {
                const dataUser = {
                    ...user,
                    avatar: avatarAsUrl[0]
                }
    
                const accountId = jwt(accessToken).accountId;
                accountApi.update(accountId, dataUser)
                .then(res => {
                    setIsLoading(false);
    
                    if(res.success) {
                        setIsSuccess(true);
                    }
                })
                .catch(err => console.log({err}))
            }
            
        }

        if(amountImageUploaded && amountImageUploaded === avatarAsUrl.length) {
            prepareData()
        }
    }, [avatarAsUrl])

    // Handle event
    const handleUpdateUser = user => {
        setIsLoading(true);

        if(user.avatarAsFile) {
            setAmountImageUploaded(1);
            setUser({...user});

            let storage = firebase.storage();
            let storageRef = storage.ref();
            const bucketName = "avatars";
            const imageAsUrl = [];

            const path = `${bucketName}/${user.avatarAsFile.name}`;
            let spaceRef = storageRef.child(path);

            spaceRef.put(user.avatarAsFile)
            .then(snapshot => {
                return storageRef.child(path).getDownloadURL();
            })
            .then(url => {
                imageAsUrl.push(url);
                setAvatarAsUrl([...imageAsUrl]);
            })
            .catch(err => {
                console.log({err});
            });
        } else {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken) {
                const accountId = jwt(accessToken).accountId;


                accountApi.update(accountId, user)
                .then(res => {
                    setIsLoading(false);

                    if(res.success) {
                        setIsSuccess(true);
                    }
                })
                .catch(err => console.log({err}))
                
            }
            
        }
        
    }

    const onHandleRemoveAddress = address => {
        setIsLoading(true);

        addressApi.remove(address._id)
        .then(res => {
            setIsLoading(false);
            if(res.success) {
                const addressId = res.address._id;
                const tempListAddress = listAddress.filter(address => address._id !== addressId);
                setListAddress(tempListAddress);
            }
        })
        .catch(err => console.log({err}));
    }

    const onClosePopup = () => {
        setIsSuccess(false)
    }

    const onHanldeChoseAdministrativeUnit = dataChose => {
        const {type, code} = dataChose;
        if(type === "province") {
            administrativeUnitApi.getListDistrict(code)
            .then(res => {
                console.log({res})
                if(res.success) {
                    setListOPtionAddress(res.listDistrict);
                }
            })
            .catch(err => console.log({err}));
        } else if(type === "district") {
            administrativeUnitApi.getListWard(code)
            .then(res => {
                console.log({res})
                if(res.success) {
                    setListOPtionAddress(res.listWard);
                }
            })
            .catch(err => console.log({err}))
        }
    }

    const onHanldeAddNewAddress = address => {
        setIsLoading(true);
        addressApi.add(address)
        .then(res => {
            setIsLoading(false);
            if(res.success) {
                const newAddress = res.address;
                setListAddress([
                    ...listAddress,
                    newAddress
                ])
            }
        })
        .catch(err => console.log({err}));
    }

    const onHanldeEditAddress = address => {
        setIsLoading(true);
        addressApi.edit(address)
        .then(res => {
            setIsLoading(false);
            if(res.success) {
                const updateAddress = res.address;
                let tempListAddress = [...listAddress];
                let indx = tempListAddress.findIndex(item => item._id === updateAddress._id);

                if(indx !== -1) {
                    if(updateAddress.isDefault) {
                        tempListAddress = tempListAddress.map(address => ({
                            ...address,
                            isDefault: false
                        }))
                    }

                    tempListAddress[indx] = updateAddress;
                    setListAddress(tempListAddress);
                }

                
            }
        })
        .catch(err => console.log({err}));
    }

    const onSendVerifyCode = () => {
        accountApi.getVerifyCode()
        .then(res => {
            if(res.success) {
                setVerifyCode(res.verifyCode);
            }
        })
        .catch(err => console.log({err}))
    }

    const onHandleSubmitNewPassword = passData => {
        accountApi.updatePassword(passData)
        .then(res => {
            if(res.success) {
                setIsSuccess(true);
            }
        })
        .catch(err => console.log({err}));
    }

    
    return (
        <div className="mb-40 user-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <WidgetSidebar />
                    </div>
                    <div className="pl-5 col-lg-10">
                        <Suspense>
                            <Switch>
                                <Route exact path = {path} >
                                    <WidgetUserPortfolio 
                                        user = {user}
                                        handleUpdateUser = {handleUpdateUser}
                                    />
                                </Route>
                                <Route path = {`${path}/information`} >
                                    <WidgetUserPortfolio 
                                        user = {user}
                                        handleUpdateUser = {handleUpdateUser}
                                    />
                                </Route>
                                <Route path = {`${path}/address`} >
                                    <WidgetListAddress 
                                        listOptionAddress = {listOptionAddress}
                                        onHanldeChoseAdministrativeUnit = {onHanldeChoseAdministrativeUnit}

                                        listAddress={listAddress}
                                        onHandleRemoveAddress = {onHandleRemoveAddress}
                                        onHandleAddAddress = {onHanldeAddNewAddress}
                                        onHanldeEditAddress = {onHanldeEditAddress}
                                    />
                                </Route>
                                <Route path = {`${path}/update-password`} >
                                    <WidgetUpdatePassword 
                                        oldPassword = {oldPassword}
                                        onSendVerifyCode = {onSendVerifyCode}
                                        verifyCode = {verifyCode}
                                        onSubmitNewPassword = {onHandleSubmitNewPassword}
                                    />
                                </Route>
                                <Route path = {`${path}/purchase-detail`} >
                                    <WidgetPurchaseDetail/>
                                </Route>
                                <Route path = {`${path}/purchase`} >
                                    <WidgetPurchase listInvoice = {listInvoice}/>
                                </Route>
                                

                            {/* {routes.map((item, index) =>{
                                return <Route 
                                    key = {index} 
                                    path = {`${path}/${item.path}`} 
                                    component = {item.component}
                                    exact = {item.exact || false}
                                />
                            })} */}
                            </Switch>
                        </Suspense>
                    
                    </div>
                </div>
            </div>
            
            {isSuccess &&  <SuccessPopup onClosePopup = {onClosePopup}/>}
            {isLoading && <HandlingData/>}
            
        </div>
    );
}

export default UserPage;
