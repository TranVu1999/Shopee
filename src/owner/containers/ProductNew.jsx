import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import WidgetAddInformation from '../features/Product/WidgetAddInformation';

// Module 
import firebase from "./../../config/firebase-config";

// API
import productCategoryAPI from './../../api/productCategoryAPI';
import productApi from '../../api/productAPI';
import Loading from '../features/Layout/Loading';

function ProductNew() {
    // Data
    const [isLoading, setIsLoading] = useState(false);

    const [optionalAttributes, setOptionalAttributes] = useState([]);

    const [amountImageUploaded, setAmountImageUploaded] = useState(0);
    const [newProduct, setNewProduct] = useState({
        images2: []
    });

    const [imageAsUrl, setImageAsUrl] = useState([]);

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

    useEffect(() =>{
        const prepareData = function() {
            const data = {
                ...newProduct,
                avatar: imageAsUrl.filter(img => img.key === "avatar")[0].imageAsUrl,
                images: imageAsUrl.filter(img => img.key === "images").map(img => img.imageAsUrl),
            }

            const tableSizeImageUrl = imageAsUrl.filter(img => img.key === "tableSize");
            if(tableSizeImageUrl.length) {
                data.tableSize = tableSizeImageUrl[0].imageAsUrl
            }

            const classificationImageAsUrl = imageAsUrl.filter(img => img.key === "classifications");
            if(classificationImageAsUrl.length) {
                data.classification.classifies.first.images = classificationImageAsUrl.map(img => img.imageAsUrl);
            }

            productApi.add(data)
            .then(res => {
                if(res.success){
                    setIsLoading(false);
                    toast.dismiss();
                    toast.success("Thêm thành công!");

                    console.log(res.product)
                }
            })
            .catch(err => {
                toast.dismiss();
                toast.error("Thêm thất bại!");
                console.log(err);
            })
        }

        const amountImage = imageAsUrl.length
        if(amountImage && amountImageUploaded === amountImage){
            prepareData();
        }
    }, [imageAsUrl]);


    // Function    
    const prepareData = plainData =>{
        const {avatar, images, tableSize} = plainData;
        let listImage = [
            {
                key: "avatar",
                imageAsFile: avatar
            },
             
            ...images.filter(img => img).map(img => ({key: "images", imageAsFile: img})),
        ];

        if(tableSize) {
            listImage.push({
                key: "tableSize",
                imageAsFile: tableSize
            })
        }

        if(plainData.classification){
            let {images} = plainData.classification.classifies.first;
            images = images.filter(img => img);
            if(images.length){
                listImage = [
                    ...listImage,
                    ...images.map(img => ({
                        key: "classifications",
                        imageAsFile: img
                    }))
                ]
            }
        }

        setIsLoading(true);
        setAmountImageUploaded(listImage.length);

        let storage = firebase.storage();
        let storageRef = storage.ref();
        const bucketName = "products";
        const imageAsUrl = [];

        listImage.forEach((image, index) => {
            const path = `${bucketName}/${image.imageAsFile.name}`;
            let spaceRef = storageRef.child(path);

            spaceRef.put(image.imageAsFile)
            .then(snapshot => {
                return storageRef.child(path).getDownloadURL();
            })
            .then(url => {
                imageAsUrl.push({
                    key: image.key,
                    imageAsUrl: url
                });
                setImageAsUrl([...imageAsUrl]);
            })
            .catch(err => {
                console.log({err});
            });
        });
    }

    // Handle event
    const handleSubmitProduct = product =>{
        setNewProduct({...product});
        prepareData(product);
    }

    return (
        <div className="owner-product-add">
            <WidgetAddInformation 
                optionalAttributes = {optionalAttributes}
                handleSubmitProduct = {handleSubmitProduct}
            />
            
            {isLoading && <Loading/>}
            <ToastContainer autoClose={8000} />
            
        </div>
    );
}

export default ProductNew;