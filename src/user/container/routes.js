import {lazy} from 'react';

import NotFountPage from './NotFound';

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
const ProductSimilarPage = lazy(() => import("./ProductSimilar.jsx"));
const ProductSameShopPage = lazy(() => import("./ProductSameShop"));
const ProductMayLikePage = lazy(() => import("./ProductMayLike"));
const TopSearchPage = lazy(() => import("./TopSearch.jsx"));

const routes = [
    {
        path: "/user",
        component: UserPage,
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
        path: "/similar-products",
        component: ProductSimilarPage
    },
    {
        path: "/from-same-shop",
        component: ProductSameShopPage
    },
    {
        path: "/you-may-also-like",
        component: ProductMayLikePage
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