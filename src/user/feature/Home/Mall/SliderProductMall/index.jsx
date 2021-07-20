import React from 'react';
import PropTypes from 'prop-types';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';
import StoreThumbnail from '../StoreThumbnail';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';


SliderProductMall.propTypes = {
    items: PropTypes.array,
};

SliderProductMall.defaultProps = {
    items: []
}

function SliderProductMall(props) {
    const {items} = props;

    console.log({items})

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide>
                    <StoreThumbnail 
                        link = {item.link}
                        image = {item.image}
                        title = {item.title}
                    />
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className = "slider-product-mall">
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