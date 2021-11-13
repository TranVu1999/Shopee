import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioBox from '../../common/component/RadioBox';


const ButtonChange = styled.button`
    text-transform: uppercase;
    font-size: .875rem;
`;


RecievedAddress.propTypes = {
    
};

function RecievedAddress(props) {
    return (
        <div className = "received-address">
            <div className="container">
                <div className="received-address__container">
                    <div className="border"></div>
                    
                    <div className="d-flex align-items-center justify-content-between title">
                        <h5 className="d-flex align-items-center"><svg height="16" viewBox="0 0 12 16" width="12" ><path d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z" fillRule="evenodd"></path></svg>Địa chỉ nhận hàng</h5>

                        <div>
                            <button className="d-inline-flex align-items-center btn"><svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" role="img" ><path stroke="none" d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"></path></svg>Thêm địa chỉ mới</button>
                            <button className="btn">Thiết lập địa chỉ</button>
                        </div>
                    </div>
                    

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
                        <button className="btn btn-back">Trở lại</button>
                    </div>



                    {/* <div className="d-flex justify-content-between address-selected">
                        <div className="user-information">
                            <span>Trần Lê Anh Vũ</span><br />
                            <span>(84+) 377670509</span>
                        </div>
                        <div className="user-address">
                            156 Đường số 102, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                            <span>Mặc định</span>
                        </div>
                        <ButtonChange>Thay đổi</ButtonChange>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default RecievedAddress;