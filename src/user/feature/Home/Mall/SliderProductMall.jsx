import React from 'react';
import PropTypes from 'prop-types';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';
import Thumbnail from './Thumbnail';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


SliderProductMall.propTypes = {
    items: PropTypes.array,
};

SliderProductMall.defaultProps = {
    items: []
}

function SliderProductMall(props) {
    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <Thumbnail 
                        link = {item.link}
                        image = {item.image}
                        title = {item.title}
                    />
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className = "normal-arrow" style={{marginRight: ".5rem"}}>
            <Swiper
                slidesPerView = {4}
                slidesPerColumn = {2}
                navigation
                slidesPerColumnFill = "row"
                spaceBetween = {6}
                slidesPerGroup = {4}
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default SliderProductMall;