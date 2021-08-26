import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Modules
import Number from '../../../util/number';

const WidgetContent = styled.div`
    position: relative;
    margin: 5px 5px;
    border: 1px solid #d5d5d5;
    background-color: #fff;

    .box-img{
        height: 280px;

        text-align: center;
    }

    .box-text{
        padding: 0 12px 20px;
    }

    .title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        text-transform: uppercase;
        font-size: 16px;

        word-wrap: break-word;
        overflow: hidden;
    }

    .price{
        margin-top: .5rem;
        padding-right: 15px;
        font-size: 1.5rem;
        flex: 1;

        .old-price{
            position: relative;

            display: inline-block;
            
            font-weight: 100;
            font-size: 13px;
            font-style: italic;

            color: #666;

            line-height: 1rem;

            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);

                width: 100%;
                height: 1px;
                background-color: #666;
            }
        }

        small{
            margin-right: .5rem;
            font-size: .75rem;
        }

        .sale-progress{
            padding: 0;
            font-size: 14px;
            font-weight: 100;

            line-height: 16px;
        }
    }
`;

const Button = styled.button`
    padding: 8px 15px;
    font-size: 15px;
    background-color: #ee4d2d;
    color: #fff;

    border-radius: 4px;
`;

ThumbnailSaleLarge.propTypes = {
    item: PropTypes.object.isRequired,
};

function ThumbnailSaleLarge({item}) {

    const { 
        title,
        image,
        numOrder,
        numSale,
        oldPrice,
        discount
    } = item;

    const remain =  (numOrder / numSale * 100).toFixed(0);

    const remainPrice = (oldPrice - (oldPrice * discount / 100)).toFixed(0);

    return (
        <WidgetContent>
            <Link to="/product-detail" className = "d-block">
                <div 
                    className="bg-image box-img mb-3" 
                    style = {{backgroundImage: `url(${image})`}}
                >
                    {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> Sale</div>
                    </div>
                ) : ""}

                </div>
                <div className="box-text">
                    <div className="title">{title}</div>
                    <div className = "d-flex align-items-end justify-content-between">
                        <div className="price">
                            <div className="old-price">
                                <small>₫</small>{Number.convertToMoney(oldPrice)}
                            </div>

                            <div className="new-price">
                                <small>₫</small>{Number.convertToMoney(remainPrice)}</div>

                            <div className="sale-progress">
                                <div className="num-sold">
                                    <div className="progress-mark" style={{width: `${100 - remain}%`}}></div>

                                    {remain > 50 ? <div className="bar-fire"></div> : ""}

                                    <span> {remain > 70 ? "Sap Chay Hang" : `Da ban ${numOrder}`}</span>

                                </div>
                            </div>
                        </div>
                        <Button>Mua Ngay</Button>
                    </div>
                </div>
            </Link>
        </WidgetContent>
    );
}

export default ThumbnailSaleLarge;