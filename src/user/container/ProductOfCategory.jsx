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
    
    const [dataPage, setDataPage] = useState({
        listProduct: [],
        amount: 0,
        listBrand: [],
        listDeliveryAddresss: [],
        listCategory: [],
    });

    const [navigationData, setNavigationData] = useState({
       start: 0, 
       indexActive: 0,
    });

    // effect
    // effect filter product
    useEffect(() => {
        const queryStr = queryString.stringify(filter);
        setIsLoading(true);

        const fetchData = async ()  => {
            const [resProduct] = await Promise.all([productApi.getList(queryStr)]);

            setIsLoading(false);
            if(resProduct.success) {
                setDataPage(resProduct.data)
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
                const data = {
                    ...filter, 
                    [name]: validate.removeAccents(value).replace(/\s/g, "-")
                }
                setFilter(data);
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

    const onHandleResetFilter = () => {
        setFilter({
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
        })
    }

    const {
        listBrand, 
        listCategory, 
        listDeliveryAddresss, 
        listProduct
    } = dataPage;

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
                                            categories = {listCategory}
                                            onChoseCategory = {onHandleFilter}
                                            title = ""
                                        />
                                    }
                                    WidgetSalerooms = {
                                        <WidgetListCheck 
                                            identification = "deliveryAddress"
                                            itemSelected = {filter.deliveryAddress}
                                            onChose = {onHandleFilter}
                                            items = {listDeliveryAddresss} 
                                            maxLength = {4}
                                        />
                                    }
                                    WidgetBrand = {
                                        <WidgetListCheck 
                                            itemSelected = {filter.brand}
                                            identification = "brand"
                                            onChose = {onHandleFilter}
                                            items = {listBrand} 
                                            maxLength = {4}
                                        />
                                    }
                                    WidgetRating = {<WidgetRating/>}
                                    WidgetPrice = {<WidgetPrice/>}
                                    onResetFilter = {onHandleResetFilter}

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