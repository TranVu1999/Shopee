import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CheckBox from './../../components/CheckBox';

const WidgetContent = styled.div`
    font-size: .875rem;
`;

const WidgetInput = styled.div`
    margin-bottom: 1rem;

    input{
        width: 100%;
        padding: .5rem .875rem;
        margin-bottom: .125rem;

        border: 1px solid #d5d5d5;
        border-radius: 4px;
    }

    &.ping-pong{
        input{
            border-color: #ee4d2d;
        }
    }

    input[type="password"]{
        background-color: #FFFCC8;
    }

    p{
        margin: 0;
    }

    button{
        padding: .5rem .875rem;
        border-radius: 4px;
        background-color: #ee4d2d;
        color: #fff;

        &.disable{
            opacity: .7;
            cursor: not-allowed;
        }
    }

    .button-link{
        color: #2673dd;
    }
`;

const AnotherLogin = styled.div`
    border-top: 1px solid #e5e5e5;
    padding-top: 1rem;
    margin-top: 3rem;

    button{
        color: #2673dd;
    }
`;

FromLogin.propTypes = {
    
};

function FromLogin(props) {
    // data
    const [loginData, setLoginData] = React.useState({
        username: {
            value: "",
            error: ""
        },

        password: {
            value: "",
            error: ""
        }
    });

    const {username, password} = loginData;

    // handle event
    const handleChange = event =>{
        const {name, value} = event.target;

        const newData = {
            ...loginData,
            [name]: {
                value,
                error: ""
            }
        }

        setLoginData(newData);
    }

    return (
        <WidgetContent>
            <form
                
            >
                <WidgetInput 
                    className= {username.error && "ping-pong"}
                >
                    <input 
                        type="text" 
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                        name = "username"
                        value = {username.value}
                        onChange = {handleChange}
                    />

                    {username.error && <p>Không được để trống ô</p>}
                    
                </WidgetInput>
                <WidgetInput
                    className= {password.error && "ping-pong"}
                >
                    <input 
                        type="password" 
                        placeholder="Password"
                        name = "password"
                        value = {password.value}
                        onChange = {handleChange}
                    />
                    {password.error && <p>Không được để trống ô</p>}
                </WidgetInput>

                <WidgetInput>
                    <div className="d-flex justify-content-between">
                        <CheckBox label = "Nhớ tôi"/>
                        <a href="#/" className="button-link">Quên mật khẩu?</a>
                    </div>
                </WidgetInput>

                <WidgetInput>
                    <button 
                        className = {username.value && password.value ? "d-block w-100" : "d-block w-100 disable"}
                    >Đăng nhập</button>
                </WidgetInput>
            </form>

            <AnotherLogin className="text-center">
                <button>Đăng nhập với tài khoản Chính/ Phụ</button>
            </AnotherLogin>
        </WidgetContent>
    );
}

export default FromLogin;