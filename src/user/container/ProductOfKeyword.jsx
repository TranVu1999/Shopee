import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import queryString from 'query-string';
// components
import SideBar from './../feature/Layout/SideBar';
import WidgetControl from '../feature/ProductOfCategory/WidgetControl';
import Shop from '../feature/ProductOfKeyword/Shop';
import Keysearch from '../feature/ProductOfKeyword/Keysearch';
import WidgetListProduct from '../feature/ProductOfCategory/WidgetListProduct';
import WidgetProductCategory from './../feature/Layout/SideBar/WidgetProductCategory';
import WidgetListCheck from './../feature/Layout/SideBar/WidgetListCheck';
import WidgetRating from './../feature/Layout/SideBar/WidgetRating';
import WidgetPrice from './../feature/Layout/SideBar/WidgetPrice';
// apis
import productApi from './../../api/productAPI';
// modules
import validate from './../../utils/validate';

function ProductOfKeyword() {
    const params = useParams();
    const keysearch = params.slug;
    const [filter, setFilter] = useState({
        page: 0,
        topCategory: "",
        deliveryAddress: "",
        brand: "",
        selectType: "popular",
        sort: "",
        from: 0,
        to: 0,
        limit: 18,
        search: validate.removeAccents(keysearch).toLowerCase()
    });

    const [dataPage, setDataPage] = useState({
        listProduct: [],
        amount: 0,
        listBrand: [],
        listDeliveryAddresss: [],
        listCategory: [],
    });

    // effect
    useEffect(() => {
        const queryStr = queryString.stringify(filter);
        console.log({queryStr})
        // setIsLoading(true);

        const fetchData = async ()  => {
            const [resProduct] = await Promise.all([productApi.getList(queryStr)]);
            console.log({resProduct})
            // setIsLoading(false);
            if(resProduct.success) {
                setDataPage(resProduct.data)
            }
        }

        fetchData();
    }, [filter]);

    // handle event
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
            page: 0,
            topCategory: "",
            deliveryAddress: "",
            brand: "",
            selectType: "popular",
            sort: "",
            from: 0,
            to: 0,
            limit: 18,
            search: validate.removeAccents(keysearch).toLowerCase()
        })
    }

    const {
        listBrand, 
        listCategory, 
        listDeliveryAddresss, 
        listProduct
    } = dataPage;

    return (
        <div className = "product-of-keysearch-page list-product-page">
            <div className="container">
                <div className="list-product">
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
                            <div className="pl-4 list-product-right">
                                <Shop/>
                                <Keysearch/>
                                <WidgetControl/>  
                                <WidgetListProduct items = {listProduct}/>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOfKeyword;