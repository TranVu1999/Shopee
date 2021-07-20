import React from 'react';
import PropTypes from 'prop-types';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

import './index.scss';

Header.propTypes = {
    isDark: PropTypes.bool,
};

Header.defaultProps = {
    isDark: false
};

function Header(props) {
    return (
        <header className = "bg-white header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <HeaderLogo/>
                    </div>
                    <div className="col-sm-7">
                        <HeaderNav/>
                    </div>
                </div>
                

                
            </div>
        </header>
    );
}

export default Header;