import React from 'react';
import styled from 'styled-components';
import {Link, useRouteMatch, NavLink} from 'react-router-dom';

// Theme
import {BorderColor} from './../../theme';
import { useState } from 'react';

const WidgetAccount = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-size: 15px;
    line-height: 21px;
    border-bottom: 1px solid ${BorderColor.mainColor};
`;

const WidgetAccountThumbnail = styled.a`
    display: block;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
`;

const WidgetAccountText = styled.div`
    padding-left: 1rem;
    flex: 1;
    flex-shrink: 0;

    strong{
        color: #333;
    }

    a{
        span{
            font-size: 0.875em;
        }
    }
`;

const WidgetDropdown = styled.div`
    margin-bottom: .875rem;
    font-size: 15px;

    a.active {
        color: #ee4d2d;
    }
`;

const WidgetDropdownIcon = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1rem;
`;

const WidgetListDropdownItem = styled.div`
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .4s cubic-bezier(.4,0,.2,1),opacity .4s cubic-bezier(.4,0,.2,1);  
    
    &.open{
        opacity: 1;
        max-height: 500px;
    }
`;

const WidgetDropdownItem = styled.div`
    padding-left: 2.25rem;
    line-height: 1.875rem;    
`;

function WidgetSidebar() {
    // Data
    let {path} = useRouteMatch();
    const [indexOpen, setIndexOpen] = useState(0);

    const onHandleChoseTab = index =>{
        if(index !== indexOpen){
            setIndexOpen(index);
        }
    }

    return (
        <>
            {/* Account Widget */}
            <WidgetAccount className = "d-flex ">
                <WidgetAccountThumbnail>
                    <img src="https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e_tn" alt="avatar" />
                </WidgetAccountThumbnail>
                <WidgetAccountText>
                    <strong>tranvudpqn123</strong>
                    <div>
                        <a href="#/"><span className="icon_pencil-edit_alt"></span> Sửa hồ sơ</a>
                    </div>
                </WidgetAccountText>
            </WidgetAccount>

            <div>
                <WidgetDropdown>
                    <div className = "d-flex">
                        <WidgetDropdownIcon>
                            <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="icon" />
                        </WidgetDropdownIcon>

                        <NavLink to={`${path}/information`} onClick = {() =>{onHandleChoseTab(0)}}>Tài khoản của tôi</NavLink>
                    </div>

                    <WidgetListDropdownItem className = {indexOpen === 0 ? "open" : ""}>
                        <WidgetDropdownItem>
                            <NavLink to={`${path}/information`} activeClassName = "active">Hồ sơ</NavLink>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <NavLink activeClassName = "active" to={`${path}/address`}>Địa chỉ</NavLink>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <NavLink activeClassName = "active" to={`${path}/update-password`}>Đổi mật khẩu</NavLink>
                        </WidgetDropdownItem>
                    </WidgetListDropdownItem>
                </WidgetDropdown>

                <WidgetDropdown>
                    <div className = "d-flex">
                        <WidgetDropdownIcon>
                            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="icon" />
                        </WidgetDropdownIcon>

                        <NavLink activeClassName = "active" to={`${path}/purchase`} onClick = {() =>{onHandleChoseTab(1)}}>Đơn Mua</NavLink>
                    </div>
                </WidgetDropdown>

                <WidgetDropdown>
                    <div className = "d-flex">
                        <WidgetDropdownIcon>
                            <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" alt="icon" />
                        </WidgetDropdownIcon>

                        <Link to={`${path}/notification`}  onClick = {() =>{onHandleChoseTab(2)}}>Thông báo</Link>
                    </div>

                    <WidgetListDropdownItem className = {indexOpen === 2 ? "open" : ""} >
                        <WidgetDropdownItem>
                            <a href="#/">Cập nhật đơn hàng</a>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <a href="#/">Khuyến mãi</a>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <a href="#/">Cập nhật Ví</a>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <a href="#/">Hoạt động</a>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <a href="#/">Cập nhật đánh giá</a>
                        </WidgetDropdownItem>
                        <WidgetDropdownItem>
                            <a href="#/">Cập nhật Shopee</a>
                        </WidgetDropdownItem>
                    </WidgetListDropdownItem>
                </WidgetDropdown>

                <WidgetDropdown>
                    <div className = "d-flex">
                        <WidgetDropdownIcon>
                            <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" alt="icon" />
                        </WidgetDropdownIcon>

                        <Link to={`${path}/voucher`}  onClick = {() =>{onHandleChoseTab(3)}}>Kho Voucher</Link>
                    </div>
                </WidgetDropdown>

                <WidgetDropdown>
                    <div className = "d-flex">
                        <WidgetDropdownIcon>
                            <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="icon" />
                        </WidgetDropdownIcon>

                        <Link to={`${path}/coin`} onClick = {() =>{onHandleChoseTab(4)}}>Shopee Xu</Link>
                    </div>
                </WidgetDropdown>

            </div>
        </>
        
    );
}

export default WidgetSidebar;