import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';
import TitleMall from './TitleMall';
import SliderBannerMall from './SliderBannerMall';
import SliderProductMall from './SliderProductMall';

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
        <div className = "mall-content">
            <TitleMall/>
            <div className="row">
                <div className="col-4">
                    <SliderBannerMall items = {listMallBanner}/>
                </div>
                <div className="col-8">
                    <SliderProductMall items = {listProduct}/>
                </div>
            </div>
        </div>
    );
}

export default Mall;