import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

// Components
import CheckBox from '../../common/component/CheckBox';
import ConfirmPopup from './../Layout/ConfirmPopup';

// icons
import {
    questionIcon, 
    coinIcon, 
    voucherIcon
} from './../../../asset/icon';

// actions
import {actUpdateAllCartItem, actDeleteMultiCartItem} from './../../common/module/cart/action';

// modules
import Number from '../../../utils/formatNumber';

const WidgetContainer = styled.div``;

CartControl.propTypes = {
    cart: PropTypes.array.isRequired,
};

function CartControl({cart}) {
    const [isOpenConfirmPopup, setIsOpenConfirmPopup] = useState(false);
    const [listSelectedCartItem, setListSelectedCartItem] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    // function
    const checkAllChecked = () => {
        return !cart.some(cartItem => {
            return cartItem.listProduct.some(prod => !prod.isChose);
        });
    }

    const collectProductSelected = () => {
        let totalPrice = 0;
        let numProduct = 0;
        let numProductSelected = 0;
        cart.forEach(shop => {
            shop.listProduct.forEach(prod => {
                numProduct++;
                if(prod.isChose) {
                    numProductSelected++;
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
        return {totalPrice, numProduct, numProductSelected};
    }

    // handle event
    const onHandleUpdateAll = () => {
        dispatch(actUpdateAllCartItem());
    }

    const onRemoveMultiCartItem = () => {
        const listCartItemId = [];
        cart.forEach(shop => {
            shop.listProduct.forEach(cartItem => {
                if(cartItem.isChose) {
                    listCartItemId.push(cartItem._id);
                }
            })
        });
        if(listCartItemId.length) {
            setIsOpenConfirmPopup(true);
        }
        setListSelectedCartItem(listCartItemId);
    }

    const onHandleConfirmPopup = () => {
        dispatch(actDeleteMultiCartItem({
            listCartItem: listSelectedCartItem
        }))
        setIsOpenConfirmPopup(false);
    }

    const onHandleCancelPopup = () => {
        setIsOpenConfirmPopup(false);
    }

    const onHandleCheckOut = () => {
        if(numProductSelected) {
            history.push("/checkout");
        }
    }

    const {numProduct, totalPrice, numProductSelected} = collectProductSelected();
    

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
                            <span>Chọn Tất Cả ({numProduct})</span>
                            <button onClick = {onRemoveMultiCartItem}>Xóa</button>
                        </div>

                        <div>
                            <span>
                                Tổng thanh toán ({numProductSelected} Sản phẩm): <strong className="ml-2"><small>₫</small>{Number.convertToMoney(totalPrice)}</strong>
                            </span>
                            <button 
                                className = {numProductSelected ? "btn-pay" : "btn-pay disabled"}
                                onClick = {onHandleCheckOut}
                            >Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpenConfirmPopup && <ConfirmPopup
                onCancelPopup = {onHandleCancelPopup}
                onConfirmPopup = {onHandleConfirmPopup}
            />}
            
        </WidgetContainer>
    );
}

export default CartControl;