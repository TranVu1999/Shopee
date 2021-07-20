import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Brand.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
};

Brand.defaultProps = {
    id: 0,
    image: ""
}

function Brand(props) {
    return (
        <a href = "#/" className = "brand">
            <img src = {props.image} alt="brand" />
        </a>
    );
}

export default Brand;
