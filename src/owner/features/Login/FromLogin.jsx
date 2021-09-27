import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Form validation
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';

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
    // validate
    const validationSchema = Yup.object().shape({
        userLogin: Yup.string()
                    .required("Không được để trống thông tin đăng nhập"),
        password: Yup.string()
                    .required("Không được để trống mật khẩu")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            userLogin: "",
            password: ""
        }
    });

    const onHandleSubmitLogin = loginInfo => {
        console.log({loginInfo});

        if(!onHandleSubmit) return;
        const data = {
            userLogin: loginInfo.userLogin,
            password: loginInfo.password,
            role: "owner"
        }
        onHandleSubmit(data);
    }

    return (
        <WidgetContent>
            <form
               onSubmit = {handleSubmit(onHandleSubmitLogin)} 
            >
                <WidgetInput 
                    className= {errors.userLogin && "ping-pong"}
                >
                    <input 
                        type="text" 
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                        {...register("userLogin")}
                    />

                    {errors.userLogin && <p className="notify">{errors.userLogin.message}</p>}
                    
                    
                </WidgetInput>
                <WidgetInput
                    className= {errors.password && "ping-pong"}
                >
                    <input 
                        type="text" 
                        placeholder="Password"
                        {...register("password")}
                    />
                    {errors.password && <p className="notify">{errors.password.message}</p>}
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