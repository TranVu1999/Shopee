import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

HeaderNav.propTypes = {
    
};

function HeaderNav(props) {
    return (
        <nav className="text-right header__nav">
            <ul>
                <li><a href="/" className="nav-span">Home</a></li>

                <li className="toggle-sub-menu">
                    <div className="nav-span">
                        <span>About</span>
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                        <span aria-hidden="true" className="arrow_triangle-down"></span>
                    </div>

                    <ul className="sub-menu">
                        <li><a href="about">About Me</a></li>
                        <li><a href="contact">Contact Us</a></li>
                        <li><a href="what-we-offer">What We Offer</a></li>
                        <li><a href="booking">Booking</a></li>
                    </ul>
                </li>

                <li><a href="/mall" className="nav-span">Mall</a></li>

                <li><a href="/blog-list" className="nav-span">Blog</a></li>

                <li className="toggle-sub-menu">
                    <div className="nav-span">
                        <span id="toggleLoginForm">My Account</span>
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                        <span aria-hidden="true" className="arrow_triangle-down"></span>
                    </div>

                    {/* {renderGuestAction()} */}
                </li>

                <li className="bulkhead"><span /></li>

                <li className="toggle-span">
                    <div className="header__cart">
                        <div>
                        <span className="nav-span icon icon-cart"></span>
                        <span className="number">0</span>
                        </div>

                        {/* <HeaderCart
                            listProduct = {cartInfo.data}
                        /> */}
                    </div>
                </li>

                <li>
                    <button className="header__search">
                        <span className="nav-span icon icon-search" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;