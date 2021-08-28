import React from 'react';

// Components
import Title from '../feature/ProductRelative/Title';
import ListProduct from '../feature/ProductRelative/ListProduct';

function ProductSimilar() {

    // data
    const [listProduct] = React.useState([
        {
            id: 1,
            title: "Paper Pouch (The good approach)",
            image: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 2,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            image: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 3,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            image: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5
        },
        {
            id: 4,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            image: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 5,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 6,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 7,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            image: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946
        },
        {
            id: 8,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 9,
            title: "Giay da bong",
            image: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504
        },
        {
            id: 10,
            title: "Paper Pouch (The good approach)",
            image: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 11,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            image: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 12,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            image: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5
        },
        {
            id: 13,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            image: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 14,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 15,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 16,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            image: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946
        },
        {
            id: 17,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 18,
            title: "Giay da bong",
            image: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504
        },
        {
            id: 19,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 20,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
    ]);

    return (
        <div className="user-page-content">
            <div className="container">
                <div className="mb-5">
                    <Title title = "Có thể bạn cũng thích"/>
                </div>

                <ListProduct listProduct = {listProduct}/>
            </div>
        </div>
    );
}

export default ProductSimilar;