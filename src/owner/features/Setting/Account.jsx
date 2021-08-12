import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import NotifyPopup from './../../components/NotifyPopup';
import InputBox from '../../components/InputBox';

// UI
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

// Theme
import {BorderColor} from './../../theme';


const WidgetContent = styled.div`
    
`;

const WidgetListItem = styled.div`
    padding-bottom: 2.5rem;
`;

const Row = styled.div`
    padding: 1.5rem 0 0rem 1.5rem;
    
`;

const WidgetIcon = styled.div`
    margin-right: 2rem;
    height: 1.5rem;
    width: 1.5rem;
    
    svg{
        fill: #999;
    }

    
`;

const WidgetInfo = styled.div`
    padding: 0 1.5rem 1.5rem 0;
    border-bottom: 1px solid ${BorderColor.mainColor};
`;

const WidgetResultValue = styled.div``

const WidgetLabel = styled.div`
    flex: 0 0 232px;
    font-size: 1.125rem;
    color: #333;
`;

const WidgetValue = styled.div`
    font-size: .875rem;
    color: #333;

    img{
        margin-right: .5rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
    }
`;

const Button = styled.button`
    padding: .375rem 1.5rem;
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    span{
        font-size: 1.125rem;
    }
`;

const WidgetFormUpdate = styled.div`
    margin-top: 1rem;
    padding: 2rem 1rem;

    font-size: .875rem;

    background-color: #f6f6f6;
    border-radius: 4px;

    label{
        min-width: 7rem;
        margin-right: 1.5rem;
        text-align: right;
    }

    p{
        margin-top: .875rem;
        font-size: .75rem;
        color: #999;
        line-height: 1rem;
    }
`;

const SaveButton = styled(Button)`
    display: block;
    
    color: #fff;
    background-color: #ee4d2d;
    border-color: #ee4d2d;
`;

const FormDialog = styled.div`
    min-width: 350px;
`;

const FormTitle = styled.h5`
    position: relative;
`;

const ButtonCloseForm = styled.button`
    font-size: 1.5rem;
    color: #999;

    &:hover{
        color: #333;
    }
`;

const FormContent = styled.div`
    padding: 1.125rem 0 0;
    font-size: .875rem;
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    label{
        display: block;
    }

    div{
        width: 100%;
    }
`;

const FormAction = styled.div`
    padding-bottom: 1.125rem;
    gap: 1rem;
`;

const AlertContent = styled.div`
    max-width: 350px;
    margin-bottom: 1rem;
    font-size: .875rem;
`;

const AlertAction = styled(FormAction)`
    
`;



Account.propTypes = {
    
};

