import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// UI
import {TextField} from '@material-ui/core';

// Theme 
import {BorderColor, Color} from './../../theme';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid #efefef;

    p {
        font-weight: 600;
    }
`;

const FormUpdate = styled.form`
    padding-bottom: 3rem;
`;

const InputControl = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
    font-size: .875em;

    label{
        width: 20%;
        margin: 0 2.5em 0 0;

        text-align: right;
        text-transform: capitalize;
    }

    input {
        width: 360px;
        padding: .375rem 1rem;
        border: 1px solid #efefef;
        border-radius: .25rem;

        &:focus {
            border-color: #666;
        }
    }

`;

const GroupInput = styled.div`
    display: flex;
    align-items: center;
    width: 360px;

    div.button {
        padding: 0 1rem;
        white-space: nowrap;
        background-color: #fbfbfb;
        line-height: 38px;

        border: 1px solid #efefef;
        border-left: 0;
        border-radius: 0 .25rem .25rem 0;
        cursor: pointer;
    }

    input {
        border-radius: .25rem 0 0 .25rem;
    }

    span {
        margin-left: .5rem;
    }
`;

const Button = styled.button`
    padding: .5em 1.5em;
    text-transform: capitalize;
    background-color: #ee4d2d;
    color: #fff;
    border-radius: 2px;
`;

const DivButton = styled.div`
    padding: .5em 1.5em;
    text-transform: capitalize;
    background-color: #ee4d2d;
    color: #fff;

    border-radius: 2px;
    opacity: .6;
    cursor: not-allowed;
`;

const TransparentButton = styled(Button)`
    background-color: transparent;
    color: #757575;
`;

const WidgetModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5em 2em;

    width: 500px;
    font-size: 16px;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,.14);

    p{
        max-width: 80%;
        margin-bottom: 1.5em;
    }
`;

const ModalTitle = styled.div`
    position: relative;

    h5{
        font-size: 1.5em;
        text-transform: capitalize;
        color: #222;
    }

    button{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        font-size: 1.5em;
        color: ${Color.mainColor};
    }
`;

const ContactButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: .5em 1em;
    margin-bottom: 1em;

    text-align: center;

    color: #555;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    span{
        margin-right: 1em;
        font-size: 1.125em;
    }
`;

WidgetUpdatePassword.propTypes = {
    verifyCode: PropTypes.string.isRequired,
    oldPassword: PropTypes.string.isRequired,
    onSendVerifyCode: PropTypes.func.isRequired,
}

function WidgetUpdatePassword({
    oldPassword,
    onSendVerifyCode,
    verifyCode
}) {
    
    // State
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [passwordInfo, setPasswordInfo] = useState({
        oldPassword: "",
        newPassword: "",
        verifyPassword: "",
        verifyCode: ""
    });

    
    const [currentSecond, setCurrentSecond] = useState(180)

    let id;

    const clear = () => {
        window.clearInterval(id);
    };

    // effect
    useEffect(() => {
        if(verifyCode && currentSecond > 0) {
            id = window.setInterval(() => {
                setCurrentSecond((c) => c - 1);
            }, 1000);
        }
        return clear;
        
    }, [verifyCode]);

    useEffect(() => {
        return clear;
    }, [])

    // handle event
    const onHandleOpenModal = isOpen =>{
        setIsOpenModal(isOpen);
    }
    
    const onHandleSubmit = event =>{
        event.preventDefault();
    }

    const onHandleChange = e => {
        const {name, value} = e.target;
        setPasswordInfo({
            ...passwordInfo,
            [name]: value
        });
    }

    const onHandleSendVerifyCode = () => {
        if(!onSendVerifyCode) return;
        onSendVerifyCode();
    }

    // render
    const renderButtonSubmit = () => {
        if(oldPassword) {
            if(passwordInfo.newPassword && passwordInfo.verifyPassword && passwordInfo.oldPassword) return <Button>Xác nhận</Button>

            return  <DivButton>Xác nhận</DivButton>
        }

        if(passwordInfo.newPassword && passwordInfo.verifyPassword && passwordInfo.verifyCode) return <Button>Xác nhận</Button>

        return  <DivButton>Xác nhận</DivButton>


    }
    const renderFormUpdate = () => {
        if(!oldPassword) {
            return (
                <FormUpdate onSubmit = {onHandleSubmit}>
                    <InputControl>
                        <label>Mật khẩu mới</label>
                        <input 
                            type="text" 
                            name = "newPassword"
                            value = {passwordInfo.newPassword}
                            onChange = {onHandleChange}
                        />

                        {oldPassword && <TransparentButton onClick = {() => {onHandleOpenModal(true)}}>Quên mật khẩu?</TransparentButton>}
                        
                    </InputControl>

                    <InputControl>
                        <label>Xác nhận mật khẩu</label>
                        <input 
                            type="text" 
                            name = "verifyPassword"
                            value = {passwordInfo.verifyPassword}
                            onChange = {onHandleChange}
                        />
                    </InputControl>

                    <InputControl>
                        <label>Mã xác minh</label>
                        <GroupInput>
                            <input 
                                type="text" 
                                name = "verifyCode"
                                value = {passwordInfo.verifyCode}
                                onChange = {onHandleChange}
                            />
                            <div 
                                className="button"
                                onClick = {onHandleSendVerifyCode}
                            >Gửi Mã xác minh</div>

                            {currentSecond && verifyCode && <span>({currentSecond}s)</span>}
                            
                        </GroupInput>
                        
                    </InputControl>
                    
                    <InputControl>
                        <label></label>

                        {renderButtonSubmit()}
                    </InputControl>
                </FormUpdate>
            );
        } 

        return (
            <FormUpdate onSubmit = {onHandleSubmit}>
                <InputControl>
                    <label>Mật khẩu hiện tại</label>
                    <TextField variant="outlined" className = "mr-1"/>
                    <TransparentButton onClick = {() => {onHandleOpenModal(true)}}>Quên mật khẩu?</TransparentButton>
                </InputControl>

                <InputControl>
                    <label>Mật khẩu mới</label>
                    <TextField variant="outlined"/>
                </InputControl>

                <InputControl>
                    <label>Xác nhận mật khẩu</label>
                    <TextField variant="outlined"/>
                </InputControl>
                
                <InputControl>
                    <label></label>
                    {renderButtonSubmit()}
                </InputControl>
            </FormUpdate>
        );
    }

    return (
        <WidgetContent className = "page-user--content br-2">
            <Title className = "page-user--header">
                <p>{oldPassword ? "Đổi mật khẩu" : "Thêm mật khẩu"}</p>
                <span>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            </Title>

            {renderFormUpdate()}

            {isOpenModal ? (
                <div className="modal-box bg-white">
                    <WidgetModalContent>
                        <ModalTitle>
                            <button onClick = {() => {onHandleOpenModal(false)}}>
                                <span className="arrow_back"></span>
                            </button>
                            
                            <h5 className="text-center">Đặt lại mật khẩu</h5>
                        </ModalTitle>

                        <div className="px-4">
                            <p className="text-center">Vui lòng chọn phương thức bạn muốn đặt lại mật khẩu:</p>

                            <div>
                                <ContactButton><span className="icon_mail_alt"></span>Email (tr***********@gmail.com)</ContactButton>
                                <ContactButton><span className="icon_phone"></span>Số điện thoại (********09)</ContactButton>
                            </div>
                        </div>
                        
                    </WidgetModalContent>
                </div>
            ) : ""}
        </WidgetContent>
    );
}

export default WidgetUpdatePassword;