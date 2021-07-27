import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// CSS
import './index.scss';

ThumbnailSaleLarge.propTypes = {
    item: PropTypes.object,
};

ThumbnailSaleLarge.defaultProps = {
    item: null
}

function ThumbnailSaleLarge(props) {

    const { item } = props;
    const remain =  item ? (item.numOrder / item.numSale * 100).toFixed(0) : 100;

    return (
        <div className = "thumbnail-sale-large-content">
            <Link to="/product-detail" className = "d-block">
                <div 
                    className="bg-image box-img mb-3" 
                    style = {{backgroundImage: `url(${item.image})`}}
                >
                    {item.discount ? (
                    <div className="box-discount">
                        <div><b>{item.discount}%</b> Sale</div>
                    </div>
                ) : ""}

                </div>
                <div className="box-text">
                    <div className="title">{item.title}</div>
                    <div className = "d-flex align-items-end justify-content-between">
                        <div className="price">
                            <div className="old-price">
                                <del>{item.oldPrice}.00$</del>
                            </div>
                            <div className="new-price">{(item.oldPrice - (item.oldPrice * item.discount / 100)).toFixed(0)}.00$</div>
                            <div className="sale-progress">
                                <div className="num-sold">
                                    <div className="progress-mark" style={{width: `${100 - remain}%`}}></div>

                                    {remain > 50 ? <div className="bar-fire"></div> : ""}

                                    <span> {remain > 70 ? "Sap Chay Hang" : `Da ban ${item.numOrder}`}</span>

                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <a href="#/" className = "buy-now">Mua Ngay</a>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ThumbnailSaleLarge;