import React from 'react';
import styled from 'styled-components';

const WidgetContent = styled.div`
    padding: 5rem 0;
    font-size: .875rem;

    h1 {
        margin: 2rem 0 1rem;

        color: #333;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.375rem;
    }

    p {
        margin: 0 0 1.5rem;
        max-width: 30rem;

        color: #666;
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.25rem;
    }

    a {
        display: inline-block;
        padding: .357rem 1.5rem;
        color: #fff;
        background-color: #ee4d2d;
        border-radius: .25rem;
    }
`;

function NavigationPage(props) {
    return (
        <WidgetContent className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <img src="https://deo.shopeesz.com/shopee/pap-admin-live-sg/upload/upload_1396437671da07b5825d85e6f0eb7916.png" alt="shopee" />
                <h1>Đăng ký thành công</h1>
                <p>Hãy đăng bán sản phẩm đầu tiên để khởi động hành trình bán hàng cùng Shopee nhé!</p>
                <a href="#/">Thêm sản phẩm</a>
            </div>
        </WidgetContent>
    );
}

export default NavigationPage;