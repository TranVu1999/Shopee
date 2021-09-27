import {lazy} from 'react';

import SettingAccount from './SettingAccount';
import SettingShop from './SettingShop';
import SettingAddress from './SettingAddress';
import ShopReport from './ShopReport';
import ShopCategory from './ShopCategory';
import ShopDecoration from './ShopDecoration';
import ShopRating from './ShopRating';
import OrderManagement from './OrderManagement';
import ProductManagement from './ProductManagement';
import ProductCategory from './ProductCategory';
import ProductNew from './ProductNew';


// const 
import * as URL from './../constant/url';

// Components
const ShopProfile = lazy(() => import("./ShopProfile"));

const portalSetting = "/portal/settings/";
const portal = "/portal/";

const routes = [

    // Management Product
    {
        path: `/portal/product/list/:alias?`,
        component: ProductManagement,
        exact: true
    },
    {
        path: `/portal/product/category`,
        component: ProductCategory,
        exact: true
    },
    {
        path: `/portal/product/new`,
        component: ProductNew,
        exact: true
    },

    // Management Order
    {
        path: `${portal}sale/order/:alias?`,
        component: OrderManagement,
        exact: true
    },

    // Management Shop
    {
        path: `${portalSetting}shop/rating`,
        component: ShopRating
    },
    {
        path: `${portalSetting}shop/profile`,
        component: ShopProfile
    },
    {
        path: `${portalSetting}shop/report`,
        component: ShopReport
    },
    {
        path: `${portal}category`,
        component: ShopCategory
    },
    {
        path: `${portal}decoration`,
        component: ShopDecoration
    },

    // Setting
    {
        path: `${portalSetting}account/:alias?`,
        component: SettingAccount
    },
    {
        path: `${portalSetting}shop/:alias?`,
        component: SettingShop
    },
    {
        path: `${portalSetting}address`,
        component: SettingAddress
    },

    
]

export default routes;