import React from 'react';
import PropTypes from 'prop-types';
import darkLogo from './../../../../assets/image/logo/logo-1.png';
import lightLogo from './../../../../assets/image/logo/logo-2.png';
import './index.scss';

HeaderLogo.propTypes = {
    isDark: PropTypes.bool,
};

HeaderLogo.defaultProps ={
    isDark: false
}

function HeaderLogo(props) {

    return (
        <div className = "header__logo">
            <a href="#/">
                <img src = {props.isDark ? lightLogo :  darkLogo} alt="logo" />
            </a>
        </div>
    );
}

export default HeaderLogo;