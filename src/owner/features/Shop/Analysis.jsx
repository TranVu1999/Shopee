import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    width: 23.4375rem;

    input{
        display: none;
    }
`;

const WidgetImage = styled.div`
    position: relative;
    padding: 3rem 3rem 2rem;

    height: 187px;
    background-color: #E5E5E5;
    border-radius: 4px 4px 0 0;

    &>button{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;

        font-size: .75rem;

        background-color: rgba(0,0,0,.5);
        color: #fff;
        line-height: 1.5rem;
    }

    .widget-background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-size: cover;
        background-position: center;

        &:after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.1);
        }
    }

    .thumbnail{
        position: relative;
    }
`;

const Thumbnail = styled.div`
    margin-right: 1.5rem;

    div{
        position: relative;

        height: 3.4375rem;
        width: 3.4375rem;

        border-radius: 50%;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        border: 3px solid #d5d5d5;
    }

    button{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;

        font-size: .75rem;

        background-color: rgba(0,0,0,.5);
        color: #fff;
        line-height: 1rem;
    }
`;

const Text = styled.div`
    font-size: .75rem;
    color: #fff;

    h5{
        margin-bottom: .75rem;
        font-size: 1rem;
    }

    p{
        margin-bottom: .25rem;
        line-height: 1rem;

        span:first-child{
            margin-right: .5rem;
            padding-right: .5rem;

            border-right: 1px solid #333;
        }
    }
`;

const WidgetStatistics = styled.div`
    font-size: .75rem;
    border: 1px solid ${BorderColor.mainColor};
    border-top: none;
    border-radius: 0 0 4px 4px;
`;

const StatisticsRow = styled.div`
    padding: .625rem 1.5rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &:last-child{
        border: none;
    }

    .icon{
        margin-right: .5rem;
    }

    svg{
        width: .875rem;
        height: .875rem;
    }

    label{
        margin-bottom: 0;
    }

    a, span{
        color: #ee4d2d;
    }

    span.arrow_carrot-right{
        font-size: 1rem;
    }
