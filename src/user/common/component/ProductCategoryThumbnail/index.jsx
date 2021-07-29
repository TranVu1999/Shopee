import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.scss';

ProductCategoryThumbnail.propTypes = {
    item: PropTypes.object,
};

ProductCategoryThumbnail.defaultProps = {
    item: {
        title: "",
        image: ""
    }
}

function ProductCategoryThumbnail(props) {
    const {title, image} = props.item;

    return (
        <div className = "product-category-thumbnail">
            <Link to = "/products-of-category" className = "thumbnail">
                <img src = {image} alt="brand" />
                <span>{title}</span>
            </Link>
        </div>
        
    );
}

export default ProductCategoryThumbnail;