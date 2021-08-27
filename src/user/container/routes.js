import {lazy} from 'react';

import NotFountPage from './404';
import TopSearchPage from './TopSearch';

import UserPage from './User';
import ArticlePage from './Article';
import CartPage from './Cart';

const ProductOfCategoryPage = lazy(() => import("./ProductOfCategory"));
const HomePage = lazy(() => import("./Home"));
const StoreDetailPage = lazy(() => import("./StoreDetail.jsx"));
const ListStorePage = lazy(() => import("./ListStore.jsx"));
const ProductOfStorePage = lazy(() => import("./ProductOfStore"));
const SalePage = lazy(() => import("./Sale.jsx"));
const ProductDetailPage = lazy(() => import("./ProductDetail.jsx"));

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
        path: "/products-of-store",
        component: ProductOfStorePage
    },
    {
        path: "/list-store/:alias?",
        component: ListStorePage, 
        exact: true
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