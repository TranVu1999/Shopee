import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../feature/Cart/Header';
import RecievedAddress from '../feature/Checkout/RecievedAddress';

Checkout.propTypes = {
    
};

function Checkout(props) {
    return (
        <div className="checkout-page">
            <Header title = {"Thanh Toán"}/>
            
            <div style={{margin: '160px 0 40px'}}></div>
            <RecievedAddress/>
        </div>
    );
}

export default Checkout;