import React, {useState, useEffect} from 'react';
// Components
import ListAddress from '../features/Setting/ListAddress';
import TitleContent from '../components/TitleContent';
import FormAddress from '../features/Shop/FormAddress';
// UI
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// apis 
import addressApi from './../../api/addressAPI';
import administrativeUnitApi from "./../../api/administrativeUnitAPI";


function SettingAddress() {
    // Data
    const [dialogData, setDialogData] = useState({
        isShow: false,
        data: {}
    });
    const [listAddress, setListAddress] = useState([]);
    const [listOptionAddress, setListOPtionAddress] = useState([]);
    const [itemFocus, setItemFocus] = useState(null);

    // effect
    useEffect(() => {
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

        fetchListAddress();
    }, [])

    // handle event
    const handleCloseForm = () =>{
        setItemFocus(null);
        setDialogData({...{dialogData}, isShow: false});
    }

    const handleOpenForm = data =>{
        if(data){

        }else{
            
        }
        setDialogData({...{dialogData}, isShow: true});

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

    const onHandleFocusItem = address => {
        setItemFocus(address);
        setDialogData({...{dialogData}, isShow: true});
    }

    const onHandleSubmit = async (address) => {
        if(itemFocus) {
            const res = await addressApi.edit(address);
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
        } else {
            const res = await addressApi.add(address);
            if(res.success) {
                const newAddress = res.address;
                setListAddress([
                    ...listAddress,
                    newAddress
                ])
            }
        }

        handleCloseForm();

    }
    
    return (
        <section className = "setting-address-page">
            <TitleContent 
                title="Địa Chỉ"
                subTitle="Quản lý việc vận chuyển và địa chỉ giao hàng của bạn "

                rightElm = {<button 
                    className="d-flex align-items-center btn btn-primary"
                    onClick = {() => handleOpenForm()}
                >
                    <span aria-hidden="true" className="icon_plus"></span>
                    Thêm địa chỉ mới
                </button>}
            />
            
            <ListAddress 
                listAddress = {listAddress}
                onFocusItem = {onHandleFocusItem}
            />

            {/* Form update password */}
            <Dialog
                open={dialogData.isShow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <FormAddress
                        itemFocus = {itemFocus}
                        onClose = {handleCloseForm}
                        listOptionAddress = {listOptionAddress}
                        onHanldeChoseAdministrativeUnit = {onHanldeChoseAdministrativeUnit}
                        onSubmit = {onHandleSubmit}
                    />
                </DialogContent>
            </Dialog>

        </section>
    );
}

export default SettingAddress;