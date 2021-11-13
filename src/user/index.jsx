import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// Actions
import {actInitAccount} from './common/module/account/action';
import {actInitCart} from './common/module/cart/action';

// Apis
import accountAPI from '../api/accountAPI';

// Components
import Login from './container/Login';
import Layout from './container/Layout';
import Footer from './feature/Layout/Footer'
import Cart from './container/Cart';

// Css
import './assets/sass/index.scss';
import './style.scss';


function UserRoll() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAccountInfo = function() {
            accountAPI.getShortInfo()
            .then(res => {
                if(res.success) {
                    const {username, avatar} = res.user;

                    dispatch(actInitAccount({
                        avatar,
                        username
                    }));
                }
            })
            .catch(err => {
                console.log({err});
            })
        }

        const accessToken = localStorage.getItem("accessToken");

        if(accessToken) {
            
            dispatch(actInitCart());
            fetchAccountInfo();
        }
    }, []); 

    return (
        <div className = "main-wrapper user-roll">
            <Switch>
                <Route 
                    path = "/login" 
                    component = {Login}
                />
                <Route 
                    path = "/cart" 
                    component = {Cart}
                />

                <Route 
                    path = "/" 
                    component = {Layout}
                />
            </Switch>

            <Footer/>
        </div>
    );
}

export default UserRoll;