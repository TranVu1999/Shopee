import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

// icons
import {vanIcon} from './../../../asset/icon';
import CheckBox from '../../common/component/CheckBox';

// actions
import {actUpdateAllCartItem} from './../../common/module/cart/action';

const WidgetContent = styled.div`
    font-size: .875rem;
    line-height: 1.2;
`;

const Hint = styled.div`
    margin-bottom: .625rem;
    padding: .75rem 1.5rem;

    color: #222;
    background-color: #fffefb;

    border: rgba(224,168,0,0.4) 1px solid;
    border-radius: 2px;

    svg{
        margin-right: .5rem;
    }
`;

const WidgetHeader = styled.div`
    padding: 1rem 1.5rem;
    text-transform: capitalize;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .product-name{
        flex: 1;
        color: rgba(0,0,0,0.8);
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
        color: #888;
    }

    .control{
        width: 8.75rem;
        color: #888;
    }
`;

Header.propsType = {
    cart: PropTypes.array.isRequired,
}


function Header({cart}) {
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

    return (
        <WidgetContent>
            <Hint>
                {vanIcon}
                <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
            </Hint>

            <WidgetHeader className="d-flex align-items-center justify-content-between br-2">
                <CheckBox
                    isChecked = {checkAllChecked()}
                    onChose = {onHandleUpdateAll}
                />
                <div className="product-name">Sản phẩm</div>
                <div className="unit-price text-center">Đơn giá</div>
                <div className="amount text-center">Số lượng</div>
                <div className="total text-center">Số tiền</div>
                <div className="control text-center">Thao tác</div>
            </WidgetHeader>

        </WidgetContent>
    );
}

export default Header;