import React, {useState, useEffect} from 'react';

// Components
import WidgetAddInformation from '../features/Product/WidgetAddInformation';

// Module 
import {uploadImages} from './../../utils/firebase';


// API
import productCategoryAPI from './../../api/productCategoryAPI';

function ProductNew() {
    // Data
    const [optionalAttributes, setOptionalAttributes] = useState([]);


    // Effect
    useEffect(() =>{
        const fetchOptionalAttributes = async () =>{
            const prodCatId = localStorage.getItem("prodCatId");

            if(prodCatId){
                const res = await productCategoryAPI.get(prodCatId, "skeleton-attribute");

                if(res.success){
                    const {skeletonAttribute} = res.productCategory;
                    
                    setOptionalAttributes(skeletonAttribute)
                }
            }
        }

        fetchOptionalAttributes();
    }, []);

    // Handle event
    const handleSubmitProduct = product =>{
        
        console.log({product});
    }

    return (
        <div className="owner-product-add">
            <WidgetAddInformation 
                optionalAttributes = {optionalAttributes}
                handleSubmitProduct = {handleSubmitProduct}
            />
        </div>
    );
}

export default ProductNew;