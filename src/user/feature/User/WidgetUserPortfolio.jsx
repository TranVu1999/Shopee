import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {Color, BorderColor} from './../../theme';

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

WidgetUserPortfolio.propTypes = {
    
};

function WidgetUserPortfolio(props) {
    return (
        <div className = "bg-white br-2 py-3 px-4">
            <div className = "page-user--header">
                <p>Hồ sơ của tôi</p>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>

            <div className="d-flex">
                <WidgetTextForm>
                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên đăng nhập</LabelInput>
                        <InputBox>
                            <ConstValue>tranvudpqn123</ConstValue>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên</LabelInput>
                        <InputBox>
                            <InputText>
                                <input type="text" />
                            </InputText>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Email</LabelInput>
                        <InputBox>
                            <ConstValue>tr********@gmail.com <a href="#/">Thay đổi</a></ConstValue>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Số điện thoại</LabelInput>
                        <InputBox>
                            <ConstValue>********09 <a href="#/">Thay đổi</a></ConstValue>
                        </InputBox>
                    </InputControl>


                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Tên Shop</LabelInput>
                        <InputBox>
                            <InputText>
                                <input type="text" value = {"Barista Coffee"}/>
                            </InputText>
                        </InputBox>
                    </InputControl>

                    <InputControl className = "d-flex align-items-center">
                        <LabelInput>Giới tính</LabelInput>
                        <InputBox>
                            <InputRadio className = "active">
                                <div></div>
                                <span>Nam</span>
                            </InputRadio>
                            <InputRadio>
                                <div></div>
                                <span>Nữ</span>
                            </InputRadio>
                            <InputRadio>
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
                        <Thumbnail className = "bg-image" image = {"https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e"}>
                        </Thumbnail>

                        <WidgetButtonAddImage>
                            <input type="file" accept = ".jpg,.jpeg,.png"/>
                            <button>Chọn ảnh</button>
                            <p>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
                        </WidgetButtonAddImage>
                    </div>
                </WidgetImageForm>
            </div>

            
        </div>
    );
}

export default WidgetUserPortfolio;