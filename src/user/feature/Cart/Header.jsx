import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

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

    .check-box{
        margin-right: 1.5rem;
        height: 1.125rem;
        width: 1.125rem;
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 2px;

        &.active{
            position: relative;
            background-color: #ee4d2d;
            border-color: #ee4d2d;

            &:before{
                content: '';
                position: absolute;
                top: 15%;
                left: 55%;

                height: 7px;
                width: 11px;

                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform-origin: center;
                transform: rotate(-45deg) translate(-50%, -50%);
                
            }
        }
    }

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


Header.propTypes = {
    
};

function Header(props) {
    return (
        <WidgetContent>
            <Hint>
                <svg height="12" viewBox="0 0 20 12" width="20" class="shopee-svg-icon pcmall-cart_3pBte4 icon-free-shipping"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
            </Hint>

            <WidgetHeader className="d-flex align-items-center justify-content-between br-2">
                <div className="check-box active"></div>
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