import React from 'react';
import PropTypes from 'prop-types';

PageMainBanner.propTypes = {
    image: PropTypes.string,
};

PageMainBanner.defaultProps = {
    image: ""
}

function PageMainBanner(props) {

    const {image} = props;

    return (
        <div className = "main-page-banner">
            <a href="#/" className = "d-block">
                <div className = "bg-image" style = {{backgroundImage: `url(${image})`, height: "230px"}}></div>
            </a>
        </div>
    );
}

export default PageMainBanner;