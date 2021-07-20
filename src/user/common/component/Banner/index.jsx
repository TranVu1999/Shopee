import React from 'react';
import PropTypes from 'prop-types';

Banner.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
};

Banner.defaultProps = {
    link: "",
    image: ""
}

function Banner(props) {

    const {link, image} = props;

    return (
        <a href = {link} className = "h-100 d-block flex-fill banner">
            <div className="h-100 bg-image" style={{backgroundImage: `url(${image})`}}></div>
        </a>
    );
}

export default Banner;