import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Modules 
import Number from '../../../util/number';

const WidgetContent = styled(Link)`
    display: block;

    .box-img{
        position: relative;
        height: 173px;

        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .pice{
        font-size: 20px;
        color: #ee4d2d;
        text-align: center;
    }

    .sale-progress{
        font-size: .75rem;
    }
`;


ThumbnailSale.propTypes = {
    item: PropTypes.object,
};

ThumbnailSale.defaultProps = {
    item: null
}

function ThumbnailSale(props) {

    const {
        image, 
        link, 
        price, 
        numOrder, 
        discount,
        numSale
    } = props.item;

    const remain =  (numOrder / numSale * 100).toFixed(0);

    return (
        <WidgetContent to="/product-detail"
            className = "product-thumbnail-sale-content"
        >
            <div className="box-img" 
                style = {{backgroundImage: `url(${image})`}}
            >
                {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> Sale</div>
                    </div>
                ) : ""}
            </div>
            <div className="box-text">
                <div className="mb-2 pice">₫ {Number.convertToMoney(price) }</div>
                <div className="sale-progress">
                    <div className="num-sold">
                        <div className="progress-mark" style={{width: `${100 - remain}%`}}></div>

                        {remain > 50 ? <div className="bar-fire"></div> : ""}
                        

                        <span> {remain > 70 ? "Sap Chay Hang" : `Da ban ${numOrder}`}</span>

                    </div>
                </div>
            </div>
        </WidgetContent>
    );
}

export default ThumbnailSale;