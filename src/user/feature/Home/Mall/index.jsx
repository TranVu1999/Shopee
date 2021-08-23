import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SliderBannerMall from './SliderBannerMall.jsx';
import SliderProductMall from './SliderProductMall.jsx';

const WidgetContent = styled.div`

`;

const Title = styled.div`
    padding: 1.125rem 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.05);

    .left{
        font-size: 1rem;

        a{
            font-size: 1.0625rem;
            text-transform: uppercase;
            font-weight: 500;

            color: #d0011b;
        }

        ul{
            margin-left: 1rem;
            padding-left: 1rem;
            border-left: 1px solid #d8d8d8;

            li{
                display: flex;
                align-items: center;
                margin-right: 1rem;
            }
        }
        

        .icon{
            height: 1.0625rem;
            width: 1.0625rem;
            margin-right: 6px;

            background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ce96743fb9e3d51ca703e17eb491283.png);
        }

        .icon-return{
            background-size: 284.72222222222223% 241.0958904109589%;
            background-position: 7.518796992481203% 9.70873786407767%;
        }

        .icon-authentic{
            background-size: 280.82191780821915% 241.0958904109589%;
            background-position: 84.84848484848484% 9.70873786407767%;
        }

        .icon-transport{
            background-size: 284.72222222222223% 241.0958904109589%;
            background-position: 7.518796992481203% 100%;
        }
    }

    .right{
        a{
            font-size: .875rem;
            color: #d0011b;

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


Mall.propTypes = {
    listMallBanner: PropTypes.array,
    listProduct: PropTypes.array,
};

Mall.defaultProps = {
    listMallBanner: [],
    listProduct: []
}

function Mall(props) {

    const {listMallBanner, listProduct} = props;

    return (
        <WidgetContent className = "mall-content">
            <Title className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center left">
                    <a href="#/">Shopee Mall</a>
                    <ul className="d-flex align-items-center">
                        <li>
                            <div className="icon icon-return"></div>
                            <span>7 ngày miễn phí trả hàng</span>
                        </li>
                        <li>
                            <div className="icon icon-authentic"></div>
                            <span>Hàng chính hãng 100%</span>
                        </li>
                        <li>
                            <div className="icon icon-transport"></div>
                            <span>Miễn phí vận chuyển</span>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <a href="#/" className="d-flex align-items-center">Xem tất cả<span aria-hidden="true" className="arrow_carrot-right"></span></a>
                </div>

            </Title>

            <div className="row">
                <div className="col-4">
                    <SliderBannerMall items = {listMallBanner}/>
                </div>
                <div className="col-8">
                    <SliderProductMall items = {listProduct}/>
                </div>
            </div>
        </WidgetContent>
    );
}

export default Mall;