import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';

// CSS
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const WidgetDiscount = styled.div`
    display: flex;
    align-items: center;
    min-height: 120px;

    background: #fff4f4;
    border: 1px solid #f8d0d3;
`;

const Title = styled.strong`
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
    color: #d0011b;
    line-height: 22px;
`;

const Expire = styled.span`
    font-size: 12px;
`;

const Button = styled.button`
    padding: 2px 20px;
    color: #fff;
    background-color: #d0011b;
`;

WidgetSliderDiscount.propTypes = {
    items: PropTypes.array,
};

WidgetSliderDiscount.defaultProps = {
    items: []
}

function WidgetSliderDiscount(props) {
    const {items} = props;

    const renderItems = () =>{
        return items.map(item => {
            return (
                <SwiperSlide key = {item.id}>
                    <WidgetDiscount>
                        <div className = "w-75 pl-4">
                            <Title className = "d-block">{item.min} <br />{item.max}</Title>
                            <Expire>HSD: {item.expire}</Expire>
                        </div>

                        <div 
                            className="w-25 align-self-stretch d-flex align-items-center justify-content-center"
                            style = {{borderLeft: "1px dashed #d5d5d5"}}
                        >
                            <Button>Lưu</Button>
                        </div>
                        
                    </WidgetDiscount>
                    
                </SwiperSlide>
                
            );
        });
    }
    return (
        <div className = "slider-discount-content normal-arrow">
            <Swiper
                spaceBetween={24}
                slidesPerView={3}
                slidesPerGroup={1}
                navigation
            >
                {renderItems()}
            </Swiper>
        </div>
    );
}

export default WidgetSliderDiscount;