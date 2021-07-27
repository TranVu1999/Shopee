import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailResume from '../Product/ThumbnailResume';

WidgetListTopProduct.propTypes = {
    items: PropTypes.array,
};

WidgetListTopProduct.defaultProps = {
    items: []
}

function WidgetListTopProduct(props) {
    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{
            return (
                <>
                    <ThumbnailResume key = {item.id} item = {item}/>
                    <div className = "mt-3 mb-4 horizontal-line-1"></div>
                </>
            );
        })
    }

    return (
        <div>
            <div className = "px-3 page-product__voucher--header">Mã giảm giá của Shop</div>
            {renderItems()}
        </div>
        
    );
}

export default WidgetListTopProduct;