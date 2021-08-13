import SettingAccount from './SettingAccount';
import SettingShop from './SettingShop';
import SettingAddress from './SettingAddress';
import ShopReport from './ShopReport';
import ShopCategory from './ShopCategory';
import ShopDecoration from './ShopDecoration';

const portalSetting = "/portal/settings/";
const portal = "/portal/";

const routes = [
    // Management Shop
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