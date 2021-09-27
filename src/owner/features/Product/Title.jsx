import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BorderColor } from '../../theme';

const WidgetContent = styled.div`
    padding: 0 1.5rem;
    font-size: .875rem;
`;

const WidgetText = styled.div`
    h5{
        margin: 0 1rem 0 0;
        font-size: 1.625rem;
        font-weight: 600;
        color: #333;
    }

    span{
        display: inline-block;
        width: 6.875rem;
        padding: 0 .875rem;

        color: #00bfa5;
        border: 1px solid #00bfa5;
        border-radius: 25px;
    }
`;

const WidgetButtonControl = styled.div`
    &>a{
        margin-right: 1rem;
        color: #2673dd;
    }
`;

const HighlightButton = styled.button`
    padding: .5rem 1.5rem;

    color: #fff;
    background-color: #ee4d2d;
    border-color: #ee4d2d;
    border-radius: 4px;

    span{
        font-size: 1.5rem;
    }
`;

const WidgetDropDown = styled.div`
    position: relative;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    &:hover{
        .list-option{
            max-height: 102px;
        }
    }
`;

const WidgetResultSelected = styled.div`
    padding: .5rem 1rem;
    cursor: pointer;

    label{
        cursor: pointer;
        margin: 0 .5rem 0 0;
    }

    span{
        font-size: 1.5rem;
    }
`;

const WidgetListOption = styled.div`
    position: absolute;
    top: 105%;
    left: 0;

    width: 100%;
    max-height: 0;

    background-color: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    transition: all .3s linear;
    overflow: hidden;

    div{
        padding: .25rem .875rem;
        cursor: pointer;

        &:hover{
            background-color: rgba(0,0,0,.2);
        }
    }
`;

const ButtonControl = styled.div`
    padding: .25rem;
    background-color: #F5F5F5;
    border-radius: 4px;

    button{
        padding: 0 .5rem;
        background-color: #fff;
        border-radius: 4px;

        svg{
            height: 1.125rem;
            width: 1.125rem;
            fill: #999;
        }

        &.active{
            svg{
                fill: #ee4d2d;
            }
        }
    }

    button:first-child{
        margin-right: .25rem;
    }
`;

Title.propTypes = {
    
};

function Title(props) {
    return (
        <WidgetContent className="d-flex justify-content-between align-items-center">
            <WidgetText className="d-flex align-items-center">
                <h5>0 product</h5>
                <span>0/1.000</span>
            </WidgetText>

            <WidgetButtonControl className="d-flex align-items-center">
                <a href="#/">Tối ưu sản phẩm</a>

                <HighlightButton className="d-flex align-items-center mr-3">
                    <span aria-hidden="true" className="icon_plus"></span>
                    Thêm 1 sản phẩm mới
                </HighlightButton>

                <WidgetDropDown>
                    <WidgetResultSelected className="d-flex align-items-center">
                        <label>Công cụ Xử lý hàng loạt</label>
                        <span aria-hidden="true" className="arrow_carrot-down"></span>
                    </WidgetResultSelected>

                    <WidgetListOption className="list-option">
                        <div>Đăng Hàng Loạt</div>
                        <div>Cập Nhật Hàng Loạt</div>
                        <div>Cập Nhật Thuộc Tính</div>
                    </WidgetListOption>

                </WidgetDropDown>

                <ButtonControl className="ml-3 align-self-stretch d-flex">
                    <button className="d-flex align-items-center active">
                        <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g data-name="Layer 1"><path d="M864 256H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64z"></path><circle cx="176" cy="224" r="48"></circle><circle cx="176" cy="800" r="48"></circle><circle cx="176" cy="512" r="48"></circle></g></svg>
                    </button>
                    <button className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27 15h-8c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm-14 9H5c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm14 23h-8c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 2-2h8.1c1.1 0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6zm-14 9H5c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 2-2h8.1c1.1 0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6z"></path></svg>
                    </button>
                </ButtonControl>

            </WidgetButtonControl>

        </WidgetContent>
    );
}

export default Title;