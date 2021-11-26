import React from 'react';
// components
import SideBar from './../feature/Layout/SideBar';
import WidgetControl from '../feature/ProductOfCategory/WidgetControl';
import Shop from '../feature/ProductOfKeyword/Shop';
import Keysearch from '../feature/ProductOfKeyword/Keysearch';

function ProductOfKeyword() {
    return (
        <div className = "product-of-keysearch-page list-product-page">
            <div className="container">
                <div className="list-product">
                    <div className="row">
                        <div className="col-lg-2">
                            <SideBar>
                            </SideBar>
                        </div>

                        <div className="col-lg-10">
                            <div className="pl-4 list-product-right">
                                <Shop/>
                                <Keysearch/>
                                <WidgetControl/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOfKeyword;