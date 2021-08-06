import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Voucher from './../../common/component/Voucher';

const WidgetContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: #f5f5f5;
    overflow-y: scroll;
    z-index: 1000;
`;

const VoucherContent = styled.div`
    width: 23.4375rem;
    height: 43.75rem;
    margin: 1.875rem auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Header = styled.div`
    position: relative;
    height: 7.75rem;
    background-color: #f36700;

    &>div{
        position: absolute;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        
        width: calc(100% - 2rem);
    }
`;

const Detail = styled.div`
    margin: 3rem auto 0;
    height: 27.1875rem;
    width: calc(100% - 2rem);

    font-size: .875rem;
    line-height: 22px;

    overflow-y: scroll;
`;

const Button = styled.div`
    margin: 1rem auto 0;
    width: calc(100% - 2rem);
    font-size: .875rem;

    a{
        display: block;
        width: 100%;
        padding: .25rem 0;

        text-align: center;
        color: #fff;
        background-color: #EE4D2D;
    }
`;

WidgetVoucherDetail.propTypes = {
    
};

function WidgetVoucherDetail(props) {
    // Data 
    const voucher = {
        id: 1,
        type: "shop",
        content: {
            badge: "Shop Yêu Thích",
            title: "Giảm ₫15k Đơn Tối Thiểu ₫245k",
            expire: "04.10.2021",
            url: "#/",
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc",
            brand: "SoTa Shop"
        },
        detail: [
            {
                key: "Ưu đãi",
                value: "Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé! Giảm 20% Đơn Tối Thiểu ₫200k Giảm tối đa ₫7k"
            },
            {
                key: "Có hiệu lực",
                value: "05.07.2021 15:35 - 31.08.2021 23:59"
            },
            {
                key: "Thiết bị",
                value: "Tất cả các thiết bị"
            },
            {
                key: "Sản Phẩm",
                value: "Cho tất cả sản phẩm"
            },
            {
                key: "Thanh Toán",
                value: "Tất cả các hình thức thanh toán"
            },
            {
                key: "Đơn vị vận chuyển",
                value: "Tất cả các đơn vị vận chuyển"
            },
            {
                key: "Xem chi tiết",
                value: "Giảm ngay 20%, tối đa ₫7.000, cho đơn hàng từ ₫200.000. Áp dụng đến 31-08-2021. Mỗi tài khoản chỉ được sử dụng một lần duy nhất. Mã giảm giá phát hành bởi Người bán và sẽ không được hoàn lại với bất kỳ lý do nào."
            }
        ]
        
    }

    // Effect
    React.useEffect(() =>{
        document.body.style.overflow = 'hidden';
    });

    // Render
    const renderDetail = () =>{
        return voucher.detail.map(item =>{
            return (
                <div key = {item.key}>
                    <strong>{item.key}</strong>
                    <p>{item.value}</p>
                </div>
            );
        })
    }

    return (
        <WidgetContent>
            <VoucherContent>
                <Header>
                    <div className="bg-white">
                        <Voucher item = {voucher} detail/>
                    </div>
                </Header>

                <Detail>{renderDetail()}</Detail>

                <Button>
                    <a href="#/" className="br-2">Dùng Ngay</a>
                </Button>

            </VoucherContent>
            
        </WidgetContent>
    );
}

export default WidgetVoucherDetail;