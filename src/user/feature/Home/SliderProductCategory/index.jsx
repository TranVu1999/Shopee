import React from 'react';
import PropTypes from 'prop-types';

// Component
import SwiperCore, { Navigation, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductCategoryThumbnail from './../../../common/component/ProductCategoryThumbnail';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';

SwiperCore.use([Navigation, A11y]);

SliderProductCategory.propTypes = {
    items: PropTypes.array,
};

SliderProductCategory.defaultProps = {
    items: []
}

function SliderProductCategory(props) {

    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide>
                    <ProductCategoryThumbnail key = {item.id} item = {item}/>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className="slider-product-category__content">
            <Swiper 
                init = {false}
                slidesPerView = {10}
                slidesPerColumn = {2}
                navigation
                slidesPerColumnFill = "row"
                
            >
                {renderItems()}
            </Swiper>
        </div>
        
    );
}

export default SliderProductCategory;