import brand from './brand';

export const product_category = {
    id: "product_category_id",
    title: "product_category_title",
    alias: "product_category_alias",
    parent_id: "prod_cate_parent_id",

    // Danh sach cac thuoc tinh cua mot loai danh muc san pham
    
    product_attribute: [
        {
            id: "prod_attr_id",
            label: "prod_attr_label",
            type_value: ["text", "single selections", "multi selections", "yes/no-selections"],
            options: [""] 
        }
    ]
}