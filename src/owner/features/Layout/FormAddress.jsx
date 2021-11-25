import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
// components
import CheckBox from './../../../components/CheckBox';
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

const WidgetFormControl = styled.div`
    padding: 1rem 0 2rem;

    .btn {
        padding: .5rem 1.75rem;
        border: 1px solid #d5d5d5;
        background-color: #fff;
    }

    .btn-primary {
        background-color: #ee4d2d;
        color: #fff;
        border-color: #ee4d2d;
    }


`;

FormAddress.propTypes = {
    itemFocus: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    listOptionAddress: PropTypes.array.isRequired,
    onHanldeChoseAdministrativeUnit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

function FormAddress({
    itemFocus,
    onClose,
    listOptionAddress,
    onHanldeChoseAdministrativeUnit,
    onSubmit
}) {

    // data
    const [address, setAddress] = useState(() => itemFocus ? itemFocus : {

        fullname: "",
        phoneNumber: "",
        houseNumber: "",
        isDefault: false,
        isDeliveryAddress: false,
        isReceivedAddress: false,
        province: "",
        district: "",
        ward: "" 
    });

    // handle event
    const onHandleCloseForm = () => {
        if(!onClose) return;
        onClose();
    }

    const onHanldeChose = dataChose => {
        if(!onHanldeChoseAdministrativeUnit) return;
        onHanldeChoseAdministrativeUnit(dataChose);
    }

    const onHanldeSubmitSelection = addressData => {
        setAddress({
            ...address,
            ...addressData
        });
    }

    const onHandleChange = e => {
        const {value, name} = e.target;
        setAddress({
            ...address,
            [name]: value
        })
    }

    const onHandleChecked = e => {
        setAddress({
            ...address,
            [e]: !address[e]
        })
    }  
    
    const onHandleSubmit = () => {
        if(!onSubmit) return;

        const {
            houseNumber, 
            province, 
            district, 
            ward, 
            fullname, 
            phoneNumber
        } = address;

        if(houseNumber && province && district && ward && fullname && phoneNumber) {
            onSubmit(address);
        }
        
    }

    return (
        <WidgetContainer>
            <TitleForm className="d-flex align-items-center justify-content-between">
                <h5>{itemFocus ? "Sửa thông tin địa chỉ" : "Thêm Địa Chỉ Mới"}</h5>
                <button
                    onClick = {onHandleCloseForm}
                >
                    <span aria-hidden="true" className="icon_close"></span>
                </button>
                
            </TitleForm>

            <FormContent>
                <WidgetFormInput>
                    <label>Họ & Tên</label>
                    <input 
                        type="text" 
                        placeholder="Nhập vào"
                        onChange = {onHandleChange}
                        name = "fullname"
                        value = {address.fullname}
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Số điện thoại</label>
                    <input 
                        type="text" 
                        placeholder="Nhập vào"
                        onChange = {onHandleChange}
                        name = "phoneNumber"
                        value = {address.phoneNumber}
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</label>
                    <SupperSelect 
                        province = {address.province}
                        district = {address.district}
                        ward = {address.ward}

                        listOption = {listOptionAddress}
                        onHanldeChoseAdministrativeUnit = {onHanldeChose}
                        onHanldeSubmit = {onHanldeSubmitSelection}
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <label>Địa chỉ chi tiết</label>
                    <textarea 
                        type="text" 
                        placeholder="Nhập vào"
                        onChange = {onHandleChange}
                        name = "houseNumber"
                        value = {address.houseNumber}
                    />
                </WidgetFormInput>

                <WidgetFormInput>
                    <div className="d-flex align-items-center mb-2">
                        <CheckBox 
                            identification = {"isDefault"}
                            onChose = {onHandleChecked}
                            isChecked = {address.isDefault}
                        />
                        <span>Đặt làm địa chỉ mặc đinh</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <CheckBox
                            identification = {"isDeliveryAddress"}
                            onChose = {onHandleChecked}
                            isChecked = {address.isDeliveryAddress}
                        />
                        <span>Đặt làm địa chỉ lấy hàng</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <CheckBox
                            identification = {"isReceivedAddress"}
                            onChose = {onHandleChecked}
                            isChecked = {address.isReceivedAddress}
                        />
                        <span>Đặt làm địa chỉ trả hàng</span>
                    </div>
                </WidgetFormInput>


                <WidgetFormControl className ="d-flex justify-content-end">
                    <button className = "mr-3 btn">Trở lại</button>
                    <button className = "btn btn-primary" onClick = {onHandleSubmit}>Xác nhận</button>
                </WidgetFormControl>
            </FormContent>

        </WidgetContainer>
    );
}

export default FormAddress;