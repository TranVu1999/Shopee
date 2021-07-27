import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
            <Link to = "/products-of-category" className = "thumbnail">
                <img src = {item.image} alt="brand" />
                <span>{item.title}</span>
            </Link>
        </div>
        
    );
}

export default ProductCategoryThumbnail;