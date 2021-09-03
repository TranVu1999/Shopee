import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CheckBox from './../../components/CheckBox';

// Modules
import Validate from './../../../utils/validate';

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

    p{
        margin: 0;
        font-size: .75rem;
        color: #ee4d2d;
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
   onHandleSubmit: PropTypes.func.isRequired,
};

function FromLogin({onHandleSubmit}) {
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

    const handleSubmit = event => {
        event.preventDefault();

        let flag = false;
        let newData = {
            ...loginData
        }

        if(!username.value){
            flag = true;
            newData = {
                ...newData,
                username: {
                    value: newData.username.value,
                    error: "Không được để trống ô này!"
                }
            }
        }else if(!Validate.email(username.value)){
            
            flag = true;
            newData = {
                ...newData,
                username: {
                    value: username.value,
                    error: "Dữ liệu bạn nhập vào không đúng!"
                }
            }
        }

        if(!password.value){
            flag = true;
            newData = {
                ...newData,
                password: {
                    value: newData.password.value,
                    error: "Không được để trống ô này!"
                }
            }
        }


        if(flag){
            console.log({newData})
            setLoginData({...newData});
        }else{
            if(!onHandleSubmit) return;

            const data = {
                email: username.value,
                password: password.value
            }
            onHandleSubmit(data);
        }
        
    }
    

    return (
        <WidgetContent>
            <form
               onSubmit = {handleSubmit} 
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

                    {username.error && <p>{username.error}</p>}
                    
                </WidgetInput>
                <WidgetInput
                    className= {password.error && "ping-pong"}
                >
                    <input 
                        type="text" 
                        placeholder="Password"
                        name = "password"
                        value = {password.value}
                        onChange = {handleChange}
                    />
                    {password.error && <p>{password.error}</p>}
                </WidgetInput>

                <WidgetInput>
                    <div className="d-flex justify-content-between">
                        <CheckBox label = "Nhớ tôi"/>
                        <a href="#/" className="button-link">Quên mật khẩu?</a>
                    </div>
                </WidgetInput>

                <WidgetInput>
                    <button className = "d-block w-100"
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