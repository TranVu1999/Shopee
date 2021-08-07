import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../feature/Cart/Header';
import ShopCart from '../../feature/Cart/ShopCart';

CartPage.propTypes = {
    
};

function CartPage(props) {
    return (
        <div className="mt-80 mb-40">
            <div className="container">
                <Header/>
                <div className="mb-2"></div>
                <ShopCart/>
                <ShopCart/>
                <ShopCart/>
            </div>
        </div>
    );
}

export default CartPage;