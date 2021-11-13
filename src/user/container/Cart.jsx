import React from 'react';
import {useSelector} from 'react-redux';

// Components
import Header from '../feature/Cart/Header';
import HeaderTable from '../feature/Cart/HeaderTable';
import ShopCart from '../feature/Cart/ShopCart';
import CartControl from '../feature/Cart/CartControl';
import EmptyCart from '../feature/Cart/EmptyCart';


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
            <div className="cart-page">
                <Header title={"Giỏ Hàng"} showFormSearch/>
                
                <div style={{margin: '160px 0 40px'}}>
                    <div className="container">
                        {!cart.length && <EmptyCart/>}

                        {cart.length > 0 && 
                        <>
                            <HeaderTable/>
                            <div className="mb-2"></div>

                            {renderListCart()} 
                        </>}
                    </div>
                </div>

                <CartControl/>
            </div>
            
        </>
    );
}

export default CartPage;