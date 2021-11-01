import React, { useRef, useEffect }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cropper from "react-easy-crop";

// Theme
import {Color, BorderColor} from '../../theme';
import { useState } from 'react';

// Components
import LoadingData from '../Layout/LoadingData';

const WidgetContent = styled.div`
    position: relative;
    padding: 1.125rem 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    min-height: 600px;
    z-index: 0;
`;

const WidgetTextForm = styled.form`
    flex: 4;
    font-size: 16px;

    button{
        padding: .25em 1.5em;
        color: #fff;
        background-color: ${Color.mainColor};
        border: 1px solid ${BorderColor.primaryColor};
        transition: all .5s ease;

        &:hover{
            color: ${Color.mainColor};
            background-color: transparent;
        }
    }
`;

const InputControl = styled.div`
    margin-bottom: 1.5rem;
    font-size: .875em;
`;

const LabelInput = styled.div`
    width: 20%;
    margin-right: 1.5rem;
    text-align: right;
    text-transform: capitalize;
`;

const InputBox = styled.div`
    flex: 1;
`;

const InputText = styled.div`
    input{
        padding: 0.375rem 1rem;
        width: 100%;
        border: 1px solid ${BorderColor.mainColor};
    }
`;

const InputRadio = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 1.125rem;
    cursor: pointer;

    div{
        padding: .125rem;
        margin-right: .5rem;
        width: 1.125rem;
        height: 1.125rem;

        border: 2px solid ${BorderColor.mainColor};
        border-radius: 50%;
    }

    &.active{
        div{
            border-color: ${BorderColor.primaryColor};
        }
        
        div::after{
            content: '';
            display: block;
            height: 0.625rem;
            width: 0.625rem;

            background-color: ${Color.mainColor};
            border-radius: 50%;
        }
    }
    
`;

const InputSelect = styled.div`

    div{
        display: inline-block;
        padding: 0.375rem .75rem;
        margin-right: .5rem;
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 2px;

        select{
            width: 6.5rem;
        }
    }
    
`;

const ConstValue = styled.span`
    color: #333;

    a{
        margin-left: .5rem;
        color: ${Color.mainColor};
        text-decoration: underline;
    }
`;

const WidgetImageForm = styled.div`
    margin-left: 50px;

    flex: 2;
    text-align: center;
    box-sizing: border-box;

    &>div{
        padding: 1.5rem 0rem;
        border-left: 1px solid ${BorderColor.mainColor};
    }
`;

const Thumbnail = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;

    background-image: url(${props => props.image});
    border-radius: 50%;
    border: 3px solid ${BorderColor.mainColor};
    cursor: pointer;
`;

const WidgetButtonAddImage = styled.div`
    font-size: 16px;

    input{
        display: none;
    }

    button{
        margin: 1.5rem 0 1rem;
        padding: .25rem .5rem;

        font-size: .875em;
        color: #666;
        border: 1px solid ${BorderColor.mainColor};
    }

    p{
        font-size: .875em;
        line-height: 1.25rem;
    }
`;

WidgetUserProfile.propTypes = {
    user: PropTypes.object,
};

