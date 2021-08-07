import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ShopCartItem from './ShopCartItem';
import CheckBox from '../../common/component/CheckBox';

// Theme 
import {BorderColor} from './../../theme';


const WidgetContent = styled.div`
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Header = styled.div`
    padding: 1.125rem 1.5rem;
    border: 1px solid ${BorderColor.mainColor};
`;

const ShopInfo = styled.div`
    margin-left: 1rem;

    span.badge{
        font-weight: 600;

        background-color: #ee4d2d;
        color: #fff;

        border-radius: 2px;
    }

    a{
        margin: 0 .65rem;
        font-size: .875rem;
        font-weight: 500;
        color: rgba(0,0,0,0.8);
    }

    button{
        color: #ee4d2d;
    }
`;

const Body = styled.div`

`;

const Footer = styled.div`
    font-size: .875rem;
    color: rgba(0,0,0,0.8);

    svg{
        color: #00bfa5;
        stroke: currentColor;
        fill: currentColor;
        width: 1.25rem;
        height: .9375rem;
        margin-right: 1rem;
    }

    &>div{
        padding: 1.125rem 1.5rem;
    }

    &>div:first-child{
        border-bottom: 1px solid ${BorderColor.mainColor};

        svg{
            color: #ee4d2d;
            width: 1.3125rem;
            height: 1.25rem;
        }

        button{
            padding: 0rem 1rem;
            margin-left: 1rem;

            background: #fff;
            color: #ee4d2d;
            border: .0625rem solid #ee4d2d;
            border-radius: 4px;
            line-height: 1.5rem;
        }
    }

    &>div:last-child{
        svg{
            color: #00bfa5;
            width: 1.3125rem;
            height: 1.25rem;
        }
    }

    .see-more-delivery{
        margin-left: .375rem;
        color: #05a;
        cursor: pointer;
    }
`;


ShopCart.propTypes = {
    
};

function ShopCart(props) {
    return (
        <WidgetContent className='bg-white'>
            <Header className="d-flex align-items-center">
                <CheckBox/>
                <ShopInfo className="d-flex align-items-center">
                    <span className="badge">Yêu thích +</span>
                    <a href="#/">ỐP LƯNG IPHONE - SHIN CASE</a>
                    <button><span className="icon_chat_alt"></span></button>
                </ShopInfo>
            </Header>

            <Body>
                <ShopCartItem/>
            </Body>

            <Footer>
                <div className="d-flex align-items-center">
                    <svg fill="none" viewBox="0 -2 23 22" class="shopee-svg-icon pcmall-cart_2zPMNi icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clip-rule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                        Lưu voucher giảm ₫3k
                        <button>Lưu</button>
                    </div>

                    <div className="d-flex align-items-center">
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon pcmall-cart_2u0eqF icon-free-shipping-line"><g><line fill="none" stroke-linejoin="round" stroke-miterlimit="10" x1="8.6" x2="4.2" y1="9.8" y2="9.8"></line><circle cx="3" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle><circle cx="10" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle><line fill="none" stroke-miterlimit="10" x1="10.5" x2="14.4" y1="7.3" y2="7.3"></line><polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" stroke-linejoin="round" stroke-miterlimit="10"></polyline><polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" stroke-linejoin="round" stroke-miterlimit="10"></polyline></g></svg>
                        Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)
                        <div className="see-more-delivery">Tìm hiểu thêm</div>
                    </div>

            </Footer>

        </WidgetContent>
    );
}

export default ShopCart;