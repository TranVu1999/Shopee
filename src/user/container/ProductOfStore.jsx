import React, {useState} from 'react';
import styled from 'styled-components';

// Components
import HeroSlider from '../feature/Layout/HeroSlider';
import SliderBrand from '../feature/Layout/SliderBrand';
import SideBar from '../feature/Layout/SideBar';
import Title from '../common/component/Title';
import WidgetProductCategory from '../feature/Layout/SideBar/WidgetProductCategory';
import WidgetListCheck from '../feature/Layout/SideBar/WidgetListCheck';
import WidgetRating from '../feature/Layout/SideBar/WidgetRating';
import WidgetPrice from '../feature/Layout/SideBar/WidgetPrice';
import ProductSale from '../feature/ProductOfCategory/ProductSale'
import WidgetControl from '../feature/ProductOfCategory/WidgetControl';
import WidgetListProduct from '../feature/ProductOfCategory/WidgetListProduct';

import Sidebar from '../feature/StoreDetail/Sidebar';
import Avatar from '../feature/StoreDetail/Avatar';

// images
import banner1 from './../assets/image/banners/banner1.jpeg';
import banner2 from './../assets/image/banners/banner2.jpeg';
import banner3 from './../assets/image/banners/banner3.jpeg';
import banner4 from './../assets/image/banners/banner4.jpeg';
import NavigationBar from '../feature/Layout/NavigationBar';
import WidgetListProductCategory from '../feature/StoreDetail/WidgetListProductCategory';

const WidgetProductContent = styled.section`
    gap: 1rem;

    .list-product__left{
        flex: 1;
    }

    .list-product__right{
        flex: 5;
    }
`; 


