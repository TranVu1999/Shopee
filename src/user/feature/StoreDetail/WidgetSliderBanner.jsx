import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const WidgetBanner = styled.div`
    img{
        width: 100%;
        height: 100%
    }
`;

WidgetSliderBanner.propTypes = {
    items: PropTypes.array,
};

WidgetSliderBanner.defaultProps = {
    items: []
}


function WidgetSliderBanner(props) {
    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <WidgetBanner>
                        <img src={item.image} alt="banner" />
                    </WidgetBanner>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className = "slider-banner-content normal-arrow">
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default WidgetSliderBanner;