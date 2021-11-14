import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContainer = styled.div`
    font-size: .875rem;
    .top {
        padding: 1.5rem 1.5rem;
        background-color: #fff;

        h5 {
            margin: 0;
            font-size: 1.125rem;
            color: #222;
        }

        span {
            margin-right: 2rem;
        }

        button {
            color: #05a;
            text-transform: uppercase;
        }
    }

    .middle {
        padding: .5rem 1.5rem;
        background-color: #FFFEFB;

        &>div {
            display: flex;
            justify-content: end;
            padding: .3125rem 0;

            span:last-child {
                text-align: right;
                min-width: 180px;
            }

            span.price {
                color: #ee4d2d;
                font-size: 1.25rem;
                font-weight: 500;
            }
        }
    }

    .bottom {
        padding: 1.5rem 1.5rem;
        background-color: #FFFEFB;
        border-top: 1px dashed rgba(0,0,0,.09);

        button {
            padding: .5rem 3rem;
            background-color: #ee4d2d;
            color: #fff;
            font-size: 1rem;
            text-transform: uppercase;

            &:hover {
                background-color: #f05d40;
            }
        }
    }
`;

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <WidgetContainer>
            <div className="container">
                <div className="footer__container">
                    <div className="d-flex align-items-center justify-content-between top">
                        <h5>Phương thức thanh toán</h5>

                        <div>
                            <span>Thanh toán khi nhận hàng</span>
                            <button>Thay đổi</button>
                        </div>
                    </div>

                    <div className="middle">
                        <div>
                            <span>Tổng tiền hàng</span>
                            <span><small>₫</small>403.000</span>
                        </div>
                        <div>
                            <span>Phí vận chuyển</span>
                            <span><small>₫</small>403.000</span>
                        </div>
                        <div>
                            <span>Tổng thanh toán</span>
                            <span className="price"><small>₫</small>403.000</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between bottom">
                        <span>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <a href="#/">Điều khoản Shopee</a></span>
                        <button>Đặt Hàng</button>
                    </div>
                </div>
            </div>
            
        </WidgetContainer>
    );
}

export default Footer;