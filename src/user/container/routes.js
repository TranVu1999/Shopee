import Home from './Home.jsx';
import SalePage from './Sale';
import NotFountPage from './404';
import TopSearchPage from './TopSearch';
import ListProductOfCategoryPage from './ListProductOfCategory';
import ListStorePage from './ListStore';
import StoreDetailPage from './StoreDetail';
import ProductDetailPage from './ProductDetail';
import UserPage from './User';
import ArticlePage from './Article';
import CartPage from './Cart';

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
        component: ListProductOfCategoryPage
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
        component: Home
    },
    {
        path: "*",
        component: NotFountPage
    }


]

export default routes;