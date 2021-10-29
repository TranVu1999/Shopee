import React, {useState, useEffect} from 'react';

// Components
import WidgetAddInformation from '../features/Product/WidgetAddInformation';

// Module 
import {uploadImages2} from './../../utils/firebase';
import firebase from "./../../config/firebase-config";

// API
import productCategoryAPI from './../../api/productCategoryAPI';
import productApi from '../../api/productAPI';

function ProductNew() {
    // Data
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
        const amountImage = imageAsUrl.length
        if(amountImage && amountImageUploaded === amountImage){
            console.log({newProduct});
            console.log(imageAsUrl);
        }
    }, [imageAsUrl]);


    // Function

    const uploadImage = image =>{
        return new Promise(function (resolve, reject) {
            var storageRef = firebase.storage().ref("images/" + image.name);
    
            //Upload file
            var task = storageRef.put(image);
    
            //Update progress bar
            task.on('state_changed',
                (snapshot) => {},
                (err) => {},
                () => {
                    var downloadURL = task.snapshot.downloadURL;
                    console.log({downloadURL});
                }
            );
        });
    }
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
        </div>
    );
}

export default ProductNew;