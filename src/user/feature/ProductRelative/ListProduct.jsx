import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ThumbnailNormal from '../Product/ThumbnailNormal';

const WidgetContent = styled.div``;

const Product = styled.div`
    width: 20%;
    padding: 4px;

    img{
        max-width: 100%!important;
    }
`;

ListProduct.propTypes = {
    listProduct: PropTypes.array.isRequired,
};

function ListProduct({listProduct}) {

    // render
    const renderListProduct = () =>{
        return listProduct.map(item =>{
            return (
                <Product key = {item.id}>
                    <ThumbnailNormal item = {item}/>
                </Product>
            );
        })
    }

    return (
        <WidgetContent className="d-flex flex-wrap">
            {renderListProduct()}
        </WidgetContent>
    );
}

export default ListProduct;