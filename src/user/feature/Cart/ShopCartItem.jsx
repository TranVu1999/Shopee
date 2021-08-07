import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CheckBox from '../../common/component/CheckBox';

// Theme 
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
    line-height: 1.25rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    .check-box{
        margin-right: 1rem;
    }

    .product-name{
        flex: 1;
        color: rgba(0,0,0,0.8);

        .thumbnail{
            height: 5rem;
            width: 5rem;
            margin-right: 1rem;

            div{
                height: 100%;
            }
        }

        .title{
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-wrap: break-word;
            text-overflow: ellipsis;

            max-height: 2.5rem;
            margin-right: 1rem;

            flex: 3;
            overflow: hidden;
        }

        .classify{
            position: relative;
            flex: 2;
            padding: 0 1.5rem;

            label{
                margin-bottom: 0;
                cursor: pointer;
                span{
                    font-size: 1.125rem;
                }
            }
        }

        .classify-modal{
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, 0);

            display: none;

            box-sizing: content-box;
            width: 19.6875rem;
            max-height: 28.125rem;          
            padding: 1.625rem 1.75rem;

            background-color: #fff;

            border: 1px solid ${BorderColor.mainColor};
            border-radius: 2px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            z-index: 100;

            &:after{
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);

                height: 1rem;
                width: 1rem;

                background-color: #fff;
                border-left: 1px solid ${BorderColor.mainColor};
                border-top: 1px solid ${BorderColor.mainColor};
            }

            p{
                text-transform: capitalize;
                color: rgba(0,0,0,0.54);
                font-size: 1rem;
            }

            .product-variation{
                display: inline-bock;
                padding: .5rem 1.5rem;
                margin-right: .875rem;
                margin-bottom: .5rem;

                border: 1px solid ${BorderColor.mainColor};
                border-radius: 2px;
            }

            .button-control{
                margin-top: 2rem;

                button{
                    padding: .5rem 1.5rem;
                    color: #555;
                    text-transform: uppercase;
                    border: 1px solid ${BorderColor.mainColor};
                    border-radius: 2px;
                }

                button:last-child{
                    margin-left: .5rem;
                    background: #ee4d2d;
                    color: #fff;
                    border-color: #ee4d2d;
                }
            }
        }

        .classify-modal.active{
            display: block;
        }
    }

    .unit-price{
        width: 8rem;
        color: #888;
    }

    .amount{
        width: 10.5rem;
        color: #888;
    }

    .total{
        width: 9rem;
        color: #ee4d2d;
    }

    .control{
        width: 8.75rem;
        color: #888;
        line-height: 1rem;

        button{
            margin-bottom: .5rem;
        }

        .see-more{
            color: #ee4d2d;
            span.arrow_triangle-down{
                font-size: 1.125rem;
            }
        }
    }
`;

const CartUpdate = styled.div`
    font-size: 1.125rem;
    font-weight: 600;

    button{
        padding: .25rem .375rem;
        border: 1px solid ${BorderColor.mainColor};

        &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        &:last-child{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

    &>span{
        min-width: 2rem;
        padding: 0 .5rem;
        border-top: 1px solid ${BorderColor.mainColor};
        border-bottom: 1px solid ${BorderColor.mainColor};
        line-height: 2rem;
    }
`;

ShopCartItem.propTypes = {
    
};

function ShopCartItem(props) {
    // Data
    const [isShowClassifyModal, setIsShowClassifyModal] = React.useState(false);

    return (
        <WidgetContent className="d-flex">
            <div className="check-box">
                <CheckBox/>
            </div>
            <div className="d-flex product-name">
                <a href="#/" className="d-block thumbnail">
                    <div className="bg-image" style={{backgroundImage: `url(https://cf.shopee.vn/file/3effb9b72a51c606076e82ea4fd3929a_tn)`}}></div>
                </a>
                <a href="#/" className="title">Áo Lót Nam Cotton Có Tay Mặc Ở Nhà , Áo Đông Xuân Nam Cộc Tay Bộ Đội Trắng Siêu Rẻ Siêu Đẹp</a>

                <div className="classify">
                    <label 
                        className="d-flex align-items-center"
                        onClick = {() => {setIsShowClassifyModal(!isShowClassifyModal)}}
                    >Phân loại hàng: <span aria-hidden="true" className="arrow_triangle-down"></span> </label>
                    <span>L ( 65 - 72 kg)</span>

                    <div className={isShowClassifyModal ? "classify-modal active" : "classify-modal"}>
                        <p>Variation:</p>

                        <div>
                            <button className="product-variation">S (50 - 62kg)</button>
                            <button className="product-variation">M ( 60 - 67 kg)</button>
                            <button className="product-variation">L ( 65 - 72 kg)</button>
                            <button className="product-variation">XL ( 70 - 77kg)</button>
                            <button className="product-variation">XXL &gt; 77kg</button>
                        </div>

                        <div className="button-control text-right">
                            <button>Trở Lại</button>
                            <button>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="unit-price text-center">₫40.000</div>

            <div className="amount text-center">
                <CartUpdate className="d-inline-flex">
                    <button><span aria-hidden="true" className="icon_minus-06"></span></button>
                    <span>1</span>
                    <button><span aria-hidden="true" className="icon_plus"></span></button>
                </CartUpdate>
            </div>

            <div className="total text-center">₫80.000</div>

            <div className="control text-center">
                <button className="delete">Xóa</button>

                <button className="d-flex align-items-center see-more">
                    <span>Tìm sản phẩm tương tự</span>
                    <span><span aria-hidden="true" className="arrow_triangle-down"></span></span>
                </button>
            </div>
        </WidgetContent>
    );
}

export default ShopCartItem;