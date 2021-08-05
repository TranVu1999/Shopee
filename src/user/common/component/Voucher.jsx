import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    position: relative;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    &.disable:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;

        display: block;
        width: 100%;
        height: 100%;
        background-color: #bbbbbb80;
    }
`;

const Thumbnail = styled.div`
    position: relative;
    width: 7.375rem;
    height: 7.375rem;
    border-right: 1px dashed ${BorderColor.mainColor};
`;

const WidgetBadge = styled.div`
    position: absolute;
    top: .5rem;
    left: 0;

    display: inline-block;
    padding: 0 .25em;
    margin-right: .5rem;
    font-size: .75rem;

    color: #fff;
    background-color: #ee4d2d;

    border-radius: 2px;
    line-height: 1.25rem;
    z-index: 1;
`;

const WidgetLolo = styled.div`
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;

    background-image: url(${props=>props.image});
    border-radius: 50%;
    border: 1px solid ${BorderColor.mainColor};
`;

const WidgetProduct = styled.div`
    height: 6.25rem;
    width: 6.25rem;
    background-image: url(${props=>props.image});
`;

const SmallText = styled.div`
    font-size: .75em;
    line-height: 1rem;
`;

const LargeText = styled.div`
    font-size: 1rem;
    text-transform: uppercase;
    color: #fff;
`;

const Serrated = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: .375rem;
    height: 100%;

    background-color: yellow;
    z-index: 0;
`;

const WidgetText = styled.div`
    padding: .75rem 0 .75rem .75rem;
    flex: 1;
`;

const Title = styled.div`
    flex: 4;

    h5{
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

        line-height: 1.5rem;
        font-size: .875rem;
        color: rgba(0,0,0,.84);

        span{
            display: inline-block;
            padding: 0 .25em;
            margin-right: .5rem;
            font-size: .75em;
    
            color: #fff;
            background-color: #ee4d2d;
    
            border-radius: 2px;
            line-height: 1.25rem;
        }
    }

    span{
        font-size: .75em;
    }

    .price{
        font-size: 1.25em;
        color: #ee4d2d;
    }
`;

const Control = styled.div`
    padding: 0em 1em 0em 0;
    font-size: .875em;
    flex: 2;

    a:first-child{
        color: #ee4d2d;
        line-height: 25px;

        span{
            font-size: 1.375rem;
        }
    }

    a:last-child{
        color: #508be3;
    }

    span.value{
        display: -webkit-box;
        font-size: 1rem;
        font-weight: 500;

        color: rgba(0,0,0,.87);

        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        word-break: break-word;
        -webkit-line-clamp: 1;
    }

    span.condition{
        display: -webkit-box;
        margin-bottom: .75rem;
        font-size: .875em;

        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        word-break: break-word;
        -webkit-line-clamp: 1;

        text-align: center;
        line-height: 14px;

    }
    
    button{
        min-width: 3.4375rem;
        width: auto;

        font-size: .75rem;

        color: #fff;
        background: #ee4d2d; 
        border-radius: 2px;
    }
`;

Voucher.propTypes = {
    item: PropTypes.object,
    expired: PropTypes.bool,
};

Voucher.defaultProps = {
    item: {
        id: 0,
        type: "shop", 
        content: {}
    }, 
    expired: false
}

function Voucher(props) {
    const {id, type, content} = props.item;
    const {expired} = props;

    // Render
    const renderThumbnail = () =>{
        let elm = null;
        switch (type){
            case "shop":
                return (
                    <Thumbnail className="d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            {content.image ? (<WidgetLolo className="bg-image" image = {content.image}></WidgetLolo>) : ""}
                            {content.brand ? (<SmallText>
                                {content.brand}
                            </SmallText>) : ""}
                        </div>
                        <Serrated><div></div></Serrated>
                    </Thumbnail>
                     
                );
            case "transport":
                return (
                    <Thumbnail className="d-flex align-items-center justify-content-center" style={{backgroundColor: "#00bfa5"}}>
                        <div className="text-center">
                            <LargeText>Miễn Phí Vận Chuyển</LargeText>
                        </div> 
                        <Serrated><div></div></Serrated>
                    </Thumbnail>
                );
            case "hint":
                return (
                    <Thumbnail className="d-flex align-items-center justify-content-center">
                        <WidgetProduct className="bg-image" image = {content.image}/> 
                        <WidgetBadge>{content.badgeShop}</WidgetBadge> 
                        <Serrated><div></div></Serrated>
                    </Thumbnail>
                );
            default:
                break;
        }

        return elm;
    }

    const renderControl = () =>{
        if(type === "hint"){
            return (
                <div className="text-center">
                    <span className="value">Giảm ₫{content.value}k</span>
                    <span className="condition">{content.condition}</span>
                    <button>Lưu</button>
                </div>
            );
        }

        return (
            <>
                <a href="#/" className="d-flex align-items-end">Dùng ngay <span  className="arrow_carrot-right"></span></a>
                <a href="#/">Điều Kiện</a>
            </>
        )
    }

    return (
        <WidgetContent 
            className = {expired ? "f-16 d-flex disable" : "f-16 d-flex"}
        >
            {renderThumbnail()}
                
            <WidgetText className="d-flex">
                <Title>
                    <div>
                        <h5>{content.badge ? <span>{content.badge}</span> : ""} {content.title}</h5>

                        {content.expire ? <span>HSD: {content.expire}</span> : ""}
                        
                        {content.price ? <span className="price">{content.price}</span> : ""}
                    </div>
                </Title>
                <Control className="d-flex flex-column justify-content-between align-items-end">
                    {renderControl()}
                </Control>
            </WidgetText>
        </WidgetContent>
    );
}

export default Voucher;