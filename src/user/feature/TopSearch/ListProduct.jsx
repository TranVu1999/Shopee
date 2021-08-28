import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ProductThumbnail from './ProductThumbnail';


const WidgetContent = styled.div`
    gap: 10px;
`;

const WidgetProduct = styled.div`
    width: calc((100% - 40px) /5 );
    .box-img>img {
        width: 100%;
        max-width: 250px;
    }
`;

ListProduct.propTypes = {
    listProduct: PropTypes.array,
};

ListProduct.defaultProps = {
    listProduct: []
}

function ListProduct({listProduct}) {

    const renderItems = () =>{
        return listProduct.map(item =>{
            return (
                <WidgetProduct key = {item.id}>
                    <ProductThumbnail product = {item}/>
                </WidgetProduct>
            );
        })
    }
    
    return (
        <WidgetContent className="d-flex flex-wrap">
            {renderItems()}
        </WidgetContent>
    );
}

export default ListProduct;