import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const WidgetAvatar = styled.div`
    width: 190px;
    height: 190px;
    margin: 0 auto 8px;

    background-image: url(${props => props.image});
`;

const Title = styled.h5`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;

    word-wrap: break-word;
    overflow: hidden;
    line-height: 1.4rem;
`;

ThumbnailResume.propTypes = {
    item: PropTypes.object,
};

ThumbnailResume.defaultProps = {
    item: {
        title: "",
        image: "",
        price: 0,
        discount: 0
    }
}

function ThumbnailResume(props) {
    const {title, discount, image, price} = props.item;

    const sale = discount? (price * discount / 100).toFixed(0) : 0;
    

    return (
        <Link to="/product-detail" className = "d-block px-3">
            <WidgetAvatar className = "bg-image" image = {image}/>
            <Title>{title}</Title>
            <div className="box-text">

                <div className="d-flex justify-content-between number">
                    {discount ? (<del className = "old-price">{price}.00$</del>) : ""}
                    <span className="price">{price - sale}.00<span className="currency-unit">$</span></span>
                </div>
            </div>
        </Link>
    );
}

export default ThumbnailResume;