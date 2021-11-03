import React, {useEffect, useState, lazy, Suspense} from "react";
import { Switch, Route } from 'react-router-dom';
import jwt from 'jwt-decode';

// Components
import WidgetSidebar from "../../feature/User/WidgetSidebar";
import SuccessPopup from "../../feature/Layout/SuccessPopup";
import HandlingData from "../../feature/Layout/HandlingData";

// Apis
import accountApi from "../../../api/accountAPI";

// Modules
import firebase from "../../../config/firebase-config";

// routes
import routes from './routes';
const WidgetUserPortfolio = lazy(() => import("../../feature/User/WidgetUserProfile"));


function UserPage(props) {
    // Data
    const {path} = props.match;
    const {pathname} = props.location;
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [amountImageUploaded, setAmountImageUploaded] = useState(0);
    const [avatarAsUrl, setAvatarAsUrl] = useState([]);

    const [user, setUser] = useState(null);

    // effect
    useEffect(() => {
        const fetchUserInfo = async function() {
            const res = await accountApi.getFullInfo();
            if(res.success) {
                setUser(res.user);
            }
        }

        switch(pathname) {
            case "/user":
            case "/user/information":
                if(!user) {
                    fetchUserInfo();
                }
                
                break;
            default: 
                break;
        }
    }, [pathname]);

    useEffect(() => {
        const prepareData = function() {
            const dataUser = {
                ...user,
                avatar: avatarAsUrl[0]
            }

            accountApi.update(user.accountId, dataUser)
            .then(res => {
                setIsLoading(false);

                if(res.success) {
                    setIsSuccess(true);
                }
            })
            .catch(err => console.log({err}))
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
                const user = jwt(accessToken);
                

                accountApi.update(user.accountId, user)
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

    return (
        <div className="mt-80 mb-40 user-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <WidgetSidebar />
                    </div>
                    <div className="pl-5 col-lg-10">
                        <Suspense>
                            <Switch>
                                <Route exact path = {'/user'} >
                                    <WidgetUserPortfolio 
                                        user = {user}
                                        handleUpdateUser = {handleUpdateUser}
                                    />
                                </Route>
                                <Route path = {'/user/information'} >
                                    <WidgetUserPortfolio 
                                        user = {user}
                                        handleUpdateUser = {handleUpdateUser}
                                    />
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
            
            {isSuccess &&  <SuccessPopup/>}
            {isLoading && <HandlingData/>}
            
        </div>
    );
}

export default UserPage;
