import React from 'react';
import PropTypes from 'prop-types';

// Component
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './index.scss';

SliderBannerMall.propTypes = {
    items: PropTypes.array,
};

SliderBannerMall.defaultProps = {
    items: []
}

function SliderBannerMall(props) {

    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide>
                    <div className = "item" style = {{backgroundImage: `url(${item.image})`}}>
                        <a href={item.link}></a>
                    </div>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className = "slider-banner-mall">
            <Swiper
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default SliderBannerMall;