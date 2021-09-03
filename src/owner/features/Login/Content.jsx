import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.section`
    margin-top: 6rem;
    padding: 0 3rem;

    .left{
        flex: 1;

        .text{
            margin: 2.5rem 2rem;
            max-width: 25rem;

            font-size: 1.125rem;
            line-height: 1.5rem;
            color: #666;

            h1{
                font-size: 2rem;
                font-weight: 600;
                color: #ee4d2d;
                line-height: 57px;
            }
        }

        img{
            height: 200px;
        }
    }

    .right{
        width: 400px;
    }
`;

const WidgetForm = styled.div`
    width: 25rem;
    padding: 2rem;

    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 2px;

    .title{
        margin-bottom: 2rem;

        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        color: #000;
        line-height: 30px;
    }
`;

const WidgetNotify = styled.div`
    padding: 11px 16px;
    margin-bottom: 16px;
    font-size: .875rem;

    color: rgb(255, 66, 79);
    background-color: #ffe9e8;
    border: 1px solid #ff736f;
    border-radius: 4px;
    line-height: 1.125rem;
`;

Content.propTypes = {
    Form: PropTypes.element.isRequired,  
    serverNotify: PropTypes.string,
};

Content.defaultProps = {
    serverNotify: ""
}

function Content({Form, serverNotify}) {

    return (
        <WidgetContent className="d-flex container">
            <div className="left">
                <div className="text">
                    <h1>Bán hàng chuyên nghiệp </h1>
                    <p>Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người bán </p>
                </div>
                
                <img src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/modules/account/image/login-img.9347138.png" alt="logo" />
            </div>

            <div className="right">
                <WidgetForm>
                    <div className="title">Đăng nhập vào Kênh Người Bán </div>
                    
                    {serverNotify && <WidgetNotify>
                        {serverNotify}
                    </WidgetNotify>}
                    
                    {Form}

                </WidgetForm>
            </div>
        </WidgetContent>
    );
}

export default Content;