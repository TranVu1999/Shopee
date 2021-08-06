
import WidgetUserPortfolio from "../../feature/User/WidgetUserProfile";
import WidgetListAddress from "../../feature/User/WidgetListAddress";
import WidgetUpdatePassword from "../../feature/User/WidgetUpdatePassword";
import WidgetPurchase from "../../feature/User/WidgetPurchase";
import WidgetShopeeCoin from "../../feature/User/WidgetShopeeCoin";
import WidgetVoucher from "../../feature/User/WidgetVoucher";
import WidgetExpireVoucher from "../../feature/User/WidgetExpireVoucher";
import WidgetListNotification from "../../feature/User/WidgetListNotification";
import WidgetVoucherDetail from "../../feature/User/WidgetVoucherDetail";
import WidgetPurchaseDetail from "../../feature/User/WidgetPurchaseDetail";

const routes = [
    {
        path: "/user/information",
        component: WidgetUserPortfolio
    },
    {
        path: "/user/address",
        component: WidgetListAddress
    },
    {
        path: "/user/update-password",
        component: WidgetUpdatePassword
    },
    {
        path: "/user/purchase",
        component: WidgetPurchase
    },
    {
        path: "/user/coin",
        component: WidgetShopeeCoin
    },
    {
        path: "/user/voucher",
        component: WidgetVoucher
    },
    {
        path: "/user/notification",
        component: WidgetListNotification
    },
    {
        path: "/user/voucher-history",
        component: WidgetExpireVoucher
    },
    {
        path: "/user/voucher-detail",
        component: WidgetVoucherDetail
    },
    {
        path: "/user/purchase-detail",
        component: WidgetPurchaseDetail
    }
]

export default routes;