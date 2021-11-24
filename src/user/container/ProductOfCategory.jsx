import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import queryString from 'query-string';

// Components
import HeroSlider from './../feature/Layout/HeroSlider';
import SliderBrand from './../feature/Layout/SliderBrand';
import SideBar from './../feature/Layout/SideBar';
import Title from './../common/component/Title';
import WidgetProductCategory from './../feature/Layout/SideBar/WidgetProductCategory';
import WidgetListCheck from './../feature/Layout/SideBar/WidgetListCheck';
import WidgetRating from './../feature/Layout/SideBar/WidgetRating';
import WidgetPrice from './../feature/Layout/SideBar/WidgetPrice';
import ProductSale from './../feature/ProductOfCategory/ProductSale'
import WidgetControl from '../feature/ProductOfCategory/WidgetControl';
import WidgetListProduct from '../feature/ProductOfCategory/WidgetListProduct';
import ProcessingEffect from '../feature/Layout/ProcessingEffect';

// apis
import productApi from './../../api/productAPI';
import producCategorytApi from './../../api/productCategoryAPI';

// modules
import validate from './../../utils/validate';

// images
import banner1 from './../assets/image/banners/banner1.jpeg';
import banner2 from './../assets/image/banners/banner2.jpeg';
import banner3 from './../assets/image/banners/banner3.jpeg';
import banner4 from './../assets/image/banners/banner4.jpeg';
import NavigationBar from '../feature/Layout/NavigationBar';


function ProductOfCategory() {
    const params = useParams();
    const [prodCateAlias, prodCateId] = params.slug.split('.');

    const [filter, setFilter] = useState({
        category: validate.removeAccents(prodCateAlias),
        page: 0,
        topCategory: "",
        deliveryAddress: "",
        brand: "",
        selectType: "popular",
        sort: "",
        from: 0,
        to: 0,
        limit: 18,
        search: ""
    });
    const [isLoading, setIsLoading] = useState(false);

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

    const [categories, setCategories] = useState([]);

    const [listAddress, setListAddress] = useState([]);

    const [listBrandProduct, setListBrandProduct] = useState([]);

    const [listProduct, setListProduct] = useState([]);

    const [navigationData, setNavigationData] = useState({
       start: 0, 
       indexActive: 0,
    });

    // effect
    useEffect(() => {  
        setIsLoading(true);

        const fetchData = async ()  => {
            const [
                resListDeliveryAddress,
                resListBrand, 
                resProductCate
            ] = await Promise.all([
                productApi.getDeliveryAddress(prodCateId),
                productApi.getBrand(prodCateId),
                producCategorytApi.get(prodCateId, "top-sub-categories")
            ]);

            setIsLoading(false);

            if(resListDeliveryAddress.success) {
                setListAddress(resListDeliveryAddress.listAddress);
            }

            if(resListBrand.success) {
                setListBrandProduct(resListBrand.listBrand);
            }

            if(resProductCate.success) {
                setCategories([...resProductCate.productCategory])
            }
            
        }

        fetchData();
        

    }, []);

    // effect filter product
    useEffect(() => {
        const queryStr = queryString.stringify(filter);

        setIsLoading(true);

        const fetchData = async ()  => {
            const [resProduct] = await Promise.all([productApi.getList(queryStr)]);

            setIsLoading(false);
            if(resProduct.success) {
                setListProduct(resProduct.listProduct);
            }
        }

        fetchData();
    }, [filter]);

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

    const onHandleFilter = e => {
        const {name, value} = e;

        switch(name) {
            case "topCategory":
                setFilter({...filter, [name]: validate.removeAccents(value.alias)});
                break;
            case "deliveryAddress":
                let strFormated = validate.formatToUrl(value);
                strFormated = validate.removeAccents(strFormated);
                setFilter({...filter, [name]: strFormated});
                break;
            case "brand":{
                let strFormated = validate.formatToUrl(value);
                strFormated = validate.removeAccents(strFormated);
                setFilter({...filter, [name]: strFormated});
                break;
            }
                
            default: 
                break;
        }
    }

    return (
        <div className = "user-page-content list-product-page">
            <div className="container">
                <div className="mb-20 slider-main-banner">
                    <HeroSlider items = {listSlideMainBanner} isLarge = {true}/>
                </div>

                <div className="mb-40 bg-white slider-brand">
                    <Title title = {"Danh sach nhan hang"} link = {"/list-store"}/>
                    <SliderBrand items = {listBrand} row = {2} col = {6}/>
                </div>

                <div className="mb-40">
                    <ProductSale/>
                </div>

                <div className="mb-40 list-product">
                    <div className="row">
                        <div className="col-lg-2">
                            <SideBar 
                                    WidgetProductCategory = {
                                        <WidgetProductCategory 
                                            prodCateSelected = {filter.topCategory}
                                            categories = {categories}
                                            onChoseCategory = {onHandleFilter}
                                        />
                                    }
                                    WidgetSalerooms = {
                                        <WidgetListCheck 
                                            identification = "deliveryAddress"
                                            itemSelected = {filter.deliveryAddress}
                                            onChose = {onHandleFilter}
                                            items = {listAddress} 
                                            maxLength = {4}
                                        />
                                    }
                                    WidgetBrand = {
                                        <WidgetListCheck 
                                            itemSelected = {filter.brand}
                                            identification = "brand"
                                            onChose = {onHandleFilter}
                                            items = {listBrandProduct} 
                                            maxLength = {4}
                                        />
                                    }
                                    WidgetRating = {<WidgetRating/>}
                                    WidgetPrice = {<WidgetPrice/>}

                                >
                            </SideBar>
                            
                        </div>

                        <div className="col-lg-10">
                            <div className="position-relative pl-4 list-product__right" style={{minHeight: '500px'}}>
                                {isLoading && <div style={{minHeight: '500px'}}><ProcessingEffect/></div>}

                                {!isLoading && <>
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
                                </>}
                                
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                
            </div>
        </div>
    );
}

export default ProductOfCategory;