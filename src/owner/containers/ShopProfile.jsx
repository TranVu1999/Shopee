import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

// Components
import TitleContent from './../components/TitleContent';
import Profile from './../features/Shop/Profile';
import Loading from '../features/Layout/Loading';

// Module 
import firebase from './../../config/firebase-config';

// Api
import shopAPI from './../../api/shopAPI';
import ProcessingEffect from '../../user/feature/Layout/ProcessingEffect';



function ShopProfile() {
    
    // data
    const [shop, setShop] = useState({
        avatar: {
            url: "",
            localImage: null
        },
        username: "tranvudpqn123",
        createdDate: "05/08/2020 ",
        backgroundImage: {
            url: "",
            localImage: null
        },

        brand: {
            value: "",
            error: ""
        },
        description: {
            value: "",
            error: ""
        },
        images: [],
        analysis: {
            numberProduct: 0,
            ratioReplay: 57,
            rangeReplay: "Trong vòng vài tiếng",
            rating: 0,
            ratioInvoice: 0
        }
    });
    const [amountImageUploaded, setAmountImageUploaded] = useState(0);
    const [imageAsUrl, setImageAsUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // effect
    // call api get data
    useEffect(() =>{
        setIsLoading(true);
        const getShopInformation = async () =>{
            
            shopAPI.get()
            .then(res => {
                setIsLoading(false);
                if(res.success){
                    const shop_res = res.shop;
    
                    const data = {
                        ...shop_res,
                        avatar: {
                            url: shop_res.avatar,
                            localImage: null
                        },
                        username: shop_res.username,
                        createdDate: shop_res.createdDate,
                        backgroundImage: {
                            url: shop_res.backgroundImage,
                            localImage: null
                        },
    
                        brand: {
                            value: shop_res.brand,
                            error: ""
                        },
                        description: {
                            value: shop_res.description,
                            error: ""
                        },
                        images: shop_res.images.map(image => ({url: image, localImage: null})),
    
                        analysis: shop_res.analysis
                    }
                    setShop(data);
                }else{
                    console.log("get shop profile error")
                }
            })
            .catch(err => {console.log({err})})
        }

        getShopInformation();

    }, []);

    useEffect(() =>{
        const prepareData = function() {
            
            const shopData = {
                ...shop,
                brand: shop.brand.value,
                description: shop.description.value,
                avatar: imageAsUrl.filter(img => img.key === "avatar")[0].imageAsUrl,
                backgroundImage: imageAsUrl.filter(img => img.key === "background")[0].imageAsUrl,
                images: imageAsUrl.filter(img => img.key === "images").map(img => img.imageAsUrl),
            }

            shopAPI.update(shop._id, shopData)
            .then(res => {
                setIsLoading(false);
                toast.dismiss();
                toast.success("Thêm thành công!");
            })
            .catch(err => {
                setIsLoading(false);
                toast.dismiss();
                toast.error("Thêm thất bại!");
                console.log({err})
            })
            
        }

        const amountImage = imageAsUrl.length
        if(amountImage && amountImageUploaded === amountImage){
            prepareData();
        }
    }, [imageAsUrl]);

    // handle event
    const handleUpdateShop = shopData =>{
        const listImage = [
            ...shopData.images.map(img => ({key: "images", imageAsFile: img}))
        ];

        if(shopData.avatar.localImage) {
            listImage.push({
                key: "avatar",
                imageAsFile: shopData.avatar.localImage
            })
        }

        if(shopData.backgroundImage.localImage) {
            listImage.push({
                key: "background",
                imageAsFile: shopData.backgroundImage.localImage
            })
        }

        setShop(shopData);
        setIsLoading(true);

        if(listImage.length) {
            setAmountImageUploaded(listImage.length);

            let storage = firebase.storage();
            let storageRef = storage.ref();
            const bucketName = "shops";
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
        } else {
            const data = {
                ...shop,
                brand: shopData.brand.value,
                description: shopData.description.value,
                avatar: shop.avatar.url,
                backgroundImage: shop.backgroundImage.url,
                images: shop.images,
            }

            shopAPI.update(shop._id, data)
            .then(res => {
                setIsLoading(false);
                toast.dismiss();
                toast.success("Chỉnh sửa thành công!");
            })
            .catch(err => {
                setIsLoading(false);
                toast.dismiss();
                toast.error("Chỉnh sửa thất bại!");
                console.log({err})
            })
        }
        
        
    }
    
    return (
        <section className="shop-profile-page">
            <TitleContent 
                title="Hồ Sơ Shop"
                subTitle="Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn"
            />

            {isLoading && <div className="position-relative" style={{height: '580px'}}><ProcessingEffect/></div>
            }
            
            {!isLoading && <Profile 
                shop = {{...shop}} 
                handleUpdateProfile = {handleUpdateShop}
            />}
            
            <ToastContainer autoClose={8000} />
        </section>
    );
}

export default ShopProfile;