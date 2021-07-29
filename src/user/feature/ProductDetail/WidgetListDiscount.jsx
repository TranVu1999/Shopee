import React from 'react';
import PropTypes from 'prop-types';

// Components
import WidgetDiscount from '../Store/WidgetDiscount';

WidgetListDiscount.propTypes = {
    items: PropTypes.array,
};

WidgetListDiscount.defaultProps = {
    items: []
}

function WidgetListDiscount(props) {
    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{
            return (
                <WidgetDiscount 
                    key = {item.id} 
                    item = {item}
                    small = {true}
                />
            );
        });
    }

    return (
        <div>
            <div className = "page-product__sidebar--header">Mã giảm giá của Shop</div>
            {renderItems()}
        </div>
    );
}

export default WidgetListDiscount;