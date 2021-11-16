import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';


CartInfo.propTypes = {
    cart: PropTypes.array.isRequired,
};

function CartInfo({cart}) {

    // render 
    const renderShopItem = () => {
        return cart.map(shop => <ShopItem shop = {shop}/>)
    }
    return (
        <>
            {renderShopItem()}
        </>
    );
}

export default CartInfo;