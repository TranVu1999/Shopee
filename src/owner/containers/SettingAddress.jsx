import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ListAddress from '../features/Setting/ListAddress';
import TitleContent from '../components/TitleContent';
import InputBox from '../components/InputBox';
import CheckBox from '../components/CheckBox';

// UI
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextareaBox from '../components/TextareaBox';
import SupperSelect from '../components/SupperSelect';

const Button = styled.button`
    padding: .5rem .875rem;

    font-size: .875rem;

    color: #fff;
    background-color: #ee4d2d;
    border-radius: 4px;

    span{
        margin-right: .5rem;
        font-size: 1.25rem;
    }
`;

const FormAddress = styled.div`
    width: 540px;
`;

const TitleForm = styled.div`
    margin-bottom: 2rem;

    h5{
        margin: 0;
        font-size: 1.125rem;
        font-weight: 400;
        color: #333;
    }


    span{
        font-size: 1.5rem;
        color: #999;
    }
`;

const FormContent = styled.div``;

const WidgetFormInput = styled.div`
    margin-bottom: 1.5rem;
    font-size: .875rem;

    label{
        display: block;
        margin-bottom: .5rem;
    }
`;


SettingAddress.propTypes = {
    
};

function SettingAddress(props) {
    // Data
    const [dialogData, setDialogData] = useState({
        isShow: false,
        data: {}
    });

    // handle event
    const handleCloseForm = () =>{
        setDialogData({...{dialogData}, isShow: false});
    }

    const handleOpenForm = data =>{
        if(data){

        }else{
            
        }
        setDialogData({...{dialogData}, isShow: true});

    }

    return (
        <section>
            <TitleContent 
                title="Địa Chỉ"
                subTitle="Quản lý việc vận chuyển và địa chỉ giao hàng của bạn "

                button = {<Button 
                    className="d-flex align-items-center"
                    onClick = {() => handleOpenForm()}
                >
                    <span aria-hidden="true" className="icon_plus"></span>
                    Thêm địa chỉ mới
                </Button>}
            />
            
            <ListAddress/>

            {/* Form update password */}
            <Dialog
                open={dialogData.isShow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <FormAddress>
                        <TitleForm className="d-flex align-items-center justify-content-between">
                            <h5>Thêm Địa Chỉ Mới </h5>
                            <button
                                onClick = {handleCloseForm}
                            >
                                <span aria-hidden="true" className="icon_close"></span>
                            </button>
                            
                        </TitleForm>

                        <FormContent>
                            <WidgetFormInput>
                                <label>Họ & Tên</label>
                                <InputBox/>
                            </WidgetFormInput>

                            <WidgetFormInput>
                                <label>Số điện thoại</label>
                                <InputBox/>
                            </WidgetFormInput>

                            <WidgetFormInput>
                                <label>Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</label>
                                <SupperSelect/>
                            </WidgetFormInput>

                            <WidgetFormInput>
                                <label>Địa chỉ chi tiết</label>
                                <TextareaBox/>
                            </WidgetFormInput>

                            <WidgetFormInput>
                                <div className="d-flex align-items-center mb-2">
                                    <CheckBox/>
                                    <span>Đặt làm địa chỉ mặc đinh</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <CheckBox/>
                                    <span>Đặt làm địa chỉ lấy hàng</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <CheckBox/>
                                    <span>Đặt làm địa chỉ trả hàng</span>
                                </div>
                            </WidgetFormInput>

                        </FormContent>

                    </FormAddress>
                </DialogContent>
            </Dialog>

        </section>
    );
}

export default SettingAddress;