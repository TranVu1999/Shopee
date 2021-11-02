import React, { useRef, useEffect }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../../theme';
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

const WidgetTextForm = styled.div`
    flex: 4;
    font-size: 16px;

    button{
        padding: .5em 1.625em;
        color: #fff;
        background-color: #ee4d2d;

        border-radius: .25rem;
        border: 1px solid #ee4d2d;
        transition: all .5s ease;

        &:hover{
            color: #ee4d2d;
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
            border-color: #ee4d2d;
        }
        
        div::after{
            content: '';
            display: block;
            height: 0.625rem;
            width: 0.625rem;

            background-color: #ee4d2d;
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
        color: #05a;
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
    handleUpdateUser: PropTypes.func.isRequired,
};

function WidgetUserProfile({user, handleUpdateUser}) {
    const months = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const [userInfo, setUserInfo] = useState({
        avatar: "",
        fullName: "",
        email: "admin123@gmail.com",
        phoneNumber: "",
        brand: "",
        gender: "male",
        birthday: new Date()
    });

    const [avatarAsFile, setAvatarAsFile] = useState(null);
    

    let inputImageRef = useRef(null);
    const openComputer = () => inputImageRef.current.click();

    // effect
    useEffect(() => {
        if(user) {
            setUserInfo(user);
        }
    }, [user])

    // handle event

    const handleChange = e => {
        const {name, value} = e.target;

        switch(name) {
            case "fullName":
            case "brand": 
                setUserInfo({
                    ...userInfo,
                    [name]: value
                })
                break;
            
            case "day":
            case "month":
            case "year":
                const birthday = {
                    day, month, year
                }
                birthday[name] = value;
                setUserInfo({
                    ...userInfo,
                    birthday: new Date(birthday.year, birthday.month - 1, birthday.day)
                })
                break;
            default:
                break;
        }
    }

    const handleChoseGender = gender => {
        setUserInfo({
            ...userInfo,
            gender
        })
    }

    const hanldeGetImage = e => {
        const files = Array.from(e.target.files);
        setAvatarAsFile(files[0]);
        setUserInfo({
            ...userInfo,
            avatar: URL.createObjectURL(files[0])
        });
    }

    const handleSubmitUser = () => {
        if(!handleUpdateUser) return;

        const dataUser = {
            ...userInfo,
            avatarAsFile
        }
        handleUpdateUser(dataUser);
    }

    // render
    const checkLeapYear = year => {
        return (year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0);
    }
    const renderListYear = (start, end) => {
        const years = makeRangeYear(start, end);
        
        return years.map(year => (
            <option key = {year} value = {year}>{year}</option>
        ))
    }

    const renderListMonth = () => {
        let elms = [];
        for(let month = 1; month <= 12; month++) {
            elms.push(
                <option key = {month} value = {month}>Tháng {month}</option>
            )
        }
        return elms;
    }

    const renderListDate = (year, month) => {
        const isLeapYear = checkLeapYear(year);
        if(isLeapYear) {
            months[2] = 29;
        }

        let elms = [];
        for(let i = 1; i <= months[month]; i++) {
            elms.push(
                <option key = {i} value = {i}>{i}</option>
            )
        }
        return elms
    }

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
        let resStr = "";

        if(length > 0) {
            
            for(let i = 0; i < length; i++){
                resStr += "*";
            }  

            resStr += phoneNumber[length - 1] + phoneNumber[length];
        }
        

        return resStr;
    }

    const makeRangeYear = (start, end) => {
        let arr = [];

        for(let i = start; i <= end; i++){
            arr.push(i);
        }
        return arr;
    }

    let birthday = new Date(userInfo.birthday);
    const year = birthday.getFullYear();
    const month = birthday.getMonth() + 1;
    const day = birthday.getDate();

    return (
        <WidgetContent className = "page-user--content">
            {!user && <LoadingData/>}

            {user && <>

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
                                    onChange = {handleChange}
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
                                    onChange = {handleChange}
                                />
                            </InputText>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Giới tính</LabelInput>
                        <InputBox>
                            <InputRadio 
                                className = {userInfo.gender === "male" && "active"}
                                onClick = {() => handleChoseGender("male")}
                            >
                                <div></div>
                                <span>Nam</span>
                            </InputRadio>
                            <InputRadio 
                                className = {userInfo.gender === "female" && "active"}
                                onClick = {() => handleChoseGender("female")}
                            >
                                <div></div>
                                <span>Nữ</span>
                            </InputRadio>
                            <InputRadio 
                                className = {userInfo.gender === "other" && "active"}
                                onClick = {() => handleChoseGender("other")}
                            >
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
                                    <select
                                        name = "day"
                                        value = {day}
                                        onChange = {handleChange}
                                    >{renderListDate(year, month)}</select>
                                </div>
                                

                                <div>
                                    <select
                                        name = "month"
                                        value = {month}
                                        onChange = {handleChange}
                                    >{renderListMonth()}</select>
                                </div>
                                
                                <div>
                                    <select
                                        name = "year"
                                        value = {year}
                                        onChange = {handleChange}
                                    >{renderListYear(1980, 2021)}</select>
                                </div>
                                
                            </InputSelect>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput></LabelInput>
                        <InputBox>
                            <button
                                onClick = {handleSubmitUser}
                            >Lưu</button>
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
                                onChange = {hanldeGetImage}
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