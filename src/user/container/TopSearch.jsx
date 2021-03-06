import React, {useState} from 'react';

// Components
import Tab from '../feature/Layout/Tab';
import PageMainBanner from '../feature/Sale/PageMainBanner';
import TabFull from '../feature/StoreDetail/TabFull';
import ListProduct from '../feature/TopSearch/ListProduct';


function TopSearchPage(props) {

    const [mainBanner] = useState({
        image: "https://cf.shopee.vn/file/565a1853cc90417bbb3b5c01d139006b"
    });

    const [listTab] = useState({
        listTab: [
            {
                title: "Áo Thun Form Rộng Ngắn Tay Unisex",
            },
            {
                title: "Áo Thun Polo Nam Ngắn Tay",
            },
            {
                title: "Ốp Lưng Iphone",
            },
            {
                title: "Bông Tẩy Trang 3 Lớp Cotton Pads",
            },
            {
                title: "Quần Lót Nữ Cotton",
            },
            {
                title: "Dây Sạc Iphone",
            }
        ], 
        moreTab: [
            {
                title: "Áo Thun Form Rộng Ngắn Tay Unisex",
            },
            {
                title: "Áo Thun Polo Nam Ngắn Tay",
            },
            {
                title: "Ốp Lưng Iphone",
            },
            {
                title: "Bông Tẩy Trang 3 Lớp Cotton Pads",
            },
            {
                title: "Quần Lót Nữ Cotton",
            },
            {
                title: "Dây Sạc Iphone",
            }
        ]
        
    });

    const [listProduct] = useState([
        {
            id: 1,
            title: "Paper Pouch (The good approach)",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24000,
            discount: 50,
            numOrder: 128
        },
        {
            id: 2,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            img: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24000,
            discount: 50,
            numOrder: 128
        },
        {
            id: 3,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            img: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165000,
            discount: 25,
            numOrder: 5
        },
        {
            id: 4,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            img: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69000,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 5,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99000,
            discount: 18,
            numOrder: 15
        },
        {
            id: 6,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159000,
            discount: 36,
            numOrder: 114
        },
        {
            id: 7,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55000,
            discount: 56,
            numOrder: 946
        },
        {
            id: 8,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82000,
            discount: 13,
            numOrder: 3
        },
        {
            id: 9,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39000,
            numOrder: 504
        },
        {
            id: 10,
            title: "Paper Pouch (The good approach)",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24000,
            discount: 50,
            numOrder: 128
        },
        {
            id: 11,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            img: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24000,
            discount: 50,
            numOrder: 128
        },
        {
            id: 12,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            img: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165000,
            discount: 25,
            numOrder: 5
        },
        {
            id: 13,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            img: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69000,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 14,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99000,
            discount: 18,
            numOrder: 15
        },
        {
            id: 15,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 16,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55000,
            discount: 56,
            numOrder: 946
        },
        {
            id: 17,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82000,
            discount: 13,
            numOrder: 3
        },
        {
            id: 18,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39000,
            numOrder: 504
        },
        {
            id: 19,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99000,
            discount: 18,
            numOrder: 15
        },
        {
            id: 20,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159000,
            discount: 36,
            numOrder: 114
        },
        {
            id: 21,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55000,
            discount: 56,
            numOrder: 946
        },
        {
            id: 22,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 23,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 3900,
            numOrder: 504
        },
        {
            id: 24,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82000,
            discount: 13,
            numOrder: 3
        },
    ]);

    return (
        <div className = "user-page-content top-search-page-content">
            <div className="container">
                {/* Main Banner */}
                <PageMainBanner image = {mainBanner.image}/>

                {/* Tab */}
                <div className="mb-3">
                    <TabFull
                        listTab = {listTab.listTab}
                        moreTab = {listTab.moreTab}
                    />
                </div>
                

                {/* List Product Top Search */}
                <ListProduct listProduct = {listProduct}/>
            </div>
        </div>
    );
}

export default TopSearchPage;