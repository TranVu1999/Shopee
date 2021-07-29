import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';
import ThumbnailSale from '../../Product/ThumbnailSale';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';


FlashSale.propTypes = {
    items: PropTypes.array,
};

FlashSale.defaultProps = {
    items: []
}

function FlashSale(props) {

    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <ThumbnailSale item = {item}/>
                </SwiperSlide>
            );
        });
    }

    return (
        <div className = "flash-sale-content">
            {/* Title */}
            <h5 className = "d-flex align-items-center justify-content-between">
                <img src = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png" alt="title" />
                <Link to="/flash-sale">Xem them <span className="arrow_carrot-right"></span></Link>
            </h5>


            {/* List product */}
            <Swiper 
                slidesPerView = {6}
                slidesPerGroup = {6}
                navigation
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default FlashSale;