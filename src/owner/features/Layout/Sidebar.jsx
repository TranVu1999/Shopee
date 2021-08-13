import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const WidgetContent = styled.div`
    position: fixed;
    top: 4rem;
    left: 0;

    height: calc(100% - 4rem);
    width: 13.75rem;
    padding: 1.5rem 1rem 1.5rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    overflow-y: scroll;
    z-index: 100;
`;

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    // Data
    const portalSetting = "/portal/settings/";
    const portal = "/portal/";

    const SubMenuTransport = [
        {
            title: "Quản Lý Vận Chuyển",
            url: "#/"
        },
        {
            title: "Giao Hàng Loạt",
            url: "#/"
        },
        {
            title: "Cài Đặt Vận Chuyển",
            url: "#/"
        }
    ]

    const SubMenuSetting = [
        {
            title: "Địa Chỉ",
            url: `${portalSetting}address`
        },
        {
            title: "Thiết Lập Shop",
            url: `${portalSetting}shop/basic`
        },
        {
            title: "Tài Khoản",
            url: `${portalSetting}account`
        }
    ]

    const SubShopManagement = [
        {
            title: "Đánh Giá Shop",
            url: "#/"
        },
        {
            title: "Hồ Sơ Shop",
            url: "#/"
        },
        {
            title: "Trang Trí Shop",
            url: "#/"
        },
        {
            title: "Danh Mục Của Shop",
            url: `${portal}category`
        },
        {
            title: "Báo Cáo Của Tôi",
            url: `${portalSetting}shop/report`
        }
    ]

    return (
        <WidgetContent className="bg-white">
            <SidebarItem 
                icon="https://cf.shopee.vn/file/c15905d5a6284687c4a6ad00d0feb511" 
                span="Vận chuyển" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" 
                span="Quản Lý Đơn Hàng" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/3fa3bdb20eb201ae3f157ee8d11a39d5" 
                span="Quản Lý Sản Phẩm" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/2f9d62dd7e037c22608ac75dfb84a409" 
                span="Kênh Marketing" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/f9e8756bcf783fe1783bf59577fdb263" 
                span="Tài Chính" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/09759afab8ae066ca5e1630bc19133a1" 
                span="Dữ Liệu" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/ed031c6a398cc8b319b4ab17bd071843" 
                span="Phát Triển" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/9f2ae273250a1a723d7d8892c9584c6d" 
                span="Chăm sóc khách hàng" 
                subMenu={SubMenuTransport}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/6b1ffcde1ff12621088110f419a5283a" 
                span="Quản Lý Shop" 
                subMenu={SubShopManagement}
            />

            <SidebarItem 
                icon="https://cf.shopee.vn/file/789f116a0778cf137519cadb1165d70f" 
                span="Thiết Lập Shop" 
                subMenu={SubMenuSetting}
            />
        </WidgetContent>
    );
}

export default Sidebar;