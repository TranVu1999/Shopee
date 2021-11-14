import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';


CartInfo.propTypes = {
    
};

function CartInfo(props) {
    return (
        <>
            <ShopItem/>
            <ShopItem/>
        </>
    );
}

export default CartInfo;