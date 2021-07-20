import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';

TopSearch.propTypes = {
    item: PropTypes.object,
};

TopSearch.defaultProps = {
    item: null
}

function TopSearch(props) {
    const {item} = props;
    
    return (
        <div 
            className="top-search__item" 
        >
            <div className="box">
                <div className="item--left">
                    <div className="thumb">
                        <div className="number "><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/b3c9562746c271224aa8d704e3e010b9.png" alt="" /></div>
                        <img src = {item.images[0] || ""} alt="image" />
                        <p className="numSold">Ban {item.numSold}k+ / thang</p>
                    </div>
                </div>

                <div className="item--right">
                    <div className="thumb">
                        <div className="number"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f83d399d4c3e098d165e6bf609cb27ea.png" alt="" /></div>
                        <img src = {item.images[1] || ""} alt="image" />
                    </div>
                    <div className="thumb">
                    <div className="number"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/e8481c83838bc373571b6e90ca5f7ee6.png" alt="" /></div>
                        <img src = {item.images[2] || ""} alt="image" />
                    </div>
                </div>
            </div>
            
            <span>{item.title}</span>
        </div>
    );
}

export default TopSearch;