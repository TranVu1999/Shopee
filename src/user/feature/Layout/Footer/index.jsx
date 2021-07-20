import React from 'react';
import './index.scss';

function Footer() {
    return (
        <footer className = "footer">
            <div className="section-padding footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="widget">
                                <h6>Opening Hours</h6>
                                <ul className = "open-time">
                                    <li>
                                        <span className = "date">Monday</span>
                                        <div className="line"></div>
                                        <span className="highlight time">Close</span>
                                    </li>
                                    <li>
                                        <span className = "date">Tuesday</span>
                                        <div className="line"></div>
                                        <span className="time">09:00-22:00</span>
                                    </li>
                                    <li>
                                        <span className = "date">Wednesday</span>
                                        <div className="line"></div>
                                        <span className="time">09:00-22:00</span>
                                    </li>
                                    <li>
                                        <span className = "date">Thursday</span>
                                        <div className="line"></div>
                                        <span className="time">09:00-22:00</span>
                                    </li>
                                    <li>
                                        <span className = "date">Friday</span>
                                        <div className="line"></div>
                                        <span className="time">09:00-01:00</span>
                                    </li>
                                    <li>
                                        <span className = "date">Saturday</span>
                                        <div className="line"></div>
                                        <span className="time">12:00-01:00</span>
                                    </li>
                                    <li>
                                        <span className = "date">Sunday</span>
                                        <div className="line"></div>
                                        <span className="time">09:00-22:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="widget">
                                <h6>Latest Post</h6>
                                <ul className = "latest-post">
                                    <li>
                                        <a href="/#">Expand your mind, change everything</a>
                                        <p>14.02.2017</p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <a href="/#">Places to get lost</a>
                                        <p>14.02.2017</p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <a href="/#">Lewis howes</a>
                                        <p>14.02.2017</p>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <a href="/#">Elevate your expectations</a>
                                        <p>14.02.2017</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="mb-40 widget">
                                <h6>Contact Us</h6>
                                <div className="contact">
                                    <span>tranvudpqn123@gmail.com</span>
                                    <span>037 767 0509</span>
                                    <span>01, Vo Van Ngan, Binh Tho, TP Thu Duc</span>
                                </div>
                            </div>

                            <div className="widget">
                                <h6>The Last Standard Post</h6>
                                <form className = "form-inline">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                    <button><span className="icon icon-play3"></span></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="widget">
                                <h6>Other Location</h6>

                                <div className="other-location">
                                    <h5>Barista Coffee Shop</h5>
                                    <p>01, Vo Van Ngan, Binh Tho, TP Thu Duc</p>
                                    <div className="mt-20 mb-20 line"></div>
                                    <h5>Barista Coffee </h5>
                                    <p>01, Vo Van Ngan, Binh Tho, TP Thu Duc</p>
                                    <div className="mt-20 mb-20 line"></div>
                                    <h5>Barista Coffee </h5>
                                    <p>01, Vo Van Ngan, Binh Tho, TP Thu Duc</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="py-5 footer__bottom">
                <div className="container">
                    <div className="d-flex justify-content-between copy-right">
                        <span>Barista Edge Theme</span>
                        <div className="social">
                            <a href="/#"><span className="icon icon-facebook" /></a>
                            <a href="/#"><span className="icon icon-twitter" /></a>
                            <a href="/#"><span className="icon icon-vimeo" /></a>
                            <a href="/#"><span className="icon icon-linkedin2" /></a>
                            <a href="/#"><span className="icon icon-tumblr" /></a>
                            <a href="/#"><span className="icon icon-instagram" /></a>
                        </div>
                        <span>© 2021 All rights reserved</span>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;