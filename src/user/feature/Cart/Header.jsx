import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// icons
import {logoIcon, notificationIcon, questionIcon} from './../../../asset/icon';

const WidgetContainer = styled.header`
    height: auto!important;
    background: transparent!important;

    &.header {
        position: initial;
    }

    .header--top {
        padding: .25rem 0;
        margin-bottom: 0;
        background: linear-gradient(-180deg,#f53d2d,#f63);
    }

    .header--bottom {
        padding: 1.5rem 0;
        background-color: #fff;
    }

    .header__logo {
        font-size: 1.25rem;
        color: #ee4d2d;

        span {
            display: block;
            padding: .25rem 0 0 .75rem;
            margin: .5rem 0 0 1rem;
            border-left: 1px solid #ee4d2d;
        }

        svg {
            fill: #ee4d2d;
        }
    }

    .header__form {
        width: 50%;
    }
`;

const WidgetSearch = styled.form`
    border: 2px solid #ee4d2d;

    input {
        padding: 0 1rem;
    }

    button {
        padding: 0.3125rem 2rem;
        background-color: #ee4d2d;
        color: #fff;
    }
`;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    showFormSearch: PropTypes.bool,
};

Header.defaultProps = {
    showFormSearch: false
}

function Header({title, showFormSearch}) {

    const username = "tranvudpqn123";
    const avatar = "https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e_tn";

    return (
        <WidgetContainer className = "header">
            <header className="header--top">
                <div className="container d-flex justify-content-between">
                    <div className = "header--top--left">
                        <ul>
                            <li>
                                <Link to="/ban-hang">Kênh Người Bán</Link>
                            </li>
                            <li>
                                <a href="#/">Tải ứng dụng</a>
                            </li>
                            <li className="d-inline-flex align-items-center">
                                <a href="#/">Kết nối</a>

                                <div >
                                    <button><span aria-hidden="true" className="social_facebook_circle"></span></button>
                                    <button><span aria-hidden="true" className="social_instagram_circle"></span></button>
                                </div>
                                
                            </li>
                        </ul>
                    </div>

                    <div className="header--top--right">
                        <ul>
                            <li> <a href="#/"> {notificationIcon} Thông báo </a> </li>
                            <li> <a href="#/"> {questionIcon} Hỗ Trợ </a> </li>

                            {
                                username && <li className="header__user-control">
                                    <a href="#/" className="account">
                                        {avatar ? <img src={avatar} alt="avatar" /> : <div className="d-inline-block avatar-thumbnail">
                                            {username.slice(0, 1)}
                                        </div>}
                                        
                                        <span>{username}</span>
                                    </a>

                                    <div className="user-control">
                                        <ul>
                                            <li>
                                                <Link to="/user">Tài khoản của tôi</Link>
                                            </li>
                                            <li>
                                                <a href="#">Đơn mua</a>
                                            </li>
                                            <li>
                                                <button>Đăng xuất</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            }

                            {
                                !username && (<>
                                    <li className="sign-up">
                                        <a href="#/">Đăng ký</a>
                                    </li>
                                    <li>
                                        <Link to="/login">Đăng nhập</Link>
                                    </li>
                                </>)
                            }
                        </ul>
                    </div>
                </div>
            </header>

            <div className="header--bottom">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center header__logo">
                            <Link to="/" className="d-flex align-items-center">{logoIcon} <span>{title}</span></Link>
                        </div>
                        
                        {showFormSearch && <div className="header__form">
                            <WidgetSearch className="d-flex">
                                <input className="flex-fill" type="text" placeholder="MUA NGAY KẺO HẾT NGÀY"/>
                                <button><span className="icon_search"></span></button>
                            </WidgetSearch>
                        </div>}

                        
                    </div>
                </div>
            </div>
        </WidgetContainer>
    );
}

export default Header;