function ProductOfStore(props) {

    const [listSlideMainBanner] = useState([
        {
            id: 1,
            url: "#/",
            image: banner1
        },
        {
            id: 2,
            url: "#/",
            image: banner2
        },
        {
            id: 3,
            url: "#/",
            image: banner3
        },
        {
            id: 4,
            url: "#/",
            image: banner4
        }
    ]);

    const [listBrand] = useState([
        {
            id: 1,
            url: "#/",
            image: "https://cf.shopee.vn/file/eaf39f8d15c2031626c9470fdfcf253a"
        },
        {
            id: 2,
            url: "#/",
            image: "https://cf.shopee.vn/file/8e954b3868fc239c9206c5b2d25e10f9"
        },
        {
            id: 3,
            url: "#/",
            image: "https://cf.shopee.vn/file/185aa84b65234679750bc51ce74246da"
        },
        {
            id: 4,
            url: "#/",
            image: "https://cf.shopee.vn/file/fed4b97d2e56f102647bb6bccb086d02"
        },
        {
            id: 5,
            url: "#/",
            image: "https://cf.shopee.vn/file/1c2bdc665398416e2765c9a9f5b89036"
        },
        {
            id: 6,
            url: "#/",
            image: "https://cf.shopee.vn/file/58655e4b2935d4e57044f285769511f0"
        },
        {
            id: 7,
            url: "#/",
            image: "https://cf.shopee.vn/file/3b5dad3a6b8b5876aee8da20d94ffc93"
        },
        {
            id: 8,
            url: "#/",
            image: "https://cf.shopee.vn/file/ee67615b2871ae017c69e87184c84102"
        },
        {
            id: 9,
            url: "#/",
            image: "https://cf.shopee.vn/file/4eb1fd88a044d66267f56fa26be01ea0"
        },
        {
            id: 10,
            url: "#/",
            image: "https://cf.shopee.vn/file/6dc92d4dc66896f8a9e05661c0d0ad17"
        },
        {
            id: 11,
            url: "#/",
            image: "https://cf.shopee.vn/file/48f200699bf2108b66ad2a3b7d390da9"
        },
        {
            id: 12,
            url: "#/",
            image: "https://cf.shopee.vn/file/e071f123aed82dcc2210b301310dc024"
        },
        {
            id: 13,
            url: "#/",
            image: "https://cf.shopee.vn/file/b5bef91d5f7c97d6b10e4c37c58506a7"
        },
        {
            id: 14,
            url: "#/",
            image: "https://cf.shopee.vn/file/9973b9d111444523bcd4c733c6189f9c"
        },
        {
            id: 15,
            url: "#/",
            image: "https://cf.shopee.vn/file/860222879bb7d896286f28cc304f9e38"
        },
        {
            id: 16,
            url: "#/",
            image: "https://cf.shopee.vn/file/12d0ad1af373a7a83683b19b62ab3a87"
        },
        {
            id: 17,
            url: "#/",
            image: "https://cf.shopee.vn/file/b18eb18b7949c7920dd678e0c10b2854"
        },
        {
            id: 18,
            url: "#/",
            image: "https://cf.shopee.vn/file/5ae4a69caf8172da365898519b0d6b17"
        },
        {
            id: 19,
            url: "#/",
            image: "https://cf.shopee.vn/file/4eb6275c4a22f7eeb2c5f240ebffdeee"
        },
        {
            id: 20,
            url: "#/",
            image: "https://cf.shopee.vn/file/876700b1b6eafffe78e4cfaff78c71a9"
        },
        {
            id: 21,
            url: "#/",
            image: "https://cf.shopee.vn/file/ccafb8d6dc732f0c9e9945cd1ccd9c9c"
        },
        {
            id: 22,
            url: "#/",
            image: "https://cf.shopee.vn/file/e0affcbe60f935e8a717b1d5da75fb5c"
        },
        {
            id: 23,
            url: "#/",
            image: "https://cf.shopee.vn/file/c70052c81ab446213aeb8a1e54711270"
        },
        {
            id: 24,
            url: "#/",
            image: "https://cf.shopee.vn/file/c70052c81ab446213aeb8a1e54711270"
        }
    ]);

    const [listCategory] = useState([
        "Th???i Trang Nam",
        "??o Kho??c",
        "??o Vest v?? Blazer",
        "??o Hoodie, ??o Len & ??o N???",
        "Qu???n Jeans",
        "Qu???n D??i/Qu???n ??u",
        "Qu???n Short",
        "??o",
        "??o Ba L???",
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

    const [listBrandProduct] = useState([
        "LADOS",
        "FASVIN",
        "CIZA",
        "Rough",
        "POLOMAN",
        "TSIMPLE",
        "Calvin Klein"
    ]);

    const [listProduct] = useState([
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

    const [navigationData, setNavigationData] = useState({
       start: 0, 
       indexActive: 0,
    });

    

    // handle event
    const handleChosePage = event =>{
        const {type, value} = event;
        const maxIndex = listProduct.length - 1;

        let tempState = {...navigationData}

        switch(type){
            case "chose-index":
                tempState = {
                    ...tempState, 
                    indexActive: value
                }
                break;

            case "neighbor-page":
                tempState = {
                    ...tempState,
                    indexActive: tempState.indexActive + value
                }

                if(
                    (value === 1 && 
                    tempState.indexActive > tempState.start + 5) ||
                    (value === -1 && 
                    tempState.indexActive < tempState.start)
                ){
                    tempState = {
                        ...tempState,
                        start: tempState.start + value,
                    }
                }

                break;

            case "scroll-page":
                let {start, index} = tempState;

                if(value === 1 && start + 11 <= maxIndex){
                    tempState = {
                        start: start + 6,
                        indexActive: start + 6
                    }
                }else if (value === 1 && start + 11 > maxIndex){
                    tempState = {
                        start: maxIndex - 5,
                        indexActive: maxIndex - 5
                    }
                }

                if(value === -1 && start - 6 >= 0){
                    tempState = {
                        start: start - 6,
                        indexActive: start - 1
                    }
                }else if(value == -1 && start - 6 < 0){
                    tempState = {
                        start: 0,
                        indexActive: 5
                    }
                }
                break;
            default:
                break;
        }

        if(
            tempState.indexActive >= 0 && 
            tempState.start + 5 <= maxIndex &&
            tempState.indexActive <= maxIndex
        ){
            setNavigationData(tempState);
        }
        
    }

    return (
        <div className = "user-page-content list-product-of-category-page mb-40">
            <div className="container">

                <WidgetProductContent className="d-flex">
                    <div className="list-product__left">
                        <Sidebar
                            Avatar = {<Avatar/>}
                            WidgetListProductCategory = {
                                <WidgetListProductCategory 
                                    listProductCat = {listCategory}
                                />
                            }
                            WidgetSalerooms = {
                                <WidgetListCheck 
                                    items = {listAddress} 
                                    maxLength = {6}
                                />
                            }
                            WidgetRating = {<WidgetRating/>}
                            WidgetPrice = {<WidgetPrice/>}
                        />
                    </div>

                    
                    <div className="list-product__right">
                        <WidgetControl/>
                        <div className="mb-3"></div>
                        <WidgetListProduct items = {listProduct}/>

                        <div className="mb-5"></div>
                        <NavigationBar 
                            maximum = {listProduct.length}
                            indexActive = {navigationData.indexActive}
                            start = {navigationData.start}
                            end = {navigationData.start + 6}

                            handleChosePage = {handleChosePage}
                        />
                    </div>
                </WidgetProductContent>
                
            </div>
        </div>
    );
}

export default ProductOfStore;