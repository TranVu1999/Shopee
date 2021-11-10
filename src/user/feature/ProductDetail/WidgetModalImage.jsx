import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const WidgetSlider = styled.div`
    position: relative;
    
    flex: 1;
`;

const BigThumbnail = styled.div`
    cursor: pointer;
    height: 100%;
    
    img{
        object-fit: cover;
        height: 100%;
    }
`;

const Navigation = styled.div`
    position: absolute;
    top: 50%;

    display: block;
    width: 48px;
    height: 70px;

    font-size: 48px;
    font-weight: 800;

    color: #fff;
    background-color: rgba(0,0,0,.5);

    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: rgba(0,0,0);
    }

    span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const ButtonNext = styled(Navigation)`
    right: 8px;
`;

const ButtonPrev = styled(Navigation)`
`;

const WidgetListImage  = styled.div`
    width: 310px;
`;

const Title = styled.h5`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;

    margin-bottom: 1.25rem;
    height: 2.25rem;
    word-wrap: break-word;
    overflow: hidden;

    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 1.25rem;
`;

const SmallThumbnail = styled.div`
    height: 90px;
    border: 2px solid transparent;
    transition: all .3s ease;
    cursor: pointer;

    &:hover, &.active{
        border: 2px solid #c7a17a;
    }

    img{
        height: 100%;
    }
`;

WidgetModalImage.propTypes = {
    title: PropTypes.string,
    indexActive: PropTypes.number,
    images: PropTypes.array,
};

WidgetModalImage.defaultProps = {
    indexActive: 0
}

function WidgetModalImage({indexActive, images, title}) {

    const lengthItems = images.length;
    const [indexShow, setIndexShow] = useState(indexActive);


    // Logic
    const onHandleChangeAvatar = index =>{
        setIndexShow(index);
    }


    // Render
    const renderItems = () =>{
        return images.map((img, index) => {
            return (
                <SmallThumbnail 
                    key = {index}
                    className = {indexShow === index ? "active" : ""}
                    onMouseOver = {() => {onHandleChangeAvatar(index)}}
                >
                    <img src={img} alt="product" />
                </SmallThumbnail>
            );
        });
    }

    return (
        <div className = "p-4 d-flex h-100" style = {{gap: '15px'}}>
            <WidgetSlider>
                <BigThumbnail>
                    <img src={images[indexShow]} alt="product" />
                </BigThumbnail>

                <ButtonPrev
                    onClick = {() => {if(indexShow > 0) setIndexShow(indexShow - 1)}}
                >
                    <span className="arrow_carrot-left"></span>
                </ButtonPrev>

                <ButtonNext onClick = {() => {if(indexShow < (lengthItems - 1)) setIndexShow(indexShow + 1)}}>
                    <span className="arrow_carrot-right"></span>
                </ButtonNext>

            </WidgetSlider>

            <WidgetListImage>
                <Title>{title}</Title>

                <div className="d-flex flex-wrap" style = {{gap: '15px'}}>
                    {renderItems()}
                </div>
                
            </WidgetListImage>
        </div>
    );
}

export default WidgetModalImage;