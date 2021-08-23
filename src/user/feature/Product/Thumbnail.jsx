import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Modules
import Number from './../../util/number';

const WidgetContent = styled(Link)`
    background-color: #fff;

    display: block;
    min-height: 300px;

    border: 1px solid rgba(0,0,0,.05);

    transition: all .3s ease;

    .box-img{
        text-align: center;
        overflow: hidden;
        position: relative;

        img{
            display: inline-block;
            max-width: 190px;
            height: 190px;

            transition: all .3s ease;
        }
    }

    .box-text{
        padding: .75rem .5rem;

        .title{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            min-height: 36px;
            max-height: 36px;
            
            font-size: 0.8125rem;
            text-overflow: ellipsis;

            color: #222;

            line-height: 18px;
            word-wrap: break-word;
            overflow: hidden;
        }

        .price{
            font-size: 1.125rem;
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
        <WidgetContent to="/product-detail" className = "product__thumbnail">
            <div className="box-img">
                <img src = {img} alt = "product"/>

                {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> giảm</div>
                    </div>
                ) : ""}
                
            </div>
            <div className="box-text">
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