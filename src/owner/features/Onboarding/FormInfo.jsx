import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import ModalAddress from '../../../user/feature/User/ModalAddress';

const WidgetContent = styled.form`
    font-size: .875rem;
`;

const WidgetInput = styled.div`
    padding: 2rem 0;
    max-width: 59rem;
    margin: 0 auto;
`;

const InputRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;    

    label {
        margin: 0 1rem 0;
        width: 12.5rem;
        text-align: right;

        span {
            color: #ee4d2d;
        }
    }

    .input-box{
        max-width: 28rem;
    }

    .email-box {
        cursor: not-allowed;
        background-color: rgb(246,246,246);

        input {
            cursor: not-allowed;
        }
    }

    .phonenumber-box {
        span {
            padding-right: .75rem;
            margin-right: 1rem;
            border-right: 1px solid #e5e5e5;
        }
    }

    .address-box {
        .btn {
            font-size: .875rem;
            border: 1px solid #e5e5e5;
            border-radius: .25rem;
        }
    }

    .verify-box {
        input {
            padding: 0 1rem;
            margin-right: 1rem;
            border: 1px solid #e5e5e5;
            border-radius: .25rem;
        }

        .btn {
            min-width: 5rem;
            font-size: .875rem;
            color: #ee4d2d;
            border: 1px solid #ee4f2f;
        }
    }
`;

const WidgetButton = styled.div`
    padding: 1rem 0;
    justify-content: flex-end;
    gap: .875rem;
    border-top: 1px solid #e5e5e5;

    .btn {
        min-width: 5rem;
        font-size: .875rem;
        border: 1px solid #e5e5e5;
    }

    .btn-save {
        min-width: 6rem;
        border-color: #ee4d2d;
        background-color: #ee4d2d;
        color: #fff;
    }

`;



FormInfo.propTypes = {
    
};

function FormInfo(props) {
    // data
    const [isOpenModalAddres, setIsOpenModalAddress] = useState(false);

    // handle event
    const handleCloseModalAddress = () => {
        setIsOpenModalAddress(false);
    }

    const handleOpenModalAddress = () => {
        setIsOpenModalAddress(true);
    }


    return (
        <WidgetContent>
            <WidgetInput>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Địa chỉ lấy hàng</label>
                    <div className="d-flex address-box">
                        <div 
                            className="btn"
                            onClick = {handleOpenModalAddress}
                        >+ Thêm</div>
                    </div>
                </InputRow>
                <InputRow >
                    <label><span>*</span>Email</label>
                    <div className="d-flex input-box email-box">
                        <input type="text" readOnly value="tranleanhvu001@gmail.com"/>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Số điện thoại</label>
                    <div className="d-flex input-box phonenumber-box">
                        <span>+84</span>
                        <input type="text" placeholder="Nhập vào"/>
                        
                    </div>
                </InputRow>
                <InputRow>
                    <label></label>
                    <div className="d-flex verify-box">
                        <input type="text" />
                        <div className="btn">Gửi</div>
                    </div>
                </InputRow>
            </WidgetInput>

            <WidgetButton className = "d-flex align-items-center">
                <div className = "btn">Lưu</div>
                <button className = "btn btn-save">Tiếp theo</button>
            </WidgetButton>

            {isOpenModalAddres && <ModalAddress
                onHandleClose = {handleCloseModalAddress}
            />}
            
        </WidgetContent>
    );
}

export default FormInfo;