import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ThumbnailNormal from './../Product/ThumbnailNormal';

const ProductBox = styled.div`
    width: 20%;
    padding: 4px;

    img{
        max-width: 100%!important;
    }
`;


WidgetListHotProduct.propTypes = {
    items: PropTypes.array,
};

WidgetListHotProduct.defaultProps = {
    items: []
}

function WidgetListHotProduct(props) {
    const {items} = props;

    const renderItems = () =>{
        return items.map(item =>{
            return (
                <ProductBox key = {item.id}>
                    <ThumbnailNormal item = {item}/>
                </ProductBox>
            );
        })
    }

    return (
        <div className="row">
            {renderItems()}
        </div>
    );
}

export default WidgetListHotProduct;