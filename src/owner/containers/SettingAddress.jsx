import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// Components
import ListAddress from '../features/Setting/ListAddress';
import TitleContent from '../components/TitleContent';
import FormAddress from '../features/Shop/FormAddress';


// UI
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
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
        setDialogData({...{dialogData}, isShow: false});
    }

    const handleOpenForm = data =>{
        if(data){

        }else{
            
        }
        setDialogData({...{dialogData}, isShow: true});

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
            
            <ListAddress listAddress = {listAddress}/>

            {/* Form update password */}
            <Dialog
                open={dialogData.isShow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <FormAddress
                        onClose = {handleCloseForm}
                        listOptionAddress = {listOptionAddress}
                    />
                </DialogContent>
            </Dialog>

        </section>
    );
}

export default SettingAddress;