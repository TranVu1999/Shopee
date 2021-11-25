import React from 'react';
import PropTypes from 'prop-types';

ListAddress.propTypes = {
    listAddress: PropTypes.array,
    onFocusItem: PropTypes.func.isRequired,
};

function ListAddress({listAddress, onFocusItem}) {    

    // handle event
    const onHandleFocus = address => {
        if(!onFocusItem) return;
        onFocusItem(address)
    }

    // reder
    const renderListAddress = () => {
        return listAddress.map(address => {
            const {
                _id, 
                fullname, 
                phoneNumber, 
                houseNumber, 
                ward, 
                district, 
                province,
                isDefault,
                isDeliveryAddress,
                isReceivedAddress
            } = address;
            return <div key = {_id} className="d-flex address-item">
                <div className="widget-icon">
                    <svg viewBox="0 0 32 32"><path d="M17.7 29.2H22c.6 0 1 .4 1 1s-.4 1-1 1H10c-.6 0-1-.4-1-1s.4-1 1-1h4.3C11.3 25.4 5 17.1 5 12.4 5 6.2 9.9 1.2 16 1.2s11 5 11 11.2c0 4.7-6.3 13-9.3 16.8zM16 3.2c-5 0-9 4.2-9 9.4s9 15.6 9 15.6 9-10.4 9-15.6c0-5.2-4-9.4-9-9.4zm-5 9c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.3-5-5zm8 0c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.4 3-3z"></path></svg>
                </div>

                <div className="flex-fill text">
                    <div className="d-flex justify-content-between row">
                        <div className="d-flex">
                            <div className="label">Họ & Tên </div>
                            <div className="value">
                                <span className="name">{fullname}</span>
                                
                                <div className="d-inline-block badge">
                                    {isDefault && <span className="primary">Default Address</span>}
                                    {isDeliveryAddress && <span className="warning">Địa chỉ lấy hàng </span>}
                                    {isReceivedAddress && <span className="secondary">Địa chỉ trả hàng </span>}
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick = {() => onHandleFocus(address)}>Sửa</button>
                            <button>Xóa</button>
                        </div>
                    </div>

                    <div className="d-flex row">
                        <div className="label">Số điện thoại </div>
                        <div className="value">{phoneNumber}</div>
                    </div>

                    <idv className="d-flex row">
                        <div className="label">Địa chỉ</div>
                        <div className="value">
                            {houseNumber}
                            <br />
                            {ward}
                            <br />
                            {district}
                            <br />
                            {province}
                        </div>
                    </idv>
                </div>
            </div>
        })
    }
    return (
        <div className = "list-address">
            {renderListAddress()}
        </div>
    );
}

export default ListAddress;