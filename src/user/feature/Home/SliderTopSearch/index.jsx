import React from 'react';
import PropTypes from 'prop-types';

// Component
import SwiperCore, { Navigation, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import TopSearch from './../../../common/component/TopSearch';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';

SwiperCore.use([Navigation, A11y]);

SliderTopSearch.propTypes = {
    items: PropTypes.array,
};

SliderTopSearch.defaultProps = {
    items: []
}

function SliderTopSearch(props) {

    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <TopSearch item = {item}/>
                </SwiperSlide>
                
            );
        });
    }

    return (
        <div className="top-search-content">
            <Swiper
                slidesPerView={3}
                slidesPerGroup = {3}
                navigation
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default SliderTopSearch;