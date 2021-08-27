import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';
import ThumbnailSale from '../Product/ThumbnailSale';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const WidgetContent = styled.div`
    h5{
    padding: 15px 20px;

    a{
        text-transform: capitalize;
        font-size: .875rem;
        font-weight: 400;
        color: #d0011b;

        transition: all .3s ease;

        span{
            display: block;
            width: 1.125rem;
            height: 1.125rem;
            margin-left: .5rem;

            font-size: 1.125rem;
            
            color: #fff;
            background-color: #d0011b;
            border-radius: 50%;
        }
    }
}
`;

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
        <WidgetContent>
            {/* Title */}
            <h5 className = "d-flex align-items-center justify-content-between">
                <img src = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png" alt="title" />
                <Link to="/flash-sale" class="d-flex align-items-center">Xem tất cả<span aria-hidden="true" class="arrow_carrot-right"></span></Link>
            </h5>


            {/* List product */}
            <div className="normal-arrow w-100">
                <Swiper 
                    slidesPerView = {6}
                    slidesPerGroup = {6}
                    navigation
                >
                    {renderItems()}
                </Swiper>
            </div>
        </WidgetContent>
    );
}

export default FlashSale;