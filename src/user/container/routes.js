import HomePage from './Home';
import SalePage from './Sale';
import NotFountPage from './404';
import TopSearchPage from './TopSearch';
import ListProductOfCategoryPage from './ListProductOfCategory';
import ListStorePage from './ListStore';
import StoreDetailPage from './StoreDetail';
import ProductDetailPage from './ProductDetail';


const routes =  [
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
        component: HomePage
    },
    {
        path: "*",
        component: NotFountPage
    }
    
    
]

export default routes;