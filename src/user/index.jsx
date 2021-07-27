import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './assets/sass/index.scss';
import HeaderLarge from './common/component/HeadingLarge';
import HeadingSmall from './common/component/HeadingSmall';
import Button from './common/component/Button';
import Footer from './feature/Layout/Footer';
import Header from './feature/Layout/Header';
import Thumbnail from './feature/Product/Thumbnail';

import HomePage from './container/Home';
import SalePage from './container/Sale';
import TopSearchPage from './container/TopSearch';
import ListProductOfCategoryPage from './container/ListProductOfCategory';
import ListStorePage from './container/ListStore';
import StoreDetailPage from './container/StoreDetail';
import ProductDetailPage from './container/ProductDetail';

import routes from './container/routes';

function UserRoll(props) {

    return (
        <div className = "main-wrapper">
            <Header/>

            <Switch>
                {routes.map((item, index) =>{
                return <Route 
                    key = {index} 
                    path = {item.path} 
                    component = {item.component}
                    exact = {item.exact || false}
                />
                })}
            </Switch>

            {/* PRODUCT DETAIL */}
            {/* <ProductDetailPage/> */}
            
            <Footer/>
        </div>
    );
}

export default UserRoll;