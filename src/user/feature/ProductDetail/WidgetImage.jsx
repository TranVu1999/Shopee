import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { useState } from 'react';

const ImageBox = styled.div`
    width: 480px;
    padding: 25px 15px;
`;

const BigThumbnail = styled.div`
    height: 450px;
    cursor: pointer;

    img{
        height: 100%;
    }
`;

const SmallThumbnail = styled(BigThumbnail)`
    height: 82px;
    border: 2px solid transparent;
    transition: all .3s ease;

    &:hover, &.active{
        border: 2px solid #c7a17a;
    }
`;


WidgetImage.propTypes = {
    items: PropTypes.array,
    onHandleOpenModalImage: PropTypes.func,  
};

WidgetImage.defaultProps = {
    items: [],
    onHandleOpenModalImage: null
}

function WidgetImage(props) {
    const {items, onHandleOpenModalImage} = props;
    const [indexShow, setIndexShow] = useState(0);

    const onHandleChangeAvatar = index =>{
        if(index !== indexShow){
            setIndexShow(index);
        }
    }

    const onHandleChoseImage = index =>{
        if(onHandleOpenModalImage){
            onHandleOpenModalImage(index);
        }
    }

    const renderItems = () =>{
        return items.map((item, index) => {
            return (
                <SwiperSlide key = {item}>
                    <SmallThumbnail 
                        className = {indexShow === index ? "active" : ""}
                        onMouseOver = {() => {onHandleChangeAvatar(index)}}
                        onClick = {() => {onHandleChoseImage(index)}}
                    >
                        <img src={item} alt="product" />
                    </SmallThumbnail>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <ImageBox>
            <BigThumbnail onClick = {() => {onHandleChoseImage(indexShow)}}>
                <img src={items[indexShow] || ""} alt="product" />
            </BigThumbnail>
            <div className="mb-3"></div>

            <div className = "square-arrow-2842">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    navigation
                >
                    {renderItems()}
                </Swiper>
            </div>
            
        </ImageBox>
    );
}

export default WidgetImage;