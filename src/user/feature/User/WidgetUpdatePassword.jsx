import React from 'react';
import styled from 'styled-components';

// UI
import {TextField} from '@material-ui/core';

// Theme 
import {BorderColor, Color} from './../../theme';

const WidgetContent = styled.div`
    font-size: 16px;
`;

const FormUpdate = styled.form`

`;

const InputControl = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.125em;
    font-size: .875em;

    label{
        width: 20%;
        margin: 0 2.5em 0 0;

        text-align: right;
        text-transform: capitalize;
    }

    .MuiOutlinedInput-input{
        padding: 0.75rem 1rem;
        width: 400px;
    }
`;

const Button = styled.button`
    padding: .5em 1.5em;
    text-transform: capitalize;

    background-color: ${Color.mainColor};
    color: #fff;

    border-radius: 4px;
`;

const TransparentButton = styled(Button)`
    background-color: transparent;
    color: #333;
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


function WidgetUpdatePassword(props) {

    // State
    const [isOpenModal, setIsOpenModal] = React.useState(false);

    // Functions
    const onHandleOpenModal = isOpen =>{
        setIsOpenModal(isOpen);
    }


    const onHandleSubmit = event =>{
        event.preventDefault();
    }

    return (
        <WidgetContent className = "page-user--content">
            <div className = "page-user--header">
                <p>Đổi mật khẩu</p>
                <span>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            </div>

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
                    <Button>Xác nhận</Button>
                </InputControl>
            </FormUpdate>

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
                                <ContactButton><span className="icon_phone"></span>Email (tr***********@gmail.com)</ContactButton>
                            </div>
                        </div>
                        
                    </WidgetModalContent>
                </div>
            ) : ""}
        </WidgetContent>
    );
}

export default WidgetUpdatePassword;