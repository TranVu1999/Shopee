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
        let data = {
            ...product,
            avatar: "",
            images: [],
            video: ""
        };

        const promises = [];
        if(product.avatar){
            promises.push(...uploadImages(
                [product.avatar], url =>{
                    data.avatar = url;
                }
            ));
        }

        
        const prodImages = product.images.filter(img => img)
        promises.push(...uploadImages(
            prodImages,
            url => {
                data.images.push(url);
            }
        ));

        if(product.classification && product.classification.first.images.length){
            data = {
                ...data,
                classification: {
                    ...product.classification,
                    classifies: {
                        ...product.classification.classifies,
                        first: {
                            ...product.classification.classifies.first,
                            images: []
                        }
                    }
                }
            }

            const classifyImages = product.classification.first.images.filter(img => img)
            promises.push(...uploadImages(
                classifyImages,
                url => {
                    data.classification.classifies.first.images.push(url);
                }
            ));
        }

        if(product.video){
            promises.push(...uploadImages(
                [product.video]
            ), url =>{
                data.video = url;
            })
        }

        if(promises.length){
            Promise.all([...promises])
            .then(() => {
                console.log({data});
            })
            .catch(err => console.log("Failed Upload"));
        }else{
            console.log("Thiếu hình ảnh")
        }

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