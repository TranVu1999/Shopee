import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// components
import RadioBox from '../../common/component/RadioBox';
import ModalAddress from '../User/ModalAddress';

// icons
import {
    addressMarkerIcon, 
    plusIcon
} from '../../../asset/icon';


const ButtonChange = styled.button`
    text-transform: uppercase;
    font-size: .875rem;
`;


ReceivedAddress.propTypes = {
    listOptionAddress: PropTypes.array,
    onHanldeChoseAdministrativeUnit: PropTypes.func.isRequired,
    onHandleInitAdministrativeUnit: PropTypes.func.isRequired,
    onHandleAddAddress: PropTypes.func.isRequired,
    listAddress: PropTypes.array.isRequired,
};

ReceivedAddress.defaultProps = {
    listOptionAddress: []
}

function ReceivedAddress({
    listAddress,
    listOptionAddress,
    onHanldeChoseAdministrativeUnit,
    onHandleInitAdministrativeUnit,
    onHandleAddAddress
}) {

    const [receivedAddress, setReceivedAddress] = useState(null)
    const [isShowListAddress, setIsShowListAddress] = useState(false);
    const [isOpenModalAddress, setIsOpenModalAddress] = useState(false);

    // useEffect
    useEffect(() => {
        const receivedAddress = listAddress ? listAddress.find(address => address.isDefault) : null;
        setReceivedAddress(receivedAddress);
    }, [listAddress])

    // handle event
    const onHandleOpenListAddress = () => {
        setIsShowListAddress(true);
    }

    const onHandleCloseListAddress = () => {
        setIsShowListAddress(false);
    }

    const onHandleCloseModalAddress = () => {
        setIsOpenModalAddress(false)
    }

    const onHandleOpenAddressModal = () => {
        onHandleInitAdministrativeUnit()
        setIsOpenModalAddress(true);
    }

    const onHanldeChose = dataChose => {
        if(!onHanldeChoseAdministrativeUnit) return;
        onHanldeChoseAdministrativeUnit(dataChose);
    }

    const onHandleAddNewAddress = addressData => {
        if(!onHandleAddAddress) return;
        onHandleAddAddress(addressData)
    }

    // render
    const renderReceivedAddress = () => {
        if(!isShowListAddress && receivedAddress) {
            return (
                <div className="d-flex justify-content-between address-selected">
                    <div className="user-information">
                        <span>Trần Lê Anh Vũ</span><br />
                        <span>(84+) 377670509</span>
                    </div>
                    <div className="user-address">
                        156 Đường số 102, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                        <span>Mặc định</span>
                    </div>
                    <ButtonChange onClick={onHandleOpenListAddress}>Thay đổi</ButtonChange>
                </div>
            );
        }

        return null;
    }

    const renderModalAddress = () => {
        if(isOpenModalAddress || (Array.isArray(listAddress) && listAddress.length === 0)) {
            return (
                <ModalAddress 
                    itemFocus = {null}

                    listOptionAddress = {listOptionAddress}
                    onHandleClose = {onHandleCloseModalAddress}
                    onHanldeChoseAdministrativeUnit = {onHanldeChose}
                    onHandleAdd = {onHandleAddNewAddress}
                />
            );
        }

        return null;
    }

    return (
        <div className = "received-address">
            <div className="container">
                <div className="received-address__container">
                    <div className="border"></div>
                    
                    <div className="d-flex align-items-center justify-content-between title">
                        <h5 className="d-flex align-items-center">{addressMarkerIcon}Địa chỉ nhận hàng</h5>

                        {isShowListAddress && 
                            <div>
                                <button 
                                    onClick = {onHandleOpenAddressModal}
                                    className="d-inline-flex align-items-center btn"
                                >{plusIcon}Thêm địa chỉ mới</button>
                                <Link to="/user/address" className="btn">Thiết lập địa chỉ</Link>
                            </div>
                        }
                    </div>
                    

                    {isShowListAddress && <>
                        <div className="list-address">
                            <div className="address-item">
                                <RadioBox/>
                                <div className="user-information">
                                    <span>Trần Lê Anh Vũ</span><br />
                                    <span>(84+) 377670509</span>
                                </div>
                                <div className="user-address">
                                    156 Đường số 102, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                                    <span>Mặc định</span>
                                </div>
                            </div>
                            <div className="address-item">
                                <RadioBox/>
                                <div className="user-information">
                                    <span>Trần Lê Anh Vũ</span><br />
                                    <span>(84+) 377670509</span>
                                </div>
                                <div className="user-address">
                                    156 Đường số 102, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                                    <span>Mặc định</span>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="btn btn-save">Hoàn thành</button>
                            <button 
                                className="btn btn-back"
                                onClick = {onHandleCloseListAddress}
                            >Trở lại</button>
                        </div>
                    </>}

                    {renderReceivedAddress()}
                </div>
            </div>

            {renderModalAddress()}
        </div>
    );
}

export default ReceivedAddress;