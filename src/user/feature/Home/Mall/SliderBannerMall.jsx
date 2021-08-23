import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const WidgetContent = styled.div`
    padding: .5rem;

    .item{
        height: 452px;

        a{
            display: block;
            height: 100%;
        }
    }
`;

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
                <SwiperSlide key = {item.image}>
                    <div className = "item" style = {{backgroundImage: `url(${item.image})`}}>
                        <a href={item.link}></a>
                    </div>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <WidgetContent className = "slider-banner-mall">
            <Swiper
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {renderItems()}
            </Swiper>
        </WidgetContent>
    );
}

export default SliderBannerMall;