function WidgetUserProfile({user}) {
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        fullName: "",
        email: "admin123@gmail.com",
        phoneNumber: "",
        brand: "",
        gender: "male"
    });
    

    let inputImageRef = useRef(null);
    const openComputer = () => inputImageRef.current.click();

    const [image, setImage] = React.useState(null);
	const [croppedArea, setCroppedArea] = React.useState(null);
	const [crop, setCrop] = React.useState({ x: 0, y: 0 });
	const [zoom, setZoom] = React.useState(1);

    // effect
    useEffect(() => {
        if(user) {
            setUserInfo(user);
        }
    }, [user])

    // handle event
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
	};

	const onSelectFile = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
	};

    // function
    const encodeForEmail = () => {
        const emailPattern = userInfo.email.split('@');
        let beforePattern = emailPattern[0][0] + emailPattern[0][1];

        const length = emailPattern[0].length;
        for(let i = 2; i < length; i++){
            beforePattern += "*";
        }

        return beforePattern + "@" + emailPattern[1];
    }

    const encodeForPhoneNumber = () => {
        let {phoneNumber} = userInfo;
        const length = phoneNumber.length - 2;
        console.log({length})
        let resStr = "";

        if(length > 0) {
            
            for(let i = 0; i < length; i++){
                resStr += "*";
            }  

            resStr += phoneNumber[length - 1] + phoneNumber[length];
        }
        

        return resStr;
    }

    return (
        <WidgetContent className = "page-user--content">
            {!user && <LoadingData/>}

            {user && <>
                {image ? (
                <>
                    <div className='cropper'>
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                </>
            ) : null}


            <div className = "page-user--header">
                <p>Hồ sơ của tôi</p>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>

            <div className="d-flex">
                <WidgetTextForm>
                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên đăng nhập</LabelInput>
                        <InputBox>
                            <ConstValue>{userInfo.username}</ConstValue>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên</LabelInput>
                        <InputBox>
                            <InputText>
                                <input 
                                    name = "fullName"
                                    type="text" 
                                    placeholder="Nhập vào" 
                                    value = {userInfo.fullName}
                                />
                            </InputText>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Email</LabelInput>
                        <InputBox>
                            <ConstValue>{encodeForEmail()} <a href="#/">Thay đổi</a></ConstValue>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Số điện thoại</LabelInput>
                        <InputBox>
                            <ConstValue>{encodeForPhoneNumber()} <a href="#/">Thay đổi</a></ConstValue>
                        </InputBox>
                    </InputControl>


                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên Shop</LabelInput>
                        <InputBox>
                            <InputText>
                                <input 
                                    name = "brand"
                                    type="text" 
                                    value = {userInfo.brand}
                                    placeholder = "Nhập vào"
                                    
                                />
                            </InputText>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Giới tính</LabelInput>
                        <InputBox>
                            <InputRadio className = {userInfo.gender === "male" && "active"}>
                                <div></div>
                                <span>Nam</span>
                            </InputRadio>
                            <InputRadio className = {userInfo.gender === "female" && "active"}>
                                <div></div>
                                <span>Nữ</span>
                            </InputRadio>
                            <InputRadio className = {userInfo.gender === "other" && "active"}>
                                <div></div>
                                <span>Khác</span>
                            </InputRadio>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Ngày sinh</LabelInput>
                        <InputBox>
                            <InputSelect>
                                <div>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select>
                                </div>
                                

                                <div>
                                    <select>
                                        <option>Tháng 1</option>
                                        <option>Tháng 2</option>
                                        <option>Tháng 3</option>
                                        <option>Tháng 4</option>
                                        <option>Tháng 5</option>
                                        <option>Tháng 6</option>
                                        <option>Tháng 7</option>
                                        <option>Tháng 8</option>
                                        <option>Tháng 9</option>
                                        <option>Tháng 10</option>
                                        <option>Tháng 11</option>
                                        <option>Tháng 12</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <select>
                                        <option>1990</option>
                                        <option>1992</option>
                                        <option>1993</option>
                                        <option>1994</option>
                                        <option>1995</option>
                                        <option>1996</option>
                                        <option>1997</option>
                                    </select>
                                </div>
                                
                            </InputSelect>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput></LabelInput>
                        <InputBox>
                            <button>Lưu</button>
                        </InputBox>
                    </InputControl>

                    
                    
                </WidgetTextForm>
                
                <WidgetImageForm>
                    <div>
                        <Thumbnail className = "bg-image" image = {userInfo.avatar}>
                        </Thumbnail>

                        <WidgetButtonAddImage>
                            <input 
                                ref = {inputImageRef}
                                type="file" 
                                accept = ".jpg,.jpeg,.png"
                                onChange = {onSelectFile}
                            />
                            <button
                                onClick = {openComputer}
                            >Chọn ảnh</button>
                            <p>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
                        </WidgetButtonAddImage>
                    </div>
                </WidgetImageForm>
            </div>
            </>}

            
        </WidgetContent>
    );
}

export default WidgetUserProfile;