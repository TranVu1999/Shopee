import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    font-size: .8125rem;
    background-color: #fff;
`;

const ServicesItem = styled.div`
    padding: 1rem .875rem;
    text-align: center;
    color: #222;
    line-height: 1.125rem;

    .thumbnail{
        height: 45px;
        width: 45px;
        margin: 0 auto .5rem;

        background-size: contain;
        background-repeat: no-repeat;
    }
`;

ListServices.propTypes = {
    
};

function ListServices(props) {
    // Data
    const [listServices] = React.useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/53d059b1f2592c05b8df8ae835950a2b_xhdpi",
            span: "Yên Tâm Mua Hàng"
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
            span: "Gì Cũng Rẻ - Từ 1K"
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
            span: "Hoàn Xu 15% Mỗi Ngày"
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/c7decf2ed8cf3b8f03e8595a808bae03_xhdpi",
            span: "Shopee Số Gì Đây"
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi",
            span: "Freeship Xtra"
        },
        {
            id: 6,
            image: "https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi",
            span: "Hàng Hiệu -50%"
        },
        {
            id: 7,
            image: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
            span: "Hàng Quốc Tế"
        },
        {
            id: 8,
            image: "https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi",
            span: "Shopee Premium"
        },
        {
            id: 9,
            image: "https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi",
            span: "Tech Zone - Siêu Thị Điện Tử"
        },
        {
            id: 10,
            image: "https://cf.shopee.vn/file/0c09ab833bc29cb260e9b14794c56977_xhdpi",
            span: "Nạp Thẻ, Hóa Đơn & E-voucher"
        }
    ]);

    // render
    const renderListServices = () =>{
        return listServices.map(item =>{
            return (
                <ServicesItem key = {item.id}>
                    <div 
                        className="thumbnail"
                        style = {{backgroundImage: `url(${item.image})`}}
                    ></div>
                    <span>{item.span}</span>
                </ServicesItem>
            );
        })
    }

    return (
        <WidgetContent className="d-flex">
            {renderListServices()}
        </WidgetContent>
    );
}

export default ListServices;