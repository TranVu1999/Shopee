import typeAddress from './type_address';
import invoiceSate from './invoice_state';
import valuateShop from './valuate_shop';


const account = {
    id: "account_id",
    email: "vutrandpqn123@gmail.com",
    password: "admin123@",

    // danh sach cac shop account nay dang theo doi
    list_tracker: ["account_id"],
    
    invoices: [
        {
            id: "invoice_id",
            delivery_address_id: "delivery_address_id",
            total: 100000,
            invoice_state_id: invoiceSate.id,

        }
    ],

    reports: [
        {
            id: "reported_id",
            product_id: "product_id",
            classify_report_comment_id: classifyCommentReport.id
        }
    ],

    user: {
        username: "user_name",
        full_name: "Tran Le Anh Vu",
        phone_number: "1112 2223 3334",
        gender: ["male", "female", "other"],
        birthday: "10-01-1999",
        delivery_address: [
            {
                id: "delivery_address_id",
                full_name: "full_name",
                phone_number: "phone_number",
                address: {
                    province: "TP. Ho Chi Minh",
                    district: "TP. Thu Duc",
                    ward: "Tang Nhon Phu A",
                    house_number: "156 La Xuan Oai",
                    type_address: typeAddress.id
                },
                default: true
            }
        ]
    },

    shop: {
        brand_name: "brand_name",
        alias: "shop_alias",

        // Ngay tro thanh shop cua website
        created_date: "10-01-1999",
        status: true,

        // danh sach cac account dang theo doi shop
        list_tracker: ["account_id"],
        valuate_shop_id: valuateShop.id
    }
}