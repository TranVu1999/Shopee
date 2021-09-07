import React, {useState, useEffect} from 'react';

// Components
import TitleContent from './../components/TitleContent';
import Profile from './../features/Shop/Profile';

// Api
import shopAPI from './../../api/shopAPI'


function ShopProfile() {
    // data
    const [shop, setShop] = useState({
        avatar: "https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e",
        username: "tranvudpqn123",
        createdDate: "05/08/2020 ",
        backgroundImage: "",

        brand: {
            value: "",
            error: ""
        },
        description: {
            value: "",
            error: ""
        },
        images: [
            "https://thumbs.dreamstime.com/b/autumn-landscape-fall-scene-trees-leaves-sunlight-rays-foggy-forest-151793239.jpg",
            "https://firebasestorage.googleapis.com/v0/b/shopee-5da7d.appspot.com/o/images%2Fpic3.jpeg?alt=media&token=83517c22-14bc-487e-b83c-8021b5a63745"
        ],
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
                    avatar: shop_res.avatar,
                    username: shop_res.username,
                    createdDate: shop_res.createdDate,
                    backgroundImage: shop_res.backgroundImage,

                    brand: {
                        value: shop_res.brand,
                        error: ""
                    },
                    description: {
                        value: shop_res.description,
                        error: ""
                    },
                    images: shop_res.images,

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
        const data = {
            avatar: shop.avatar,
            backgroundImage: shop.backgroundImage,
            brand: shop.brand.value,
            images: shop.images,
            description: shop.description.value
        }

        console.log({data})
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