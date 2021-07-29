import React from 'react';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const WidgetBrand = styled(Link)`
    display: block;
    padding: 25px;
    border-top: 1px solid #d5d5d5;
    border-left: 1px solid #d5d5d5;

    &:nth-child(2n){
        border-right: 1px solid #d5d5d5;
        border-left: 1px solid #d5d5d5;
    }
`;


WidgetSliderBrand.propTypes = {
    items: PropTypes.array,
};

WidgetSliderBrand.defaultProps = {
    items: []
}

function WidgetSliderBrand(props) {
    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <WidgetBrand>
                        <img src = {item.image} alt="brand" />
                    </WidgetBrand>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className="slide-brand-content normal-arrow">
            <Swiper
                spaceBetween={0}
                slidesPerView={10}
                navigation
            >
                {renderItems()}
            </Swiper>
        </div>
        
    );
}

export default WidgetSliderBrand;