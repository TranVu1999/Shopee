import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';

StoreThumbnail.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};

StoreThumbnail.defaultProps = {
    link: "#/",
    image: "",
    title: ""
}

function StoreThumbnail(props) {

    const {title, link, image} = props;

    return (
        <div className = "store-thumbnail-content">
            <a href = {link}>
                <div 
                    className="thumbnail" 
                    style = {{backgroundImage: `url(${image})`}}
                ></div>
                <div className="text">{title}</div>
            </a>
        </div>
    );
}

export default StoreThumbnail;