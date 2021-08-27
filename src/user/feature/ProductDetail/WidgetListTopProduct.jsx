import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules 
import Number from '../../util/number';

const Product = styled.a`
    display: block;
    padding: 0 1.125rem;
    font-size: .875rem;

    .price{
        font-size: 1rem;
        color: #ee4d2d;

        .old{
            position: relative;
            color: rgba(0,0,0,.54);

            &:after{
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);

                width: 100%;
                height: 1px;
                background-color: rgba(0,0,0,.54);
            }
        }
    }
`;

const WidgetAvatar = styled.div`
    height: 180px;
    margin-bottom: 1rem;
    background-image: url(${props => props.image});
`;

const Title = styled.h5`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-weight: 400;
    text-transform: capitalize;

    color: rgba(0,0,0,.8);
    word-wrap: break-word;
    overflow: hidden;
    line-height: 1.2rem;
`;

WidgetListTopProduct.propTypes = {
    items: PropTypes.array,
};

WidgetListTopProduct.defaultProps = {
    items: []
}

function WidgetListTopProduct(props) {
    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{

            const {
                id,
                title, 
                discount, 
                image, 
                price
            } = item;
            const sale = discount? (price * discount / 100).toFixed(0) : 0;

            return (
                <div key = {id}>
                    <Product>
                        <WidgetAvatar className = "bg-image" image = {image}/>

                        <Title>{title}</Title>
                        <div className="d-flex justify-content-between price">
                            {discount ? (<div className = "old">
                                <small>₫</small>
                                {Number.convertToMoney(price)}
                            </div>) : ""}
                            <span className="new">
                                <small>₫</small>
                                {Number.convertToMoney(price - sale)}
                            </span>
                        </div>
                    </Product>

                    <div className = "mt-3 mb-4 horizontal-line-1"></div>
                </div>
            );
        })
    }

    return (
        <div>
            <div className = "px-3 page-product__sidebar--header">Mã giảm giá của Shop</div>
            {renderItems()}
        </div>
        
    );
}

export default WidgetListTopProduct;