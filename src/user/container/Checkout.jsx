import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../feature/Cart/Header';
import RecievedAddress from '../feature/Checkout/RecievedAddress';
import CartInfo from '../feature/Checkout/CartInfo';
import Coin from '../feature/Checkout/Coin';
import Footer from '../feature/Checkout/Footer';

Checkout.propTypes = {
    
};

function Checkout(props) {
    return (
        <div className="checkout-page">
            <Header title = {"Thanh Toán"}/>
            
            <div style={{margin: '160px 0 40px'}}></div>
            <RecievedAddress/>

            <div style={{marginBottom: '40px'}}></div>

            <CartInfo/>

            <Coin/>
            <div style={{marginBottom: '20px'}}></div>
            <Footer/>
        </div>
    );
}

export default Checkout;