import React, {useState, useEffect} from 'react';

// Components
import WidgetAddInformation from '../features/Product/WidgetAddInformation';

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

    return (
        <div className="owner-product-add">
            <WidgetAddInformation 
                optionalAttributes = {optionalAttributes}
            />
        </div>
    );
}

export default ProductNew;