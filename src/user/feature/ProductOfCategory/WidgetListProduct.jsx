import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Modules
import Number from '../../util/number';
import {vanIcon} from './../../../asset/icon';


const ProductBox = styled(Link)`
    display: block;
    width: calc((100% - 32px) / 5);
    margin: 4px;
    padding-bottom: .5rem;

    border: 1px solid #e5e5e5;
    background-color: #fff;

    &:nth-child(5n) {
        margin-left: 0;
    }

    &:nth-child(5n + 5) {
        margin-right: 0;
    }

    &:hover {
        border: 1px solid #ee4d2d;
    }


    .product__thumbnail {
        height: 190px;
        border: none;

        &:hover {
            border: none;
        }
    }

    img{
        max-width: 100%!important;
    }
`;


WidgetListProduct.propTypes = {
    items: PropTypes.array,
};

WidgetListProduct.defaultProps = {
    items: []
}

function WidgetListProduct(props) {
    const {items} = props;

    // render

    const renderPrice = product => {
        const {price, classification} = product;

        if(classification) {
            const {tablePrice} = classification;
            const arrPrice = [];
            for(let indx in tablePrice) {
                arrPrice.push(tablePrice[indx]);
            }

            return arrPrice.reduce((minPrice, currentPrice) => {
                if(currentPrice < minPrice) {
                    return currentPrice;
                }

                return minPrice;
            }, tablePrice[0].price);
        }
        return price;
    }

    const renderItems = () =>{
        if(items.length) {
            return items.map(prod =>{
                const {
                    _id, 
                    alias,
                    avatar, 
                    discount, 
                    title, 
                    price,
                    numOrder,
                    deliveryAddress
                } = prod;
    
                return (
                    <ProductBox 
                        key = {_id} 
                        to = {`/product-detail/${alias}.${_id}`}
                        className = "product"
                    >
                        <div 
                            className = "product__thumbnail" 
                            style = {{backgroundImage: `url(${avatar})`}}
                        >
                            {discount ? (
                                <div className="box-discount">
                                    <div><b>{discount}%</b> Sale</div>
                                </div>
                            ) : ""}
    
                            <div className="badge" ><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f67540f14c9c3888a0187b5954de12e6.png" alt="" /></div>
                        </div>
    
                        <div className="product__text">
                            <div className = "mb-2 title">{title}</div>
    
                            <div className="d-flex align-items-center justify-content-between price">
                                <div>
                                    {discount &&  <del>{price}</del>}
                                   
                                    <span className="price">
                                        <small>₫</small>
                                        {Number.convertToMoney(renderPrice(prod))}
                                    </span>
                                </div>
                                
                                {vanIcon}
                            </div>
    
                        <div className="d-flex align-items-center justify-content-between number">
                            <div className="rating">
                                <span class="icon_star"></span>
                                <span class="icon_star"></span>
                                <span class="icon_star"></span>
                                <span class="icon_star"></span>
                                <span class="icon_star"></span>
                            </div>
                            {numOrder ? <span className="order-number">Da ban {Number.shortcutNumber(numOrder)}</span> :  ""}
                            
                        </div>
    
                        <div className="text-right delivery-address">
                            {deliveryAddress.province}
                        </div>
                    </div>
                    </ProductBox>
                );
            })
        }

        return (
            <div className="d-flex align-items-center justify-content-center text-center empty-list-product">
                <div>
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png" alt="not result" />
                    <p>Không tìm thấy kết quả</p>
                </div>
                
            </div>
        );
        
    }

    return (
        <div className="row">
            {renderItems()}
        </div>
    );
}

export default WidgetListProduct;