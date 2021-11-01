import {lazy} from 'react';

const WidgetPurchaseDetail = lazy(() => import("../../feature/User/WidgetPurchaseDetail"));
const WidgetVoucherDetail = lazy(() => import("../../feature/User/WidgetVoucherDetail"));
const WidgetListNotification = lazy(() => import("../../feature/User/WidgetListNotification"));
const WidgetExpireVoucher = lazy(() => import("../../feature/User/WidgetExpireVoucher"));
const WidgetVoucher = lazy(() => import("../../feature/User/WidgetVoucher"));
const WidgetShopeeCoin = lazy(() => import("../../feature/User/WidgetShopeeCoin"));
const WidgetPurchase = lazy(() => import("../../feature/User/WidgetPurchase"));
const WidgetUpdatePassword = lazy(() => import("../../feature/User/WidgetUpdatePassword"));
const WidgetListAddress = lazy(() => import("../../feature/User/WidgetListAddress"));


const routes = [
    {
        path: "address",
        component: WidgetListAddress
    },
    {
        path: "update-password",
        component: WidgetUpdatePassword
    },
    {
        path: "purchase",
        component: WidgetPurchase,
        exact: true
    },
    {
        path: "coin",
        component: WidgetShopeeCoin,
        exact: true
    },
    {
        path: "voucher",
        component: WidgetVoucher,
        exact: true
    },
    {
        path: "notification",
        component: WidgetListNotification,
        exact: true
    },
    {
        path: "voucher-history",
        component: WidgetExpireVoucher
    },
    {
        path: "voucher-detail",
        component: WidgetVoucherDetail,
        exact: true
    },
    {
        path: "purchase-detail",
        component: WidgetPurchaseDetail,
        exact: true
    }
]

export default routes;