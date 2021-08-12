import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SwitchBox from './../../components/SwitchBox';

const WidgetSubList = styled.div`
    padding-left: 3rem;
`

ShopNotification.propTypes = {
    
};

function ShopNotification(props) {
    return (
        <div className="owner-setting-shop__widget-list-setup">
            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Thông báo Email</p>
                        <span>Kiểm soát việc Shopee gửi email đến bạn</span>
                    </div>
                    <SwitchBox/>
                </div>
                <div className="line"></div>

                <WidgetSubList className="flex-fill">
                    <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                        <div className="owner-setting-shop__widget-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                        </div>

                        <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                            <div>
                                <p>Thông báo Email</p>
                                <span>Kiểm soát việc Shopee gửi email đến bạn</span>
                            </div>
                            <SwitchBox/>
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                        <div className="owner-setting-shop__widget-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                        </div>

                        <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                            <div>
                                <p>Thông báo Email</p>
                                <span>Kiểm soát việc Shopee gửi email đến bạn</span>
                            </div>
                            <SwitchBox/>
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                        <div className="owner-setting-shop__widget-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                        </div>

                        <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                            <div>
                                <p>Thông báo Email</p>
                                <span>Kiểm soát việc Shopee gửi email đến bạn</span>
                            </div>
                            <SwitchBox/>
                        </div>
                        <div className="line"></div>
                    </div>

                    <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                        <div className="owner-setting-shop__widget-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                        </div>

                        <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                            <div>
                                <p>Thông báo Email</p>
                                <span>Kiểm soát việc Shopee gửi email đến bạn</span>
                            </div>
                            <SwitchBox/>
                        </div>
                        <div className="line"></div>
                    </div>
                </WidgetSubList>
            </div>
        </div>

    );
}

export default ShopNotification;