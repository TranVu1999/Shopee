import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

ProductCategoryThumbnail.propTypes = {
    item: PropTypes.array,
};

ProductCategoryThumbnail.defaultProps = {
    item: []
}

function ProductCategoryThumbnail(props) {
    const {item} = props;

    return (
        <div className = "product-category-thumbnail">
            <a href = "#/" className = "thumbnail">
                <img src = {item.image} alt="brand" />
                <span>{item.title}</span>
            </a>
        </div>
        
    );
}

export default ProductCategoryThumbnail;