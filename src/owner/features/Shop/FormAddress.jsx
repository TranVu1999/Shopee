import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
// components
import InputBox from './../../components/InputBox';
import CheckBox from './../../components/CheckBox';
import TextareaBox from './../../components/TextareaBox';
import SupperSelect from './../../../components/SupperSelect';

const WidgetContainer = styled.div`
    width: 540px;
`;

const TitleForm = styled.div`
    margin-bottom: 2rem;

    h5{
        margin: 0;
        font-size: 1.25rem;
        font-weight: 400;
        color: #222;
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

    input, textarea {
        padding: .5rem .875rem;
        width: 100%;
        border: 1px solid #d5d5d5;
        border-radius: 4px;
    }

    textarea {
        resize: none;
    }
`;

FormAddress.propTypes = {
    onClose: PropTypes.func.isRequired,
    listOptionAddress: PropTypes.array.isRequired,
};

function FormAddress({
    onClose,
    listOptionAddress
}) {

    // handle event
    const onHandleCloseForm = () => {
        if(!onClose) return;
        onClose();
    }

    

    return (
        <WidgetContainer>
            <TitleForm className="d-flex align-items-center justify-content-between">
                <h5>Thêm Địa Chỉ Mới </h5>
                <button
                    onClick = {onHandleCloseForm}
                >
                    <span aria-hidden="true" className="icon_close"></span>
                </button>
                
            </TitleForm>

            <FormContent>
                <WidgetFormInput>
                    <label>Họ & Tên</label>
                    <input type="text" placeholder="Nhập vào"
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="Nhập vào"/>
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</label>
                    <SupperSelect 
                        listOption = {listOptionAddress}
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Địa chỉ chi tiết</label>
                    <textarea placeholder="Nhập vào"/>
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

        </WidgetContainer>
    );
}

export default FormAddress;