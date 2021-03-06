import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalAddress from './ModalAddress';

// Theme
import { BorderColor} from './../../theme';

// Components
import LoadingData from '../Layout/LoadingData';
import ConfirmPopup from '../Layout/ConfirmPopup';


const WidgetContent = styled.div`
    padding: 1rem 1.5rem;
    background-color: #fff;
    font-size: 16px;
`;

const WidgetTitle = styled.div`
    margin-bottom: 1rem;
`;

const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    padding: .5rem 2rem;
    font-size: .875rem;

    color: #fff;
    background-color: #ee4d2d;
    border-radius: 2px;
    border: 1px solid #ee4d2d;

    &:hover{
        color: #ee4d2d;
        background-color: transparent;
    }


    span{
        font-size: 1.125rem;
        margin-right: .75rem;
    }
`;

const AddressItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 1rem 0;

    font-size: .875em;

    border-top: 1px solid #efefef;

    label{
        width: 10em;
        margin-right: 2em;

        text-align: right;
        text-transform: capitalize;
    }

    .content{
        flex: 1;

        strong{
            margin-right: 1em;
            font-size: 1rem;
            color: rgba(0,0,0,.8);
        }
    }

    span.outline-badge {
        display: inline-block;
        margin-left: .5rem;
        padding: 0 8px;
        font-size: 13px;

        border: 1px solid #ee4d2d;
        color: #ee4d2d;
        border-radius: .25rem;
        line-height: 26px;
    }
`;

const ButtonAction = styled.button`
    margin-left: 1.5em;
    text-decoration: underline;
`;

const ButtonSetDefault = styled.button`
    padding: .25em 1em;
    text-transform: capitalize;
    border: 1px solid ${BorderColor.mainColor};
    cursor: not-allowed!important;
    opacity: .7;
`;

const ButtonSetDefaultActive = styled(ButtonSetDefault)`
    padding: .25em 1em;
    text-transform: capitalize;
    border: 1px solid #d5d5d5;
    cursor: pointer!important;

    opacity: 1;
    color:rgba(0,0,0);
`;

WidgetListAddress.propTypes = {
    listAddress: PropTypes.array.isRequired,
    listOptionAddress: PropTypes.array.isRequired,
    onHandleRemoveAddress: PropTypes.func.isRequired,
    onHanldeChoseAdministrativeUnit: PropTypes.func.isRequired,
    onHandleAddAddress: PropTypes.func.isRequired,
    onHanldeEditAddress: PropTypes.func.isRequired,
};

function WidgetListAddress({
    listAddress,
    listOptionAddress,
    onHandleRemoveAddress,
    onHanldeChoseAdministrativeUnit,
    onHandleAddAddress,
    onHanldeEditAddress
}) {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
    const [itemFocus, setItemFocus] = useState(null);

    // handle event
    const OpenModalToAdd = () =>{
        setIsOpenModal(true);
    }

    const handleClose = () => {
        setItemFocus(null);
        setIsOpenModal(false);
    }

    const onHanldeCancelPopup = () => {
        setIsOpenConfirmModal(false);
    }

    const onHanldeConfirmPopup = () => {
        setIsOpenConfirmModal(false);
        if(!onHandleRemoveAddress) return;
        onHandleRemoveAddress(itemFocus);
    }

    const onRemove = address => {
        setItemFocus(address);
        setIsOpenConfirmModal(true);
    }

    const onEdit = address => {
        setItemFocus(address);
        setIsOpenModal(true);
    }

    const onHanldeChose = dataChose => {
        if(!onHanldeChoseAdministrativeUnit) return;
        onHanldeChoseAdministrativeUnit(dataChose);
    }

    const onHanldeAdd = addressData => {
        if(!onHandleAddAddress) return;
        onHandleAddAddress(addressData)
    }

    const onHandleEdit = addressData => {
        if(!onHanldeEditAddress) return;
        onHanldeEditAddress(addressData)
    }

    // render
    const renderListAddress = () => {
        if(listAddress && listAddress.length) {
            return listAddress.map(address => {
                return (
                    <AddressItem key = {address._id}>
                        <div>
                            <div className="d-flex">
                                <label>H??? v?? t??n</label>
                                <div className="content">
                                    <strong>{address.fullname}</strong>
                                    {address.isDefault && <span className = "default-badge">M???c ?????nh</span>}
                                    {address.isDeliveryAddress && <span className = "outline-badge">?????a ch??? l???y h??ng</span>}
                                    {address.isReceivedAddress && <span className = "outline-badge">?????a ch??? nh???n h??ng</span>}
                                    
                                </div>
                            </div>
                            <div className="d-flex">
                                <label>S??? ??i???n tho???i</label>
                                <div className="content">(+84) {address.phoneNumber}</div>
                            </div>
                            <div className="d-flex">
                                <label>?????a ch???</label>
                                <div className="content">
                                    <span>{address.houseNumber}<br/>{address.ward}<br/>{address.district}<br/>{address.province}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className = "mb-3 text-right">
                                <ButtonAction onClick = {() => onEdit(address)}>S???a</ButtonAction>

                                {!address.isDefault && <ButtonAction
                                    onClick = {() => onRemove(address)}
                                >X??a</ButtonAction>}
                                
                            </div>
                            <div>
                                {address.isDefault ? <ButtonSetDefault>Thi???t l???p m???c ?????nh</ButtonSetDefault> : <ButtonSetDefaultActive>Thi???t l???p m???c ?????nh</ButtonSetDefaultActive>}
                                
                            </div>
                        </div>
                    </AddressItem>
                )
            })
        }
    }

    return (
        <WidgetContent className = "user-content">        
            <WidgetTitle className = "d-flex align-items-center justify-content-between page-user--header">
                <p>?????a ch??? c???a t??i</p>
                <ButtonAdd 
                    onClick = {OpenModalToAdd}
                >
                    <span class="icon_plus"></span>
                    Th??m ?????a ch??? m???i
                </ButtonAdd>
            </WidgetTitle>

            {!listAddress && <LoadingData/>}

            {listAddress && <>
                {renderListAddress()}
            </>}
            

            {isOpenModal && <ModalAddress 
                itemFocus = {itemFocus}

                listOptionAddress = {listOptionAddress}
                onHandleClose = {handleClose}
                onHanldeChoseAdministrativeUnit = {onHanldeChose}
                onHandleAdd = {onHanldeAdd}
                onHandleEdit = {onHandleEdit}
            />}

            {isOpenConfirmModal && <ConfirmPopup
                onCancelPopup = {onHanldeCancelPopup}
                onConfirmPopup = {onHanldeConfirmPopup}
            />}
            
            
        </WidgetContent>
    );
}

export default WidgetListAddress;