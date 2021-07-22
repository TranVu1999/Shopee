import React, {useState} from 'react';

// Components
import SliderMainBanner from './../../feature/Layout/SliderMainBanner';
import SliderBrand from './../../feature/Layout/SliderBrand';
import SideBar from './../../feature/Layout/SideBar';
import Title from '../../common/component/Title';
import WidgetProductCategory from './../../feature/Layout/SideBar/WidgetProductCategory';
import WidgetListCheck from '../../feature/Layout/SideBar/WidgetListCheck';
import WidgetRating from '../../feature/Layout/SideBar/WidgetRating';
import WidgetPrice from '../../feature/Layout/SideBar/WidgetPrice';


function ListProductOfCategoryPage(props) {

    const [listSlideMainBanner] = useState([
        {
            id: 1,
            url: "#/",
            image: "https://cf.shopee.vn/file/5722f153e0e5ed0e5d06a4c492be9a0c"
        },
        {
            id: 2,
            url: "#/",
            image: "https://cf.shopee.vn/file/54e81fd2da17a55c8d9f52463b148fae"
        },
        {
            id: 3,
            url: "#/",
            image: "https://cf.shopee.vn/file/6f2e0a933fba7a6a02e2462c6d01d011"
        },
        {
            id: 4,
            url: "#/",
            image: "https://cf.shopee.vn/file/cb5dd33c1b4ba19613c1125a1dfbf804"
        },
        {
            id: 5,
            url: "#/",
            image: "https://cf.shopee.vn/file/3fe7ed4471fa151b624d093da7b782d6"
        },
        {
            id: 6,
            url: "#/",
            image: "https://cf.shopee.vn/file/fcbacc756d4d6a74c8b98cd883d5dec7"
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

    return (
        <div className = "mt-80 list-product-of-category-page">
            <div className="container">
                <div className="mb-20 slider-main-banner">
                    <SliderMainBanner items = {listSlideMainBanner} isLarge = {true}/>
                </div>
                

                <div className="mb-40 bg-white slider-brand">
                    <Title title = {"Danh sach nhan hang"} link = {"#/"}/>
                    <SliderBrand items = {listBrand} row = {2} col = {6}/>
                </div>

                <div className="mb-40 list-product">
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
                            <div className="list-product__right">

                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                
            </div>
        </div>
    );
}

export default ListProductOfCategoryPage;