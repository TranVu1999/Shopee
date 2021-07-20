import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';


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
        <a 
            href = {link}
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
                <div className="mb-2 pice">{price}.00$</div>
                <div className="sale-progress">
                    <div className="num-sold">
                        <div className="progress-mark" style={{width: `${100 - remain}%`}}></div>

                        {remain > 50 ? <div className="bar-fire"></div> : ""}
                        

                        <span> {remain > 70 ? "Sap Chay Hang" : `Da ban ${numOrder}`}</span>

                    </div>
                </div>
            </div>
        </a>
    );
}

export default ThumbnailSale;