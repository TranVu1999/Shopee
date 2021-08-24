import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Tab from './../../feature/Layout/Tab';
import WidgetStoreInformation from '../../feature/StoreDetail/WidgetStoreInformation';
import WidgetSliderDiscount from '../../feature/StoreDetail/WidgetSliderDiscount';
import WidgetSliderBanner from '../../feature/StoreDetail/WidgetSliderBanner';
import WidgetBanner from '../../feature/StoreDetail/WidgetBanner';
import WidgetListHotProduct from '../../feature/StoreDetail/WidgetListHotProduct';

import SideBar from './../../feature/Layout/SideBar';
import WidgetProductCategory from './../../feature/Layout/SideBar/WidgetProductCategory';
import WidgetListCheck from '../../feature/Layout/SideBar/WidgetListCheck';
import WidgetRating from '../../feature/Layout/SideBar/WidgetRating';
import WidgetPrice from '../../feature/Layout/SideBar/WidgetPrice';
import WidgetControl from '../../feature/ProductOfCategory/WidgetControl';
import WidgetListProduct from '../../feature/ProductOfCategory/WidgetListProduct';

const Title = styled.h5`
    font-size: 18px;
    font-weight: 400;
`;

function StoreDetailPage(props) {
    const [storeInformation] = useState({
        title: "4U SHOP",
        onlineTime: "70",
        avatar: "https://cf.shopee.vn/file/efb9073e1dfbabf429278b9e2e592363_tn",
        bgImage: "https://cf.shopee.vn/file/30e84c8c66e5d13ea95d729c443ee214_tn",
    });

    const [listTab] = useState([
        {
            title: "Dao choi",
        },
        {
            title: "Tat ca san pham",
        },
        {
            title: "Deal duoi 49K",
        },
        {
            title: "Sale off 50%",
        }
    ]);

    const [listDiscount] = useState([
        {
            id: 1,
            min: "Giảm ₫5k Đơn Tối Thiểu ₫10k",
            expire: "31.07.2021"

        },
        {
            id: 2,
            min: "Giảm 10% Đơn Tối Thiểu ₫99k",
            max: "Giảm tối đa ₫5k",
            expire: "31.07.2021"

        },
        {
            id: 3,
            min: "Giảm 20% Đơn Tối Thiểu ₫150k",
            max: "Giảm tối đa ₫10k",
            expire: "31.07.2021"

        },
        {
            id: 4,
            min: "Giảm ₫30k Đơn Tối Thiểu ₫349k",
            expire: "31.07.2021"

        }
    ]);

    const [listBanner] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/241643bb5b09092d624e3f110c03df78"
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/8a9674df917acf9154dac9474a65ed32"
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/d0fef4b3b055d1f7363c8aa29a49e0b5"
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/b535867dd26a43cefb9d5ebea11f0107"
        }
    ]);

    const [listHotProduct] = useState([
        {
            id: 1,
            title: "Paper Pouch (The good approach)",
            image: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 2,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            image: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "Ha Noi"
        },
        {
            id: 3,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            image: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 4,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            image: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 5,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 5400,
            storeAddress: "TP.Ho Chi Minh"
        }
    ]);

    const [listProduct] = useState([
        {
            id: 1,
            title: "Paper Pouch (The good approach)",
            image: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 2,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            image: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 3,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            image: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 4,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            image: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 5,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 6,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 7,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            image: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 8,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 9,
            title: "Giay da bong",
            image: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 10,
            title: "Paper Pouch (The good approach)",
            image: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 11,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            image: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 12,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            image: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 13,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            image: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 14,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 15,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 16,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            image: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 17,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 18,
            title: "Giay da bong",
            image: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 19,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            image: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 20,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            image: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 21,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            image: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 22,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 23,
            title: "Giay da bong",
            image: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504,
            storeAddress: "TP.Ho Chi Minh"
        },
        {
            id: 24,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            image: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3,
            storeAddress: "TP.Ho Chi Minh"
        },
    ]);

    const [listAddress] = useState([
        "TP.Ho Chi Minh",
        "Ha Noi",
        "Vinh Phuc",
        "Thai Nguyen",
        "Hai Phong",
        "Dong Nai",
        "Bac Ninh",
        "Da Nang"
    ]);

    const [listCategory] = useState([
        "Thoi trang nam",
        "ao khoac",
        "quan jeans",
        "quan dai/quan au",
        "quan short",
        "ao",
        "ao ba lo",
        "do lot",
        "do ngu",
        "do bo",
        "vo/tat",
        "trang phuc truyen thong",
        "do hoa trang",
        "trang phuc nganh nghe",
        "trang suc nam"
    ]);

    const [listBrandProduct] = useState([
        "LADOS",
        "FASVIN",
        "CIZA",
        "Rough",
        "POLOMAN",
        "TSIMPLE",
        "Calvin Klein"
    ]);

    return (
        <div className = "mt-80 store-detail-page-content">
            <div className="bg-white pb-3" style = {{borderBottom: "1px solid #d5d5d5"}}>
                <div className="container">
                    <WidgetStoreInformation
                        info = {storeInformation}
                    />
                </div>
            </div>

            <div>
                <div className="container">
                    <Tab
                        smallHeaderTab = {true}
                        items = {listTab} 
                        activeIndex = {0}
                    />

                    <div className="p-4 bg-white">
                        <Title className = "mb-3">Mã giảm giá của Shop</Title>
                        <WidgetSliderDiscount items = {listDiscount}/>
                    </div>

                    <div className="mt-5"></div>
                    <WidgetBanner image = {"https://cf.shopee.vn/file/f215ebbffd0ad54507e60a5f880c8f8d"}/>
                    <div className="mt-3"></div>
                    <WidgetBanner image = {"https://cf.shopee.vn/file/873f387e00f09fa9bd67e2280053e8d4"}/>
                    <div className="mt-3"></div>

                    <WidgetSliderBanner items = {listBanner}/>
                    <div className="mt-3"></div>
                    <WidgetBanner image = {"https://cf.shopee.vn/file/71aa242806a67fd79184a1aa2bbc304f"}/>

                    <div className="mt-3"></div>
                    <WidgetBanner image = {"https://cf.shopee.vn/file/709e479a7e647c40952d50a7b4da44a4"}/>

                    <div className="mt-5"></div>
                    <WidgetListHotProduct items = {listHotProduct}/>

                    <div className="mt-5"></div>
                    <WidgetBanner image = {"https://cf.shopee.vn/file/c7dc2b7ec2dc0213a7fae46d402c3961"}/> 


                    <div className="mt-5 mb-40 list-product">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="list-product__left">
                                    <SideBar 
                                        WidgetProductCategory = {
                                            <WidgetProductCategory items = {listCategory}/>
                                        }
                                        WidgetSalerooms = {
                                            <WidgetListCheck 
                                                items = {listAddress} 
                                                maxLength = {4}
                                            />
                                        }
                                        WidgetBrand = {
                                            <WidgetListCheck 
                                                items = {listBrandProduct} 
                                                maxLength = {4}
                                            />
                                        }
                                        WidgetRating = {<WidgetRating/>}
                                        WidgetPrice = {<WidgetPrice/>}

                                    >
                                    </SideBar>
                                </div>
                                
                            </div>

                            <div className="col-lg-10">
                                <div className="pl-5 list-product__right">
                                    <WidgetControl/>
                                    <div className="mb-3"></div>
                                    <WidgetListProduct items = {listProduct}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>                   
                    
                </div>
            </div>
            
        </div>
    );
}

export default StoreDetailPage;