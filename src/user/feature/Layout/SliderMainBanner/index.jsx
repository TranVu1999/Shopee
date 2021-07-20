import React from 'react';
import PropTypes from 'prop-types';

// Component
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './index.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = styled.div`
    min-height: ${props => props.isLarge ? "350px!important" : "235px"};
    max-height: ${props => props.isLarge ? "350px!important" : "235px"};
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
`;

SliderMainBanner.propTypes = {
    items: PropTypes.array,
    isLarge: PropTypes.bool,
};

SliderMainBanner.defaultProps = {
    items: [],
    isLarge: false
}

function SliderMainBanner(props) {

    const {items, isLarge} = props;

    console.log(isLarge)

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide>
                    <a href = {item.url}>
                        <Banner isLarge = {isLarge} image = {item.image}/>
                    </a>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className = "slider-main-banner">
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

export default SliderMainBanner;