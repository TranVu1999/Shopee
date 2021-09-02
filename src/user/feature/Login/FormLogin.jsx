import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputPasswordBox from '../../common/component/InputPasswordBox';
import InputBox from '../../common/component/InputBox';

// Theme
import {BorderColor} from './../../theme';


// Others

const Form = styled.div`
    padding: 1.375rem 1.875rem 1rem;

    width: 24.8125rem;
    min-height: 30.125rem;
    box-sizing: border-box;

    font-size: .875rem;

    background-color: #fff;
    
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.14);
    border-radius: 4px;

    h5{
        max-width: 8.5rem;
        margin-bottom: 1.5rem;

        font-size: 1.25rem;
        color: #222;
        text-transform: capitalize;
    }
`;

const FormRow = styled.div`
    margin-bottom: 1.25rem;

    p{
        a{
            color: #ee4d2d;
        }
    }
`;

const LoginButton = styled.button` 
    display: block;
    width: 100%;
    padding: .5rem 0;

    text-align: center;
    text-transform: uppercase;

    color: #fff;
    background-color: #ee4d2d;

    box-shadow: 0 1px 1px rgba(0,0,0,.09);
    border-radius: 4px;
    cursor: pointer;
    
`;

const WidgetLine = styled.div`
    position: relative;
    margin: .5rem 0 .875rem;
    text-align: center;

    span{
        position: relative;
        padding: 0 .5rem;
        font-size: .75rem;
        background-color: #fff;
        z-index: 1;
    }

    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;

        width: 100%;
        height: 1px;
        background-color: ${BorderColor.mainColor};
        z-index: 0;
    }
`;

const SocialLogin = styled.button`
    display: flex;
    align-items: center;
    padding: .125rem .5rem .125rem .125rem;

    width: calc((100% - 8px) /3);
    border-radius: 2px;
    cursor: pointer;

    background-color: #1877f2;
        color: #fff;
    }

    .thumb-icon{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 2.25rem;
        width: 2.25rem;

        .icon{
            width: 1.375rem;
            height: 1.375rem;
            background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/a9e27c05087330a9581e4b9b39ad4417.png);
        }

        .facebook-icon{
            background-size: 372% 232%;
            background-position: 76.47058823529412% 15.151515151515152%;
        }

        .google-icon{
            background-size: 516.6666666666666% 322.22222222222223%;
            background-position: 100% 100%;
        }

        .apple-icon{
            background-size: 290.625% 181.25%;
            background-position: 8.19672131147541% 19.23076923076923%;
        }
    }
`;

const WidgetNotify = styled.div`
    padding: .875rem .75rem;
    margin-bottom: 1.875rem;

    background-color: #fff9fa;
    border: 1px solid rgba(255,66,79,.2);
    line-height: 1.25rem;

    span{
        margin-top: .25rem;
        font-size: 1rem;
        color: #ff424f;
    }

    p{
        margin: 0 0 0 .75rem;
    }
`;

FormLogin.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

FormLogin.defaultProps = {
    error: ""
}

function FormLogin({error, handleSubmit}) {

    // Data
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    });

    const emailVerify = {
        name: "email",
    }
    const passwordVerify = {
        name: "password",
    }

    // handle event
    const onHandleGetValue = event =>{
        const {
            name, value
        } = event;

        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const onHandleLogin = () =>{
        if(!handleSubmit) return;

        const data = {
            email: loginData.email,
            password: loginData.password 
        }
        handleSubmit(data);
    }

    return (
        
        <Form>
            <h5>Đăng nhập</h5>

            {error && <WidgetNotify className="d-flex">
                <span className="icon_close_alt2"></span>
                <p>{error}</p>
            </WidgetNotify>}
            

            <FormRow>
                <InputBox 
                    verify = {emailVerify}
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                    onHandleChange = {onHandleGetValue}
                    value = {loginData.email}
                />
            </FormRow>
            <FormRow>
                <InputPasswordBox 
                    verify = {passwordVerify}
                    placeholder="Password"
                    onHandleChange = {onHandleGetValue}
                    value = {loginData.password}
                />
            </FormRow>

            <LoginButton 
                className = {(loginData.email && loginData.password) ? "" : "disabled"}
                onClick = {onHandleLogin}
            >Đăng nhập</LoginButton>

            <div className="mt-1 d-flex justify-content-between">
                <a href="#/">Quên mật khẩu</a>
                <a href="#/">Đăng nhập với SMS</a>
            </div>

            <WidgetLine>
                <span>HOẶC</span>
            </WidgetLine>

            <FormRow className="d-flex align-items-center" style = {{gap: ".5rem"}}>
                <SocialLogin>
                    <div className="thumb-icon">
                        <div className="icon facebook-icon"></div>
                    </div>
                    Facebook
                </SocialLogin>

                <SocialLogin>
                    <div 
                        className="thumb-icon" 
                        style = {{backgroundColor: "#fff", marginRight: ".5rem"}}>
                        <div className="icon google-icon"></div>
                    </div>
                    Google
                </SocialLogin>

                <SocialLogin style = {{backgroundColor: "#000"}}>
                    <div className="thumb-icon" >
                        <div className="icon apple-icon"></div>
                    </div>
                    Apple
                </SocialLogin>
            </FormRow>

            <FormRow>
                <p className="text-center">Bạn mới biết đến Shopee? <a href="#/">Đăng ký</a></p>
            </FormRow>
        </Form>
       
    );
}

export default FormLogin;