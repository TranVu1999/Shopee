import SettingAccount from './SettingAccount';
import SettingShop from './SettingShop';
import SettingAddress from './SettingAddress';
import ShopReport from './ShopReport';
import ShopCategory from './ShopCategory';
import ShopDecoration from './ShopDecoration';
import ShopProfile from './ShopProfile';
import ShopRating from './ShopRating';
import OrderManagement from './OrderManagement';

const portalSetting = "/portal/settings/";
const portal = "/portal/";

const routes = [
    // Management Order
    {
        path: `${portal}sale/order`,
        component: OrderManagement
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
        path: `${portalSetting}account`,
        component: SettingAccount
    },
    {
        path: `${portalSetting}shop/basic`,
        component: SettingShop
    },
    {
        path: `${portalSetting}address`,
        component: SettingAddress
    },

    
]

export default routes;