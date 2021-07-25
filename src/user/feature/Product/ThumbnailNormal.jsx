import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Import Module
import Number from './../../util/number';

const Thumbnail = styled.a`
    display: block;
    min-height: 300px;
    border: 1px solid #d5d5d5;
    transition: all .3s ease;

    &:hover{
        border-color: #c7a17a;
    }
`;

const BoxImage = styled.div`
    position: relative;
    height: 190px;
    
    text-align: center;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    overflow: hidden; 
`;

const BoxPrice = styled.div`
    del{
        color: #666;
        margin-right: 8px;
    }
`;

const BoxStoreAddress = styled.div`
    font-size: 12px;
`;


ThumbnailNormal.propTypes = {
    item: PropTypes.object,
};

ThumbnailNormal.defaultProps = {
    item: null
}

function ThumbnailNormal(props) {
    const {item} = props;

    return (
        <Thumbnail href = "#/">
            <BoxImage 
                style = {{
                    backgroundImage: `url(${item.image})`
                }}
            >
                {item.discount ? (
                    <div className="box-discount">
                        <div><b>{item.discount}%</b> Sale</div>
                    </div>
                ) : ""}
            </BoxImage>
            <div className="box-text">
                <div className = "mb-2 title">{item.title}</div>

                <BoxPrice>
                    <del>{item.price}.00$</del>
                    <span className="price">{item.price}.00<span className="currency-unit">$</span></span>
                </BoxPrice>

                <div className="d-flex align-items-center justify-content-between number">
                    <div className="rating">
                        <span aria-hidden="true" class="icon_star"></span>
                        <span aria-hidden="true" class="icon_star"></span>
                        <span aria-hidden="true" class="icon_star"></span>
                        <span aria-hidden="true" class="icon_star"></span>
                        <span aria-hidden="true" class="icon_star"></span>
                    </div>
                    {item.numOrder ? <span className="order-number">Da ban {Number.shortcutNumber(item.numOrder)}</span> :  ""}
                    
                </div>

                <BoxStoreAddress className="text-right">
                    {item.storeAddress}
                </BoxStoreAddress>
            </div>
        </Thumbnail>
    );
}

export default ThumbnailNormal;