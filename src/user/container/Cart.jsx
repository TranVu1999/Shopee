import React from 'react';
import {useSelector} from 'react-redux';

// Components
import Header from '../feature/Cart/Header';
import HeaderTable from '../feature/Cart/HeaderTable';
import ShopCart from '../feature/Cart/ShopCart';


function CartPage() {

    const cart = useSelector(state => state.cartReducer.cart);

    //render
    const renderListCart = () => {
        if(cart) {
            if(cart.length) {
                return cart.map(row => {
                    return <ShopCart key={row._id} shop = {row}/>
                })
            }else {

            }
        }
    }

    return (
        <>
            <Header/>
            
            <div style={{margin: '160px 0 40px'}}>
                <div className="container">
                    <HeaderTable/>
                    <div className="mb-2"></div>

                    {renderListCart()}
                </div>
            </div>
        </>
    );
}

export default CartPage;