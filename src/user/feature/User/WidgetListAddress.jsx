import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalAddress from './ModalAddress';

// Theme
import {Color, BorderColor} from './../../theme';


const WidgetContent = styled.div`
    font-size: 16px;
`;

const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    padding: .5rem 2rem;

    color: #fff;
    background-color: ${Color.mainColor};
    border-radius: 2px;
    border: 1px solid ${BorderColor.primaryColor};

    &:hover{
        color: ${Color.mainColor};
        background-color: transparent;
    }


    span{
        font-size: 1.5rem;
        margin-right: .75rem;
    }
`;

const AddressItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 1rem;

    font-size: .875em;

    border-bottom: 1px solid ${BorderColor.mainColor};

    label{
        width: 10em;
        margin-right: 2em;

        text-align: right;
        text-transform: capitalize;
    }

    .content{
        flex: 1;

        strong{
            margin-right: 1em;
            font-size: 1rem;
            color: rgba(0,0,0,.8);
        }
    }
`;

const ButtonAction = styled.button`
    margin-left: 1.5em;
    text-decoration: underline;
`;

const ButtonSetDefault = styled.button`
    padding: .25em 1em;
    text-transform: capitalize;
    border: 1px solid ${BorderColor.mainColor};
`;

WidgetListAddress.propTypes = {
    
};

function WidgetListAddress(props) {

    const [isOpenModal, setIsOpenModal] = React.useState(false);

    // handle event
    const OpenModalToAdd = () =>{
        setIsOpenModal(true);
    }

    const handleClose = () => {
        setIsOpenModal(false);
    }

    return (
        <WidgetContent className = "user-content">
            <div className = "d-flex align-items-start justify-content-between page-user--header">
                <p>Địa chỉ của tôi</p>
                <ButtonAdd 
                    onClick = {OpenModalToAdd}
                >
                    <span class="icon_plus"></span>
                    Thêm địa chỉ mới
                </ButtonAdd>
            </div>

            <div>
                <AddressItem>
                    <div>
                        <div className="d-flex">
                            <label>Họ và tên</label>
                            <div className="content">
                                <strong>Trần Lê Anh Vũ</strong>
                                <span className = "default-badge">Mặc định</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <label>Số điện thoại</label>
                            <div className="content">(+84) 377670509</div>
                        </div>
                        <div className="d-flex">
                            <label>Địa chỉ</label>
                            <div className="content">
                                <span>156 Lã Xuân Oai<br/>Phường Phước Long B<br/>Quận 9<br/>TP. Hồ Chí Minh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className = "mb-3 text-right">
                            <ButtonAction>Sửa</ButtonAction>
                            <ButtonAction>Xóa</ButtonAction>
                        </div>
                        <div><ButtonSetDefault disabled>Thiết lập mặc định</ButtonSetDefault></div>
                    </div>
                </AddressItem>

                <AddressItem>
                    <div>
                        <div className="d-flex">
                            <label>Họ và tên</label>
                            <div className="content">
                                <strong>Trần Lê Anh Vũ</strong>
                                <span className = "default-badge">Mặc định</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <label>Số điện thoại</label>
                            <div className="content">(+84) 377670509</div>
                        </div>
                        <div className="d-flex">
                            <label>Địa chỉ</label>
                            <div className="content">
                                <span>156 Lã Xuân Oai<br/>Phường Phước Long B<br/>Quận 9<br/>TP. Hồ Chí Minh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className = "mb-3 text-right">
                            <ButtonAction>Sửa</ButtonAction>
                            <ButtonAction>Xóa</ButtonAction>
                        </div>
                        <div><ButtonSetDefault disabled>Thiết lập mặc định</ButtonSetDefault></div>
                    </div>
                </AddressItem>
            </div>

            {isOpenModal && <ModalAddress 
                onHandleClose = {handleClose}
            />}
            
        </WidgetContent>
    );
}

export default WidgetListAddress;