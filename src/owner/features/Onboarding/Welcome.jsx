import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WidgetContent = styled.div`
    padding: 3rem 0;
    
    img {
        with: 12.5rem;
        height: 12.5rem;
    }

    h1 {
        margin: 2rem 0 1rem;

        color: #333;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.375rem;
    }

    p {
        margin: 0 0 1.5rem;
        max-width: 21.875rem;

        color: #666;
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.25rem;
    }

    button {
        padding: .25rem 1rem;
        font-size: .875rem;
        background-color: #ee4d2d;
        color: #fff;
        border-radius: .25rem;
    }
`;

Welcome.propTypes = {
    onAcceptRegister: PropTypes.func.isRequired,
};

function Welcome({onAcceptRegister}) {

    // Handle events
    const handleClick = () => {
        if(!onAcceptRegister) return;

        onAcceptRegister();
    }

    return (
        <WidgetContent className = "d-flex align-items-center justify-content-center">
            <div className = "text-center">
                <img src="https://deo.shopeesz.com/shopee/pap-admin-live-sg/upload/upload_9dab85081088531ee6d1aa958a90f55e.png" alt="shopee" />
                <h1>Chào mừng đến với Shopee!</h1>
                <p>Để đăng ký bán hàng trên Shopee, bạn cần cung cấp một số thông tin cơ bản.</p>

                <button className = "shopee-btn" onClick = {handleClick}>Đăng ký</button>
            </div>
        </WidgetContent>
    );
}

export default Welcome;