`;

Analysis.propTypes = {
    analysis: PropTypes.object.isRequired,
    avatar: PropTypes.object.isRequired,
    username: PropTypes.string,
    backgroundImage: PropTypes.object.isRequired,
    createdDate: PropTypes.string.isRequired,

    handleChangeImage: PropTypes.func.isRequired,
};

function Analysis({
    analysis,
    avatar,
    username,
    backgroundImage,
    createdDate,
    handleChangeImage
}) {
    // data
    const avatarImageRef = useRef(null);
    const backgroundImageRef = useRef(null);
     

    // handle event
    const openImageBox = type =>{
        if(avatarImageRef.current && type === "avatar"){
            avatarImageRef.current.click();
        }else if(backgroundImageRef.current && type === "background"){
            backgroundImageRef.current.click();
        }
    }

    const onHandleChangeImage = event =>{
        const {name} = event.target;
        const value = event.target.files[0];

        if(handleChangeImage){
            handleChangeImage({
                name, value
            })
        }
    }

    return (
        <WidgetContent>
            <input 
                type="file"
                ref = {avatarImageRef}
                name = "avatar"
                onChange = {onHandleChangeImage}
            />
            <input 
                type="file"
                ref = {backgroundImageRef}
                name = "backgroundImage"
                onChange = {onHandleChangeImage}
            />
            <WidgetImage>
                {backgroundImage.url && <div className="widget-background" style = {{backgroundImage: `url(${backgroundImage.url})`}}></div>}
                
                <div className="d-flex thumbnail">
                    <Thumbnail>
                        <div style={{backgroundImage: `url(${avatar.url})`}}>
                            <button
                                onClick = {() => openImageBox("avatar")}
                            >Sửa</button>
                        </div>
                        
                    </Thumbnail>

                    <Text>
                        <h5>{username}</h5>
                        <div>
                            <p>Đã tham gia {createdDate} </p>
                            <p>
                                <span>Người theo 0</span>
                                <span>Theo dõi 2</span>
                            </p>
                        </div>
                    </Text>
                </div>

                <button
                    onClick = {() => openImageBox("background")}
                >Sửa ảnh bìa</button>
            </WidgetImage>

            <WidgetStatistics>
                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3 21v2c0 .6.5 1 1 1h24c.6 0 1-.5 1-1v-2H3zM29 4c0-.6-.5-1-1-1H4c-.4 0-1 .5-1 1v15h26V4zM12 29h8v-3h-8v3zm10-3v3h2v2H8v-2h2v-3H3c-1 0-2-1-2-2V2.9C1 1.9 1.9 1 2.9 1h26.2c1 0 1.9.9 1.9 1.9v20.7c0 1-1 2.4-2 2.4h-7z"></path></svg>
                    </div>
                    <label className="flex-fill">Giao diện Shop trên máy tính </label>
                    <a href="#/" className="d-flex align-items-center">Xem <span aria-hidden="true" className="arrow_carrot-right"></span></a>
                </StatisticsRow>

                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path></svg>
                    </div>
                    <label className="flex-fill">Sản phẩm </label>
                    <a href="#/" className="d-flex align-items-center">{analysis.numberProduct}<span aria-hidden="true" className="arrow_carrot-right"></span></a>
                </StatisticsRow>

                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32" ><path d="M0 19V6c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v13c0 3.3-2.7 5-6 5H14l-8 8v-8c-3.3 0-6-1.7-6-5zm26 3c2.2 0 4-.8 4-3V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v13c0 2.2 1.8 3 4 3h2v5l5-5h13zM8 22"></path></svg>
                    </div>
                    <label className="flex-fill">Tỉ lệ phản hồi </label>
                    <span>{analysis.ratioReplay}%</span>
                </StatisticsRow>

                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16zm0-30C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm4.4 20.7l-5.9-5.9c-.3-.2-.5-.4-.5-.8V7c0-.6.4-1 1-1s1 .4 1 1v8.6l5.7 5.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.3 0z"></path></svg>
                    </div>
                    <label className="flex-fill">Thời gian phản hồi </label>
                    <span>{analysis.rangeReplay}</span>
                </StatisticsRow>

                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.83l3.18 7 .48 1.06 1.16.11 6.76.61L22.27 19l-.75.75.2 1 1.38 7.19-6.1-3.72-1-.64-1 .64-6.15 3.7 1.42-7.16.21-1-.76-.76-5.31-5.39 6.77-.61 1.16-.11.48-1.06 3.18-7M16 0l-5 11-11 1 8.3 8.37L6 32l10-6.07L26 32l-2.31-11.63L32 12l-11-1-5-11z"></path></svg>
                    </div>
                    <label className="flex-fill">Đánh Giá Shop </label>
                    <span>{analysis.rating}</span>
                </StatisticsRow>

                <StatisticsRow className="d-flex align-items-center">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24.2 3.7h-2.1v-.8h-2.5C19.2 1.3 17.7 0 16 0c-1.8 0-3.3 1.3-3.7 2.9H9.8v.8h-2c-3.2 0-5.9 2.6-5.9 5.9v16.5c0 3.3 2.6 5.9 5.9 5.9h16.5c3.2 0 5.9-2.6 5.9-5.9V9.6c-.1-3.2-2.7-5.9-6-5.9zm-12.7 1h2.4v-.9c0-1.1.9-2 2-2s2 .9 2 2v.9h2.4v4.1h-8.9V4.7zm16.4 21.4c0 2-1.6 3.6-3.6 3.6H7.8c-2 0-3.6-1.6-3.6-3.6V9.6c0-2 1.6-3.6 3.6-3.6h2v4.5h12.4V6h2.1c2 0 3.6 1.6 3.6 3.6v16.5zM15.5 25c-.2 0-.4-.1-.5-.2L10.1 21c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l4.1 3.3 6.3-9.8c.3-.4.8-.5 1.2-.3.4.3.5.8.3 1.2l-6.8 10.7c-.1.2-.3.4-.6.4-.1-.2-.1-.2-.2-.2z"></path></svg>
                    </div>
                    <label className="flex-fill">Tỉ lệ đơn không thành công </label>
                    <a href="#/" className="d-flex align-items-center">{analysis.ratioInvoice}%<span aria-hidden="true" className="arrow_carrot-right"></span></a>
                </StatisticsRow>
            </WidgetStatistics>

        </WidgetContent>
    );
}

export default Analysis;