function Account(props) {
    // Data
    const [isShowFormUpdate, setIsShowFormUpdate] = useState({
        username: false,
        email: false,
        password: false,
        phoneNumber: false
    });

    const [accountInfo, setAccountInfo] = useState({
        username: "tranvudpqn123",
        password: "",
        newPassword: "",
        confirmPassword: "",
        email: ""
    })

    // handle event
    const handleOpenFormUpdate = typeUpdate =>{
        let newIsShowFormUpdate = {
            ...isShowFormUpdate,
            [typeUpdate]: true
        };

        setIsShowFormUpdate(newIsShowFormUpdate);
    }

    const handleCloseFormUpdate = typeUpdate =>{
        let newIsShowFormUpdate = {
            ...isShowFormUpdate,
            [typeUpdate]: false
        };

        
        setAccountInfo({
            username: "tranvudpqn123",
            password: "",
            newPassword: "",
            confirmPassword: "",
            email: ""
        });
        setIsShowFormUpdate(newIsShowFormUpdate);
    }

    return (
        <WidgetContent>
            <WidgetListItem>
                <Row className="d-flex align-items-center">
                    <WidgetIcon className="align-self-stretch">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 1a4 4 0 0 1 2.126 7.389A5.999 5.999 0 0 1 14 14v.5a.5.5 0 1 1-1 0V14a5 5 0 0 0-10 0v.5a.5.5 0 1 1-1 0V14a6.002 6.002 0 0 1 3.874-5.612A4 4 0 0 1 8 1zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                    </WidgetIcon>

                    <WidgetInfo className="flex-fill">
                        <WidgetResultValue className="d-flex align-items-center">
                            <WidgetLabel>Hồ sơ của tôi
                            </WidgetLabel>

                            <WidgetValue className="d-flex align-items-center justify-content-between flex-fill">
                                <div className="d-flex align-items-center">
                                    <img src="https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e" alt="avatar" />
                                    <span>tranvudpqn456</span>
                                </div>

                                {isShowFormUpdate.username && 
                                    <Button
                                        onClick={() => {handleCloseFormUpdate("username")}}
                                    >Hủy</Button> || 
                                    <Button
                                        onClick={() => {handleOpenFormUpdate("username")}}
                                    >Sửa</Button>
                                }
                            </WidgetValue>

                        </WidgetResultValue>

                        <WidgetFormUpdate  
                            className= {isShowFormUpdate.username ? "d-flex" : "d-none" }
                        >
                            <label>Tên đăng nhập</label>

                            <form className="flex-fill">
                                <InputBox/>
                                <p>Tên đăng nhập phải có độ dài từ 5-30 ký tự. Ký tự hợp lệ bao gồm Tiếng Việt không dấu, chữ số, dấu gạch dưới, dấu chấm. Không sử dụng tên đăng nhập chứa dấu cách hoặc chỉ bao gồm chữ số.</p>
                                <SaveButton>Lưu</SaveButton>
                            </form>
                        </WidgetFormUpdate>


                    </WidgetInfo>
                </Row>

                <Row className="d-flex align-items-center">
                    <WidgetIcon className="align-self-stretch">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.473 10.365c2.035 1.298 1.368 2.653-1.092 4.015-2.337 1.294-5.135-.642-7.889-3.396l-.417-.424-.413-.436c-2.29-2.47-3.72-4.93-2.561-7.024C2.462.64 3.818-.027 5.116 2.007c1.119 1.754.801 2.468.432 3.065l-.176.28c-.278.463-.675.85-.566 1.316.045.192.47.876 1.596 2.027l.184.186c1.263 1.263 2.048 1.752 2.227 1.794.424.1.782-.22 1.19-.488l.478-.298.143-.08.151-.075c.546-.24 1.284-.271 2.698.63zm-2.355.313l-.107.06-.46.286-.387.263-.177.108c-.452.26-.897.372-1.402.254-.463-.109-1.3-.715-2.302-1.666l-.408-.4-.385-.393c-.959-1.005-1.545-1.812-1.658-2.295-.105-.448-.028-.85.173-1.25l.125-.226.305-.457.31-.498c.243-.424.234-.743-.263-1.58l-.21-.339-.137-.204c-.65-.91-1.106-.66-2.16 1.243-.808 1.462.13 3.498 2.813 6.275l.411.418c2.997 2.997 5.163 4.078 6.697 3.228l.37-.21c1.62-.94 1.73-1.376.776-2.018l-.286-.181c-.923-.566-1.3-.598-1.638-.418z"></path></svg>
                    </WidgetIcon>

                    <WidgetInfo className="flex-fill">
                        <WidgetResultValue className="d-flex align-items-center">
                            <WidgetLabel>Số điện thoại
                            </WidgetLabel>

                            <WidgetValue className="d-flex align-items-center justify-content-between flex-fill">
                                <span>********09</span>

                                {isShowFormUpdate.phoneNumber && 
                                    <Button
                                        onClick={() => {handleCloseFormUpdate("phoneNumber")}}
                                    >Hủy</Button> || 
                                    <Button
                                        onClick={() => {handleOpenFormUpdate("phoneNumber")}}
                                    >Sửa</Button>
                                }
                            </WidgetValue>

                        </WidgetResultValue>
                    </WidgetInfo>
                </Row>

                <Row className="d-flex align-items-center">
                    <WidgetIcon className="align-self-stretch">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zm0 1.6L8.277 8.416a.5.5 0 0 1-.467.047l-.087-.047L2 4.601V12h12V4.6zm-.903-.6H2.902L8 7.4 13.097 4z"></path></svg>
                    </WidgetIcon>

                    <WidgetInfo className="flex-fill">
                        <WidgetResultValue className="d-flex align-items-center">
                            <WidgetLabel>Email
                            </WidgetLabel>

                            <WidgetValue className="d-flex align-items-center justify-content-between flex-fill">
                                <span>tr********@gmail.com</span>

                                {isShowFormUpdate.email && 
                                    <Button
                                        onClick={() => {handleCloseFormUpdate("email")}}
                                    >Hủy</Button> || 
                                    <Button
                                        onClick={() => {handleOpenFormUpdate("email")}}
                                    >Sửa</Button>
                                }
                                
                            </WidgetValue>

                        </WidgetResultValue>

                        <WidgetFormUpdate  
                            className= {isShowFormUpdate.email ? "d-flex" : "d-none" }
                        >
                            <label>Email</label>

                            <form className="flex-fill">
                                <InputBox/>
                                <br />
                                <br />
                                <SaveButton>Lưu</SaveButton>
                            </form>
                        </WidgetFormUpdate>

                    </WidgetInfo>
                </Row>

                <Row className="d-flex align-items-center">
                    <WidgetIcon className="align-self-stretch">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a4 4 0 0 1 4 4v1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V5a4 4 0 0 1 4-4zm5 6H3v7h10V7zM8 9a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2A.5.5 0 0 1 8 9zm0-7a3 3 0 0 0-2.995 2.824L5 5v1h6V5a3 3 0 0 0-2.824-2.995L8 2z"></path></svg>
                    </WidgetIcon>

                    <WidgetInfo className="flex-fill" style={{border: "none"}}>
                        <WidgetResultValue className="d-flex align-items-center">
                            <WidgetLabel>Mật khẩu đăng nhập
                            </WidgetLabel>

                            <WidgetValue className="d-flex align-items-center justify-content-between flex-fill">
                                <span>Nhắn nhủ: Bạn nên thường xuyên thay đổi mật khẩu để tránh các sự cố về vấn đề bảo mật</span>

                                {isShowFormUpdate.password && 
                                    <Button
                                        onClick={() => {handleCloseFormUpdate("password")}}
                                    >Hủy</Button> || 
                                    <Button
                                        onClick={() => {handleOpenFormUpdate("password")}}
                                    >Sửa</Button>
                                }
                            </WidgetValue>

                        </WidgetResultValue>
                    </WidgetInfo>
                </Row>

            </WidgetListItem>

            {/* ALert Update phone Number */}
            <Dialog
                open={isShowFormUpdate.phoneNumber}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <AlertContent>Vui lòng truy cập mục Tài Khoản của Tôi tại trang shopee.vn để thay đổi số điện thoại của bạn.
                    </AlertContent>

                    <AlertAction className="d-flex justify-content-end">
                        <Button
                            onClick={() => {handleCloseFormUpdate("phoneNumber")}}
                        >Hủy</Button>
                        <SaveButton>Xác nhận</SaveButton>
                    </AlertAction>
                </DialogContent>
            </Dialog>

            {/* Form update password */}
            <Dialog
                open={isShowFormUpdate.password}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <FormDialog>
                        <FormTitle className="d-flex align-items-center justify-content-between">
                            Tạo mật khẩu đăng nhập
                            <ButtonCloseForm
                                onClick={() => {handleCloseFormUpdate("password")}}
                            >
                                <span aria-hidden="true" className="icon_close"></span>
                            </ButtonCloseForm>
                        </FormTitle>

                        <FormContent>
                            <FormGroup>
                                <label>Mật khẩu hiện tại</label>
                                <InputBox/>
                            </FormGroup>

                            <FormGroup>
                                <label>Mật khẩu mới</label>
                                <InputBox/>
                            </FormGroup>

                            <FormGroup>
                                <label>Xác nhận mật khẩu</label>
                                <InputBox/>
                            </FormGroup>
                        </FormContent>

                        <FormAction className="d-flex justify-content-end">
                            <Button
                                onClick={() => {handleCloseFormUpdate("password")}}
                            >Hủy</Button>
                            <SaveButton>Xác nhận</SaveButton>
                        </FormAction>

                    </FormDialog>
                </DialogContent>
            </Dialog>


        </WidgetContent>
    );
}

export default Account;