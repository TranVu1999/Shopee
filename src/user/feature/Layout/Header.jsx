import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

// icons
import {logoIcon, cartIcon} from './../../../asset/icon';


// Icons
const iconNotify = <svg viewBox="3 2.5 14 14" x="0" y="0" ><path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path><path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path></svg>

const iconQuestion = <svg className="icon-question" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd" transform="translate(1)"><circle cx="7" cy="8" r="7" stroke="currentColor"></circle><path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"></path></g></svg>

const WidgetContent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 125px;
    
    font-size: .875rem;

    color: #fff;
    background: linear-gradient(-180deg,#f53d2d,#f63);
    z-index: 100;

    ul{
        margin: 0;

        li{
            display: inline-block;
        }
    }
`;

const HeaderTop = styled.div`
    padding: .125rem 0;
    margin-bottom: 1rem;
`;

const TopLeft = styled.div`

    li{
        margin-right: .5rem;
        line-height: 1rem;

        &:nth-child(1), &:nth-child(2){
            padding-right: .5rem;
            border-right: 2px solid rgba(255, 255, 255, .22);
        }
    }

    button{
        width: 1rem;
        height: 1rem;
        margin: 0 .25rem;
        
        font-size: 1.125rem;
        color: #fff;
    }
`;

const TopRight = styled.div`

    li{
        margin-right: 1rem;

        &:last-child{
            margin: 0;
        }

        &.sign-up {
            margin-right: .5rem;

            a{
                padding-right: .5rem;
                border-right: 1px solid rgba(255, 255, 255, .5);
            }
        }
    }

    svg{
        height: 1rem;
        width: 1rem;
        margin-right: .375rem;
        fill: #fff;

        &.icon-question{
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    img, div.avatar-thumbnail{
        height: 1.375rem;
        width: 1.375rem;
        margin-right: .5rem;
        border-radius: 50%;
    }

    div.avatar-thumbnail{
        background-color: #EC407A;
        color: #fff;
        font-size: 1.125rem;
        text-align: center;
        line-height: 1.375rem;
    }
`;

const HeaderBottom = styled.div`
    padding-bottom: .5rem;
`;

const Logo = styled.div`
    svg{
        width: 162px;
        height: 50px;
        fill: #fff;
    }
`;

const UserControlBox = styled.li`
    position: relative;

    &:hover .user-control{
        transform: scale(1);
    }

    .user-control {
        position: absolute;
        top: 120%;
        right: 0;
        transition: all .3s linear;

        width: 180px;
        transform: scale(0);
        transform-origin: 65% 0%;

        background-color: #fff;
        color: #333;
        box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
        border-radius: 2px;
        z-index: 1;

        &:after {
            content: '';
            position: absolute;
            top: 0%;
            left: 65%;
            transform: translate(-50%, -50%) rotateZ(45deg);

            width: 10px;
            height: 10px;
            background-color: #fff;
        }

        li {
            display: block;
            margin: 0;

            &:first-child {
                margin-top: .625rem;
            }

            &:last-child {
                margin-bottom: .625rem;
            }

            &:hover {
                background-color: #eee;
            }

            a, button {
                display: block;
                padding: .25rem 1.25rem;
            }
        }
        
        
    }
`;

const Cart = styled.div`
    .number{
        position: relative;

        span{
            position: absolute;
            transform: translate(-50%, -50%);

            padding: 0 .3125rem;
            min-width: .6875rem;
            box-sizing: content-box;
            
            text-align: center;

            color: #ee4d2d;
            background-color: #fff;

            border-radius: 25px;
            line-height: 1.2rem;
        }
    }

    svg{
        width: 1.625rem;
        height: 1.625rem;
        color: #fff;
        stroke: #fff;
        fill: #fff;
    }
`;

const SearchBox = styled.div`
    margin: 0 3rem;

    .input-box{
        padding: .25rem;
        border-radius: 2px;
        background-color: #fff;

        input{
            display: block;
            padding-left: .5rem;
            margin-right: 1rem;
            flex: 1;
        }

        button{
            width: 4rem;
            padding: .25rem 0;

            font-size: 1.125rem;

            background: #fb5533;
            color: #fff;
            border-radius: 2px;
        }
    }

    li{
        margin-right: 1rem;
        font-size: .75rem;
    }


`;

function Header() {  
    // Data
    const username = useSelector(state => state.accountReducer.username)
    const avatar = useSelector(state => state.accountReducer.avatar);

    return (
        <WidgetContent>
            <HeaderTop className="container">
                <div className="d-flex justify-content-between">
                    <TopLeft>
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
                    </TopLeft>

                    <TopRight>
                        <ul>
                            <li>
                                <a href="#/">
                                    {iconNotify}
                                    Thông báo
                                </a>
                            </li>
                            <li>
                                <a href="#/">
                                    {iconQuestion}
                                    Hỗ Trợ
                                </a>
                            </li>

                            {
                                username && <UserControlBox>
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
                                </UserControlBox>
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
                    </TopRight>
                </div>
            </HeaderTop>

            <HeaderBottom className="container">
                <div className="d-flex align-items-start justify-content-between">
                    <Logo>
                        <Link to="/">{logoIcon}</Link>
                    </Logo>

                    <SearchBox className="flex-fill">
                        <div className="d-flex input-box">
                            <input type="text" placeholder="Ở nhà không khó"/>
                            <button><span aria-hidden="true" className="icon_search"></span></button>
                        </div>

                        <ul>
                            <li>
                                <a href="#/">Bánh Tráng</a>
                            </li>
                            <li>
                                <a href="#/">Váy</a>
                            </li>
                            <li>
                                <a href="#/">Áo Phông</a>
                            </li>
                            <li>
                                <a href="#/">Quần</a>
                            </li>
                            <li>
                                <a href="#/">Bông Tẩy Trang</a>
                            </li>
                            <li>
                                <a href="#/">Balo</a>
                            </li>
                            <li>
                                <a href="#/">Dép</a>
                            </li>
                            <li>
                                <a href="#/">Khẩu Trang</a>
                            </li>
                        </ul>
                    </SearchBox>

                    <Cart>
                        <Link to="/cart">
                            <div className="number">
                                {cartIcon}
                                <span>4</span>
                            </div>
                        </Link>
                    </Cart>
                </div>
            </HeaderBottom>

        </WidgetContent>
    );
}

export default Header;