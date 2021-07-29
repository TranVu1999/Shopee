import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Brand.propTypes = {
    item: PropTypes.object,
};

Brand.defaultProps = {
    item: {
        id: 0,
        image: ""
    }
    
}

function Brand(props) {
    const {image} = props.item;

    return (
        <a href = "#/" className = "brand">
            <img src = {image} alt="brand" />
        </a>
    );
}

export default Brand;
