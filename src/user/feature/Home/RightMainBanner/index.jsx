import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../common/component/Banner';

RightMainBanner.propTypes = {
    items: PropTypes.array,
};

RightMainBanner.defaultProps = {
    items: []
}

function RightMainBanner(props) {

    const {items} = props;

    return (
        <div className = "h-100 d-flex flex-column right-main-banner">
            <div className = "h-100 pb-1">
                <Banner link = {items[0].link} image = {items[0].image}/>
            </div>

            <div className = "h-100 pt-1">
                <Banner link = {items[1].link} image = {items[1].image}/>
            </div>
            
            
        </div>
    );
}

export default RightMainBanner;