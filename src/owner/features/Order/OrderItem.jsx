import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    margin-bottom: 2rem;
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Title = styled.div`
    padding: .5rem .875rem;
    background-color: #f6f6f6;
    border-bottom: 1px solid ${BorderColor.mainColor};

    label, p{
        margin: 0;
    }
`;

const ThumbnailCustomer = styled.div`
    img{
        width: 2rem;
        height: 2rem;
        margin-right: .5rem;
        border-radius: 50%;
    }

    button{
        margin-left: .5rem;
        font-size: 1.25rem;
        color: #ee4d2d;
    }
`;

const Row = styled.div`
    padding: 1.5rem .875rem .5rem;
    line-height: 1.125rem;
    border-top: 1px solid ${BorderColor.mainColor};

    .product-name{
        flex: 1;

        p{
            font-weight: 600;
            font-size: 1rem;
            margin: 0;
        }

        span{
            font-size: .75rem;
        }

        .number{
            width: 3rem;
        }
    }

    .product-total, .product-name, .product-status, .product-type-transport{
        margin-right: 1rem;
    }

    .product-total{
        min-width: 6rem;
        max-width: 6rem;
    }

    .product-status{
        min-width: 11.375rem;
        max-width: 11.375rem;

        .badge{
            display: inline-flex;
            align-items: center;

            span{
                font-size: .875rem;
                margin-right: .25rem;
            }
        }

        .badge.warning{
            
            padding-left: .5rem;
            padding-right: .5rem;
            margin-bottom: 1rem;

            background-color: #ffb00052;
            color: #ffb000;
            border: 1px solid #ffb000;
        }

        strong{
            display: block;
            color: #333;
            font-size: 1.125rem;
            margin-bottom: .25rem;
        }
    }

    .product-type-transport{
        min-width: 9rem;
        max-width: 9rem;
    }

    .product-active{
        min-width: 10.5rem;
        max-width: 10.5rem;

        button{
            display: block;
            margin-bottom: .5rem;
            color: #4B4BF3;
        }
    }
`

const ThumbnailProduct = styled.div`
    margin-right: 1rem;
    height: 5rem;
    width: 5rem;

    background-image: url(${props=>props.image});
    background-size: cover;
    background-repeat: no-repeat;
`;

OrderItem.propTypes = {
    
};

function OrderItem(props) {
    return (
        <WidgetContent>
            <Title className="d-flex align-items-center justify-content-between">
                <ThumbnailCustomer className="d-flex align-items-center"> 
                    <img src="https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e" alt="avatar" />
                    <label>tranvu123456</label>
                    <button><span aria-hidden="true" className="icon_chat_alt"></span></button>
                </ThumbnailCustomer>

                <div>
                    <p>ID Don hang 2008021BDWTG74</p>
                </div>
            </Title>

            <Row className="d-flex">

                <div className="product-name d-flex">
                    <div className="d-flex flex-fill text">
                        <ThumbnailProduct image = {"https://cf.shopee.vn/file/ebb8179179b1042ea213642eb95b4bcc_tn"}/>
                        <div>
                            <p>Giày bata nữ hồng - pinky girl</p>
                            <span>Phân loại: Pink, 38</span>
                        </div>
                    </div>

                    <div className="number text-right">x1</div>
                </div>

                <div className="product-total">1.000</div>
                <div className="product-status">
                    <div className="badge warning">
                        <span aria-hidden="true" className="icon_clock_alt"></span>
                        Cần được xử lý trong 22 giờ
                    </div>
                    <strong>Chờ lấy hàng</strong>
                    <p>Để tránh việc giao hàng trễ, vui lòng giao hàng/chuẩn bị hàng trước: 04-08-2021</p>
                </div>
                <div className="product-type-transport">Người bán tự vận chuyển</div>
                <div className="product-active">
                    <button>Giao</button>
                    <button>In phiếu giao</button>
                </div>
            </Row>
            <Row className="d-flex">

                <div className="product-name d-flex">
                    <div className="d-flex flex-fill text">
                        <ThumbnailProduct image = {"https://cf.shopee.vn/file/ebb8179179b1042ea213642eb95b4bcc_tn"}/>
                        <div>
                            <p>Giày bata nữ hồng - pinky girl</p>
                            <span>Phân loại: Pink, 38</span>
                        </div>
                    </div>

                    <div className="number text-right">x1</div>
                </div>

                <div className="product-total">1.000</div>
                <div className="product-status">
                    <div className="badge warning">
                        <span aria-hidden="true" className="icon_clock_alt"></span>
                        Cần được xử lý trong 22 giờ
                    </div>
                    <strong>Chờ lấy hàng</strong>
                    <p>Để tránh việc giao hàng trễ, vui lòng giao hàng/chuẩn bị hàng trước: 04-08-2021</p>
                </div>
                <div className="product-type-transport">Người bán tự vận chuyển</div>
                <div className="product-active">
                    <button>Giao</button>
                    <button>In phiếu giao</button>
                </div>
            </Row>
            <Row className="d-flex">

                <div className="product-name d-flex">
                    <div className="d-flex flex-fill text">
                        <ThumbnailProduct image = {"https://cf.shopee.vn/file/ebb8179179b1042ea213642eb95b4bcc_tn"}/>
                        <div>
                            <p>Giày bata nữ hồng - pinky girl</p>
                            <span>Phân loại: Pink, 38</span>
                        </div>
                    </div>

                    <div className="number text-right">x1</div>
                </div>

                <div className="product-total">1.000</div>
                <div className="product-status">
                    <div className="badge warning">
                        <span aria-hidden="true" className="icon_clock_alt"></span>
                        Cần được xử lý trong 22 giờ
                    </div>
                    <strong>Chờ lấy hàng</strong>
                    <p>Để tránh việc giao hàng trễ, vui lòng giao hàng/chuẩn bị hàng trước: 04-08-2021</p>
                </div>
                <div className="product-type-transport">Người bán tự vận chuyển</div>
                <div className="product-active">
                    <button>Giao</button>
                    <button>In phiếu giao</button>
                </div>
            </Row>

        </WidgetContent>
    );
}

export default OrderItem;