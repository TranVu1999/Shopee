import React from 'react';
import PropTypes from 'prop-types';

// Component
import SwiperCore, { Navigation, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Brand from './../../../common/component/Brand';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';

SwiperCore.use([Navigation, A11y]);

SliderBrand.propTypes = {
    items: PropTypes.array,
    row: PropTypes.number,
    col: PropTypes.number,
};

SliderBrand.defaultProps = {
    items: [],
    row: 1,
    col: 10
}

function SliderBrand(props) {
    const {items, row, col} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide>
                    <Brand key = {item.id} id = {item.id} image = {item.image}/>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className="slide-brand-content">
            <Swiper
                spaceBetween={0}
                slidesPerView={col}
                slidesPerGroup={col}
                slidesPerColumn = {row}
                navigation
                slidesPerColumnFill = "row"
            >
                {renderItems()}
            </Swiper>
        </div>
        
    );
}

export default SliderBrand;