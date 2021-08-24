import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Brand.propTypes = {
    item: PropTypes.object.isRequired,
};

function Brand({item}) {
    const {image} = item;

    return (
        <a href = "#/" className = "brand">
            <img src = {image} alt="brand" />
        </a>
    );
}

export default Brand;
