import React, {useState, useEffect} from 'react';

// Components
import TitleContent from './../components/TitleContent';
import Profile from './../features/Shop/Profile';

// Module 
import {uploadImages} from './../../utils/firebase';

// Api
import shopAPI from './../../api/shopAPI';


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

    // effect
    useEffect(() =>{
        const getShopInformation = async () =>{
            const res = await shopAPI.get();

            if(res.success){
                const shop_res = res.shop;

                const data = {
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
        }

        getShopInformation();

    }, []);

    // handle event
    const handleUpdateShop = shop =>{
        const shopInfo = {
            avatar: "",
            backgroundImage: "",
            brand: shop.brand.value,
            images: [],
            description: shop.description.value
        }

        const promiseUploadImages = uploadImages(
            shop.images.map(image => image.localImage),
            (url) =>{
                shopInfo.images.push(url)
            }
        );
        const promiseUploadAvatar = uploadImages(
            [shop.avatar.localImage],
            (url) =>{
                shopInfo.avatar = url;
            }
        );
        const promiseUploadBackground = uploadImages(
            [shop.backgroundImage.localImage],
            (url) =>{
                shopInfo.backgroundImage = url;
            }
        );



        Promise.all([
            ...promiseUploadImages, 
            ...promiseUploadAvatar, 
            ...promiseUploadBackground
        ])
        .then(() => console.log("Completed Upload"))
        .catch(err => console.log("Failed Upload"));

        console.log({shopInfo})
    }
    
    return (
        <section className="owner-page-content">
            <TitleContent 
                title="Hồ Sơ Shop"
                subTitle="Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn"
            />

            <Profile 
                shop = {{...shop}} 
                handleUpdateProfile = {handleUpdateShop}
            />
        </section>
    );
}

export default ShopProfile;