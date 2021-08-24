import {lazy} from 'react';

import SalePage from './Sale';
import NotFountPage from './404';
import TopSearchPage from './TopSearch';

import ListStorePage from './ListStore';


import ProductDetailPage from './ProductDetail';
import UserPage from './User';
import ArticlePage from './Article';
import CartPage from './Cart';

const ProductOfCategoryPage = lazy(() => import("./ProductOfCategory"));
const HomePage = lazy(() => import("./Home"));
const StoreDetailPage = lazy(() => import("./StoreDetail"));


const routes = [
    {
        path: "/user",
        component: UserPage
    },
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/article",
        component: ArticlePage
    },
    {
        path: "/flash-sale",
        component: SalePage
    },
    {
        path: "/product-detail",
        component: ProductDetailPage
    },
    {
        path: "/store-detail",
        component: StoreDetailPage
    },
    {
        path: "/products-of-category",
        component: ProductOfCategoryPage
    },
    {
        path: "/list-store",
        component: ListStorePage
    },
    {
        path: "/top-products",
        component: TopSearchPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "*",
        component: NotFountPage
    }


]

export default routes;