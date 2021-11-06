import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Component
import {Swiper, SwiperSlide} from 'swiper/react';

// Modules
import Number from './../../util/number';

// Style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const WidgetContent = styled.div`
    padding: 1rem 0rem;

    h5{
        padding: 15px 20px;
    }

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

const WidgetProduct = styled.div`
    display: block;

    .product__thumbnail{
        height: 173px;
        border: none;

        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .pice{
        font-size: 20px;
        color: #ee4d2d;
        text-align: center;
    }

    .sale-progress{
        font-size: .75rem;
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
            const {
                image, 
                discount, 
                price, 
                numOrder,
                numSale
            } = item;
            const remain =  (numOrder / numSale * 100).toFixed(0);

            return (
                <SwiperSlide key = {item.id}>
                    <WidgetProduct className = "product">
                        <div 
                            className="my-2 product__thumbnail" 
                            style = {{backgroundImage: `url(${image})`}}
                        >
                            {discount ? (
                                <div className="box-discount">
                                    <div><b>{discount}%</b> Sale</div>
                                </div>
                            ) : ""}
                        </div>
                        <div className="box-text">
                            <div className="mb-2 pice">₫ {Number.convertToMoney(price) }</div>
                            <div className="sale-progress">
                                <div className="num-sold">
                                    <div className="progress-mark" style={{width: `${100 - remain}%`}}></div>

                                    {remain > 50 ? <div className="bar-fire"></div> : ""}
                                    

                                    <span> {remain > 70 ? "Sap Chay Hang" : `Da ban ${numOrder}`}</span>

                                </div>
                            </div>
                        </div>
                    </WidgetProduct>
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