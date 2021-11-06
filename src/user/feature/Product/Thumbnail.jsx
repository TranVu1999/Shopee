import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Modules
import Number from './../../util/number';

const WidgetContent = styled(Link)`
    background-color: #fff;
    display: block;
    padding-bottom: 1rem;
    border: 1px solid #e5e5e5;
    transition: all .3s ease;

    .product__thumbnail{
        border: none;

        img{
            height: 190px;
            transition: all .3s ease;
        }
    }    

    &:hover{
        border-color: #ee4d2e;

        img{
            transform: scale(1.05);
        }
    }
`;

Thumbnail.propTypes = {
    item: PropTypes.object.isRequired,
};

function Thumbnail({item}) {

    const {
        img, 
        title, 
        discount, 
        numOrder, 
        price
    } = item;

    const renderSold = () =>{
        return numOrder > 1000 ? (numOrder/1000).toFixed(1) + "k" : numOrder;
    }

    return (
        <WidgetContent to="/product-detail" className = "product">
            <div className="product__thumbnail">
                <img src = {img} alt = "product"/>

                {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> giảm</div>
                    </div>
                ) : ""}
                
            </div>
            <div className="product__text">
                <div className = "mb-2 title">{title}</div>

                <div className="d-flex justify-content-between number">
                    <span className="price"><span className="currency-unit">₫</span>{Number.convertToMoney(price) }</span>

                    {numOrder ? <span className="order-number">Đã bán: {renderSold()}</span> :  ""}
                    
                </div>
            </div>
        </WidgetContent>
    );
}

export default Thumbnail;