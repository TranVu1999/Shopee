import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Modules
import Number from './../../util/number';

// icons
const iconCar = <svg height="12" viewBox="0 0 20 12" width="20" class="shopee-svg-icon icon-free-shipping"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>

const iconStar = <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__dark-star icon-rating-solid"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>

const WidgetContent = styled(Link)`
    min-height: 300px;

    .box-img{
        text-align: center;
        overflow: hidden;
        position: relative;

        &>img{
            max-width: 190px;
            height: 220px;
        }
    }

    
`;

ProductThumbnail.propTypes = {
    product: PropTypes.object.isRequired,
};

function ProductThumbnail({product}) {
    // data
    const {
        img, 
        title, 
        discount, 
        numOrder, 
        price
    } = product;

    // render
    const renderSold = () =>{
        return numOrder > 1000 ? (numOrder/1000).toFixed(1) + "k" : numOrder;
    }

    return (
        <WidgetContent to="/product-detail" className = "product__thumbnail">
            <div className="box-img">
                <img src = {img} alt = "product"/>

                {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> giảm</div>
                    </div>
                ) : ""}

                <div className="badge"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f67540f14c9c3888a0187b5954de12e6.png" alt=""/></div>
                
            </div>
            <div className="box-text">
                <div className = "mb-2 title">{title}</div>

                <div className="d-flex align-items-center justify-content-between price">
                    <div className="d-flex">
                        <div className="mr-2 old">
                            <small>₫</small>
                            <span>{Number.convertToMoney(price)}</span>
                        </div>
                        <div className="new">
                            <small>₫</small>
                            <span>{Number.convertToMoney(price)}</span>
                        </div>
                    </div>

                    {iconCar}
                </div>

                <div className="d-flex justify-content-between statics">
                    <div className="order-number">Đã bán: {renderSold()}</div>
                    <div className="rating-number">
                        <span>
                            {iconStar}
                            {iconStar}
                            {iconStar}
                            {iconStar}
                            {iconStar}
                        </span>
                        <span>(1833)</span>
                    </div>
                </div>
            </div>
        </WidgetContent>
    );
}

export default ProductThumbnail;