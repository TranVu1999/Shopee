import account from './account';
import comment from './comment';
import productCategory from './product_category';


export default product = {
    id: "product_id",
    title: "product_title",
    alias: "product_alias",
    avatar: "avatar",
    list_image: ["list_link_image"],
    video: "",
    description: "",
    product_category_id: productCategory.id,

    created_by: account.id,
    created_date: "10-01-1999",
    modified_by: account.id,
    modified_date: "10-01-1999",

    // Ma phan biet loai san pham va cac san pham cung loai
    // Stoke keeping unit
    sku: "ASS032W", 
    inventory: 0,

    comments: [comment.id],
    price: 0,
    promo_unit: 0,

    // so luong san pham da ban ra
    sold_number: 0,
    like_number: 0,

    classify: {
        classify_group: [
            {
                label: "classify-label1",
                classify: ["11", "12"]
            },
            {
                label: "classify-label2",
                classify: ["21", "22"]
            }
        ],

        table_price: [
            {
                first_classify: "classify-label1",
                second_classify: "classify-label2",
                price: 0,
                inventory: 0,
                sku: 0
            }
        ],

        list_image: [""]

    },

    state: "new/old",
    weight: 0,
    size: {
        height: 0,
        width: 0,
        length: 0
    }
    
}