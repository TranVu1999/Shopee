import React, { useState } from 'react';
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

function UserRoll(props) {

    

    return (
        <div className = "main-wrapper">
            <Header/>
            
            {/* HOME PAGE */}
            {/* <HomePage/> */}

            {/* SALE PAGE */}
            {/* <SalePage/> */}

            {/* TOP SEARCH PAGE */}
            {/* <TopSearchPage/> */}

            {/* LIST PRODUCT OF CATEGORY */}
            {/* <ListProductOfCategoryPage/> */}
            
            {/* LIST STORE */}
            {/* <ListStorePage/> */}

            {/* STORE DETAIL */}
            <StoreDetailPage/>
            
            <Footer/>
        </div>
    );
}

export default UserRoll;