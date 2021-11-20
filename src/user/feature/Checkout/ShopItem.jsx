import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// modules
import Number from './../../../utils/formatNumber';

// actions
import {actAttachMessage} from './../../common/module/cart/action';

// icons
import {chatIcon} from './../../../asset/icon';

const CartBody = styled.div`
    padding: 0 1.5rem;
    font-size: .875rem;
`;

const RowCart = styled.div`
    display: flex;
    align-items-center;
    padding: 1rem 0;
    font-size: .875rem;
    border-top: 1px solid rgba(0,0,0,.12);

    .title {
        flex: 4;
        display: flex;

        img {
            width: 2.5rem;
            height: 2.5rem;
            margin-right: .875rem;
        }

        span {

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            height: 1.25rem;

            word-wrap: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .type {
        color: #929292;
    }

    .number {
        flex: 1;
        text-align: right;
    }

    .total-price,
    .price,
    .type {
        text-align: right;
        flex: 2;
    }

    .price, .total-price {
        color: #222;
    }
`;

const RowVoucher = styled.div`
    padding: 1.125rem 0;
    border-top: 1px dashed rgba(0,0,0,.09);

    div {
        width: 50%;
    }

    svg {
        width: 1.5rem;
        margin-right: .25rem;
        fill: #ee4d2d;
    }

    button {
        color: #05a;
    }
`;

const CartFooter = styled.div`
    background-color: #fafdff;
    
    font-size: .875rem;
    color: #222;

    .top {
        padding: 0 1.5rem;
        border-bottom: 1px dashed rgba(0,0,0,.09);
        border-top: 1px dashed rgba(0,0,0,.09);
    }
    

    .message {
        align-self: stretch;
        flex: 4;
        padding-right: 2rem;
        border-right: 1px dashed rgba(0,0,0,.09);
        
        span {
            margin-right: 1rem;
        }

        div {
            flex: 1;
            box-shadow: inset 0 2px 3px 0 rgb(0,0,0,.05);
            background-color: #fff;
            border: 1px solid rgba(0,0,0,.14);
            border: radius: 2px;
        }

        input {
            width: 100%;
            padding: .4375rem 1rem;
        }
        
    }

    .delivery {
        padding: 1rem 0 1rem 1rem;
        flex: 7;
        line-height: 1.25rem;

        &>span {
            margin-right: 1rem;
        }

        p {
            color: #929292;
            margin: 0;
        }

        .label {
            p {
                color: #ee4d2d;
                margin-bottom: .125rem;
            }
        }

        button {
            color: #05a;
            text-transform: uppercase;
        }
    }

    .bottom {
        padding: 1.5rem 1.5rem;

        span {
            margin-right: 2rem;
        }

        strong {
            font-weight: 400;
            color: #ee4d2d;
            font-size: 1.5rem;
        }
    }
`;

ShopItem.propTypes = {
    shop: PropTypes.object.isRequired,
};

function ShopItem({shop}) {
    const {brand, alias, _id, listProduct} = shop;
    const dispatch = useDispatch();

    // functions
    const getTotalPrice = () => {
        let totalPrice = 0;
        let numProductSelected = 0;
        
        shop.listProduct.forEach(prod => {
            if(prod.isChose) {
                numProductSelected += prod.amount;
                const {classification: {first, second}, amount} = prod;
                if(!prod.product.classification) {
                    totalPrice += prod.product.price * amount;
                } else {
                    const {tablePrice} = prod.product.classification;
                    let rowPrice = null;
                    if(first && second) {
                        rowPrice = tablePrice.find(row => row.firstClassifyName === first && row.secondClassifyName === second);

                    } else if(first) {
                        rowPrice = tablePrice.find(row => row.firstClassifyName === first);
                    }
                    totalPrice += rowPrice.price * amount;
                }

            }
        })
        
        return {totalPrice, numProductSelected};
    }

    // handle event
    const onHandleAttachMessage = event => {
        const {value} = event.target;
        dispatch(actAttachMessage({shopId: _id, message: value}));
    }

    // render
    const renderPrice = (classification, product) => {
        if(product.classification) {
            const {first, second} = classification;
            const {tablePrice} = product.classification;

            if(first && second) {
                return tablePrice.find(row => row.firstClassifyName === first && row.secondClassifyName === second).price;
            } else if (first) {
                return tablePrice.find(row => row.firstClassifyName === first).price; 
            }
        } 
        return product.price;
        
    }

    const renderListRowCart = () => {
        return listProduct.filter(prod => prod.isChose).map(prod => {
            const {classification, product, amount} = prod;
            const price = renderPrice(classification, product);

            let avatar = product.avatar;
            const {types} = product.classification.classifies.first;
            if(classification) {
                avatar = types.find(type => type.label === classification.first).image;
            }


            return (
                <RowCart key = {prod._id}>
                    <div className="title">
                        <img src={avatar} alt="product" />
                        <span>{product.title}</span>
                    </div>
                    <div className="type">Loại: {`${classification.first || ""} ${classification.second || ""}`}</div>
                    <div className="price"><small>₫</small> {Number.convertToMoney(price)}</div>
                    <div className="number">{amount}</div>
                    <div className="total-price"><small>₫</small>{Number.convertToMoney(price * amount)}</div>
                </RowCart>
            );
        })
    }

    const {totalPrice, numProductSelected} = getTotalPrice();

    return (
        <div className="container shop-cart">
            <div className="cart-header">
                <div className="information">
                    <span className="badge">Yêu thích +</span>
                    <Link to = {`/store-detail/${alias}.${_id}`}>{brand}</Link>
                    <button>{chatIcon} Chat ngay</button>
                </div>
            </div>

            <CartBody className="cart-body">
                {renderListRowCart()}

                <RowVoucher className="d-flex justify-content-end">
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="d-flex align-itemx-center">
                            <svg fill="none" viewBox="0 -2 23 22" ><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clip-rule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>Voucher của Shop
                        </span>
                        <button>Chọn Voucher</button>
                    </div>
                </RowVoucher>
            </CartBody>

            <CartFooter>
                <div className="d-flex align-items-center top">
                    <div className="d-flex align-items-center message">
                        <span>Lời nhắn: </span>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Lưu ý cho Người bán..."
                                onChange = {onHandleAttachMessage}
                            />
                        </div>
                        
                    </div>

                    <div className="d-flex align-items-center delivery">
                        <span>Đơn vị vận chuyển:</span>
                        <div className="flex-fill">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="label">
                                    <span>Nhanh</span>
                                    <p>Vui lòng chọn thời gian giao hàng mong muốn</p>
                                </div>
                                <div className="button"><button>Thay đổi</button></div>
                                <div className="price"><small>₫</small>38.000</div>
                            </div>
                            <p>(Do ảnh hưởng của Covid-19,thời gian giao hàng có thể dài hơn dự kiến từ 1-3 ngày)</p>
                        </div>

                    </div>
                </div>

                <div className="d-flex justify-content-end bottom">
                    <div>
                        <span>Tổng số tiền ({numProductSelected} sản phẩm):</span>
                        <strong><small>₫</small>{Number.convertToMoney(totalPrice)}</strong>
                    </div>
                    
                </div>
            </CartFooter>


        </div>
    );
}

export default ShopItem;