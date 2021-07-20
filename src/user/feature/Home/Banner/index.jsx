import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

Banner.propTypes = {
    listBanner: PropTypes.array,
};

Banner.defaultProps = {
    listBanner: []
}

function Banner(props) {

    const renderBanner = () =>{
        return props.listBanner.map(item =>{
            return (
                <div className = "col item" key = {item}>
                    <a href="#/">
                        <img src = {item} alt="banner" />
                    </a>
                </div>
            );
        });
    }

    return (
        <div className = "skinny-banner">
            <div className="row">
                {renderBanner()}
            </div>
            
        </div>
    );
}

export default Banner;