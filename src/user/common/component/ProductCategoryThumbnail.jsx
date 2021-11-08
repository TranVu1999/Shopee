import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../../theme';

const WidgetContent = styled.div`
    font-size: .875rem;
    color: rgba(0,0,0,.8);
    text-align: center;

    .thumbnail{
        min-height: 150px;
        max-height: 150px;
        border-left: 1px solid rgba(0,0,0,.05);
        padding: 12px 4px;

        color: $main-color;

        &:first-child{
            border-top: 1px solid rgba(0,0,0,.05);
        }
    }

    a{
        display: block;
        flex: 1;
    }

    img{
        display: inline-block;
        width: 70%;
        object-fit: cover;
    }
`;

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
    const {title, image, alias} = props.item;

    return (
        <WidgetContent className="product-category-thumbnail">
            <Link to = {`/products-of-category/${alias}`} className = "thumbnail">
                <img src = {image} alt="brand" />
                <div>{title}</div>
            </Link>
        </WidgetContent>
        
    );
}

export default ProductCategoryThumbnail;