import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Thumbnail.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,

    price: PropTypes.number,
    numOrder: PropTypes.number,
    discount: PropTypes.number,
};

Thumbnail.defaultProps = {
    title: "Paper Pouch (The good approach)",
    img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
    price: 49.00,
    discount: 0,
    numOrder: 0
}


function Thumbnail(props) {

    const {img, title, discount, numOrder, price} = props;

    const renderSold = () =>{
        return numOrder > 1000 ? (numOrder/1000).toFixed(1) + "k" : numOrder;
    }

    return (
        <a href="#/" className = "product__thumbnail">
            <div className="box-img">
                <img src = {img} alt = "product"/>

                {discount ? (
                    <div className="box-discount">
                        <div><b>{discount}%</b> Sale</div>
                    </div>
                ) : ""}
                
            </div>
            <div className="box-text">
                <div className = "mb-2 title">{title}</div>

                <div className="d-flex justify-content-between number">
                    <span className="price">{price}.00<span className="currency-unit">$</span></span>

                    {numOrder ? <span className="order-number">Sold: {renderSold()}</span> :  ""}
                    
                </div>
            </div>
        </a>
    );
}

export default Thumbnail;