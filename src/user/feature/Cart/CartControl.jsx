import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

// Components
import CheckBox from '../../common/component/CheckBox';

// icons
import {
    questionIcon, 
    coinIcon, 
    voucherIcon
} from './../../../asset/icon';

// actions
import {actUpdateAllCartItem} from './../../common/module/cart/action';

// modules
import Number from '../../../utils/formatNumber';

const WidgetContainer = styled.div``;

CartControl.propTypes = {
    cart: PropTypes.array.isRequired,
};

function CartControl({cart}) {
    const dispatch = useDispatch();
    // function
    const checkAllChecked = () => {
        return !cart.some(cartItem => {
            return cartItem.listProduct.some(prod => !prod.isChose);
        });
    }

    // handle event
    const onHandleUpdateAll = () => {
        dispatch(actUpdateAllCartItem());
    }

    // render
    const renderTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(shop => {
            shop.listProduct.forEach(prod => {
                if(prod.isChose) {
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
        });

        return totalPrice;
    }

    return (
        <WidgetContainer className="cart-control">
            <div className="container">
                <div className="cart-control__container">
                    <div className="d-flex align-items-center justify-content-end cart-control--top">
                        <div className="d-flex align-items-center justify-content-between cart-discount">
                            <div className="d-flex align-items-center">
                                {voucherIcon}
                                Shopee Voucher
                            </div>

                            <div>
                                <button>Chọn hoặc nhập mã</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end cart-control--middle">
                        <div className="d-flex justify-content-between cart-coin">
                            <div className="d-flex align-items-center">
                                <CheckBox/>
                                <div className="ml-2 mr-4">
                                    {coinIcon} Shopee Xu
                                </div>
                                <div className="notify">
                                    Bạn chưa có Shoepe Xu
                                    {questionIcon}
                                </div>
                            </div>

                            <div>-₫0</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between cart-control--bottom">
                        <div className="d-flex align-items-center">
                            <CheckBox
                                isChecked = {checkAllChecked()}
                                onChose = {onHandleUpdateAll}
                            />
                            <span>Chọn Tất Cả (2)</span>
                            <button>Xóa</button>
                        </div>

                        <div>
                            <span>Tổng thanh toán (0 Sản phẩm): <strong>₫{Number.convertToMoney(renderTotalPrice())}</strong></span>
                            <button className="btn-pay">Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </WidgetContainer>
    );
}

export default CartControl;