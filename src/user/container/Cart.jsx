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
        return cart.map(row => {
            return <ShopCart key={row._id} shop = {row}/>
        })
    }

    return (
        <>
            <div className="cart-page">
                <Header title={"Giỏ Hàng"} showFormSearch/>
                
                <div style={{margin: '16px 0 40px'}}>
                    <div className="container">
                        {!cart.length && <EmptyCart
                            title = "Bạn chưa có sản phẩm nào trong giỏ hàng."
                            button = {{title: "Mua hàng", url: "/"}}
                        />}

                        {cart.length > 0 && 
                        <>
                            <HeaderTable cart = {cart}/>
                            <div className="mb-2"></div>

                            {renderListCart()} 
                        </>}
                    </div>
                </div>
                
                {cart.length > 0 && <CartControl cart = {cart}/>}
                
            </div>
            
        </>
    );
}

export default CartPage;