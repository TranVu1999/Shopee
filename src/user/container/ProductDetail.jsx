import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

// Components
import WidgetBreadcrumb from '../feature/Layout/WidgetBreadcrumb';
import WidgetListDiscount from '../feature/ProductDetail/WidgetListDiscount';
import WidgetImage from '../feature/ProductDetail/WidgetImage';
import WidgetModalImage from '../feature/ProductDetail/WidgetModalImage';
import StatisticsStore from '../feature/ProductDetail/StatisticsStore';
import ThumbnailStore from '../feature/ProductDetail/ThumbnailStore';
import WidgetListTopProduct from '../feature/ProductDetail/WidgetListTopProduct';
import WidgetDescription from '../feature/ProductDetail/WidgetDescription';
import WidgetComment from '../feature/ProductDetail/WidgetComment';
import WidgetCommentStatistics from '../feature/ProductDetail/WidgetCommentStatistics';


// Hooks
import useOutsideElement from '../hooks/outsideElement';

// Comnents
import WidgetDetail from '../feature/ProductDetail/WidgetDetail';
import ComboPromo from '../feature/ProductDetail/ComboPromo';
import WidgetListProduct from '../feature/ProductDetail/WidgetListProduct';
import SuccessPopup from './../feature/Layout/SuccessPopup'

// api
import productApi from '../../api/productAPI';
import cartApi from '../../api/cartAPI';


const ModalImageBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,.5);
    z-index: 100;
`;

const ImageBoxContent = styled.div`
    position: relative;
    top: 48%;

    width: 60%;
    height: calc(100% - 200px);
    margin: 50px auto;
    background-color: #fff;

    transform: translateY(-55%);
`;


function ProductDetail(props) {
    const params = useParams();
    // State
    const [indexImageActive, setIndexImageActive] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);

    const [listDiscount] = useState([
        {
            id: 1,
            min: "Giảm ₫5k Đơn Tối Thiểu ₫10k",
            expire: "31.07.2021"

        },
        {
            id: 2,
            min: "Giảm 10% Đơn Tối Thiểu ₫99k",
            max: "Giảm tối đa ₫5k",
            expire: "31.07.2021"

        },
        {
            id: 3,
            min: "Giảm 20% Đơn Tối Thiểu ₫150k",
            max: "Giảm tối đa ₫10k",
            expire: "31.07.2021"

        }
    ]);
    const [listTopProduct] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/adb558bc03d28db14cc8e4356a127205_tn",
            title: "ÁO SOMI TAY BỒNG OVERSIZE ( ẢNH THẬT)",
            price: 165000, 
            discount: 20
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/b6ec3944bead9c416bdde180dc66dbef_tn",
            title: "Áo somi Freesize dài tay trơn SP000043  ( ẢNH THẬT)",
            price: 158000,
            discount: 30
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/763a037a6842aaae1fcceb048671b7fd_tn",
            title: "Quần baggy vải đen. Quần tây nữ   ( Ảnh thật Tia19 chụp )",
            price: 150000,
            discount: 25
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/dec0fc1f94575815b9dcaca50ac86349_tn",
            title: "ÁO SOMI TRẮNG TAY LỠ SP000193 ( KÉO SANG XEM FEEDBACK)",
            price: 149000,
            discount: 40
        }
    ]);
    const [comments] = useState({
        average: 4.8,
        filter: "5 Sao",
        statistics: [
            {
                key: "5 Sao",
                value: 339
            },
            {
                key: "4 Sao",
                value: 20
            },
            {
                key: "3 Sao",
                value: 12
            },
            {
                key: "2 Sao",
                value: 2
            },
            {
                key: "1 Sao",
                value: 3
            },
            {
                key: "Có Bình luận",
                value: 241
            },
            {
                key: "Có hình ảnh / video",
                value: 206
            }

        ]
    });
    const [listComboPromo] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/633d4e82fb8d41fea9c3bf8fe56c4f05_tn",
            title: "Váy tay bồng buộc dây Tia19 . Đầm trễ vai cutout ulzzang ( Ảnh thật)",
            price: 248000, 
            discount: 50
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/397551b0a65ac7aa904995a69a789677_tn",
            title: "Áo cardigan len giấy vintage ( Ảnh thật)",
            price: 139000,
            discount: 30
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/d3673d487ebb4792d01d85621c88baaa_tn",
            title: "ÁO BRA HỞ LƯNG",
            price: 75000,
            discount: 10
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/aada394a3c7b366606fee7eca5f85ff6_tn",
            title: "ÁO BRA 2 DÂY TĂM",
            price: 75000,
            discount: 10
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/0b8f419df34ee1eae78a9140925a420d_tn",
            title: "ÁO BRA DÂY CHÉO KHÔNG GỌNG LOẠI 1 ( ẢNH THẬT)",
            price: 199000,
            discount: 30
        },
        {
            id: 6,
            image: "https://cf.shopee.vn/file/3fed2301c24fbb95cc15d80a51bf4fd5_tn",
            title: "ÁO BRA QUÂY ĐÚC",
            price: 75000,
            discount: 30
        }
    ]);

    const [product, setProduct] = useState(null);
    const [classification, setClassification] = useState({
        first: "",
        second: ""
    });
    const [addToCartNotify, setAddToCartNotify] = useState("")


    // Hook
    const {visible, setVisible, ref} = useOutsideElement(false);


    // USE EFFECT
    // Toggle disable body scroll
    useEffect(() => {
        if(visible){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
    }, [visible]);

    useEffect(() => {
        const arrPatternUrl = params.slug.split(".");
        const productId = arrPatternUrl[arrPatternUrl.length - 1];

        const fetchProduct = () => {
            productApi.get(productId)
            .then(res => {
                const {product, success} = res;

                const prepareImages = () => {
                    const images = [product.avatar];
                    const {classification} = product;
                    if(product.images.length) {
                        images.push(...product.images);
                    }

                    if(classification) {
                        const {types} = classification.classifies.first;
                        types.forEach(type => {
                            if(type.image) {
                                images.push(type.image);
                            }
                        })
                    }

                    return images;
                }

                if(success) {

                    const productData = {
                        ...product,
                        moreImages: prepareImages()
                    }
                    setProduct(productData);
                }
            })
            .catch(err => console.log({err}))
        }

        fetchProduct();
    }, [])
   
    // hanlde event
    const onHandleOpenModalImage = index =>{
        setIndexImageActive(index);
        setVisible(true);
    }

    const onHanldeChoseVariantProduct = classification => {
        const {type, value} = classification;
        setClassification(prev => ({
            ...prev,
            [type]: value
        }));
        setAddToCartNotify("");

        if(type === "first") {
            const {types} = product.classification.classifies.first;
            const index = product.images.length + types.findIndex(type => type.label === value) + 1;
            setIndexImageActive(index);
        }
    }

    const onHandleAddToCart = (productNumber) => {
        const classifyProduct = product.classification;

        if(classifyProduct) {
            const {first, second} = classifyProduct.classifies;

            if(first && second) {
                if(!classification.first || !classification.second) {
                    setAddToCartNotify("Vui lòng chọn phân loại sản phẩm");
                    return;
                }
            }
        }

        const prepareData = {
            product: product._id,
            classification,
            amount: productNumber
        }
        // add to cart
        cartApi.add(prepareData)
        .then(res => {
            if(res.success) {
                setIsSuccess(true);
            }
        })
        .catch(err => {})
    }

    const onClosePopup = () => {
        setIsSuccess(false);
    }

    return (
        <div className = "user-page-content product-detail-page-content">
            
            <div className="container">
                <WidgetBreadcrumb items = {product ? product.categories : []}/>

                <div className="d-flex bg-white br-4 my-3">
                    <WidgetImage 
                        indexImageActive = {indexImageActive}
                        items = {product ? product.moreImages : []}
                        onHandleOpenModalImage = {onHandleOpenModalImage}
                    />

                    <div className = "flex-fill">
                        <WidgetDetail 
                            addToCartNotify = {addToCartNotify}
                            onAddToCart = {onHandleAddToCart}
                            product = {product}
                            firstClassification = {classification.first}
                            secondClassification = {classification.second}
                            choseClassifyProduct = {onHanldeChoseVariantProduct}
                        />
                    </div>

                    {visible ? (
                        <ModalImageBox >
                            <ImageBoxContent
                                ref = {ref}
                            >
                                <WidgetModalImage 
                                    indexActive = {indexImageActive}
                                    title = {product.title}
                                    images = {product ? product.moreImages : []}
                                />
                            </ImageBoxContent>
                        </ModalImageBox>
                    ) : ""}
                    
                </div>

                {/* Combo Promo */}
                <div className="bg-white mb-3">
                    <ComboPromo listComboPromo = {listComboPromo}/>
                </div>
                
                {/* Store */}
                <div className="row bg-white py-4 store">
                    <div className="col-lg-4">
                        <ThumbnailStore 
                            store = {product ? product.store : null}
                        />
                    </div>
                    <div className="col-lg-8 d-flex align-items-center">
                        <div className="vertical-line-1"></div>
                        <StatisticsStore store = {product ? product.store : null}/>
                    </div>
                </div>

            
                <div className="py-3 row ">
                    <div className = "mr-3" style = {{flex: 1}}>
                        {product && <WidgetDescription
                            categories = {product.categories}
                            description = {product.description}
                            attributes = {product.optionalAttributes}
                        />
}
                        
                        <div className="my-3">
                            <WidgetComment
                                commentStatistics = {
                                    <WidgetCommentStatistics 
                                        average = {comments.average}
                                        statistics = {comments.statistics}
                                        filter = {comments.filter}
                                    />
                                }
                            />
                        </div>
                        
                        {product && <div className="mb-3">
                            <WidgetListProduct 
                                title="Các sản phẩm khác của Shop"
                                url = "/from-same-shop" 
                                listProduct={product.listProductOfStore}
                            />
                        </div>}

                        {product && <div className="mb-3">
                            <WidgetListProduct 
                                title="Sản phẩm tương tự"
                                url = "/similar-products" 
                                listProduct={product.listProductOfStore}
                            />
                        </div>}

                        {product && <div className="mb-3">
                            <WidgetListProduct 
                                title="Có thể bạn thích"
                                url = "/you-may-also-like" 
                                listProduct={product.listProductOfStore}
                            />
                        </div>}
                        
                    </div>

                    <div style = {{width: '230px'}}>
                        <div className="br-2 bg-white py-3 px-3 mb-3">
                            <WidgetListDiscount items = {listDiscount}/>
                        </div>

                        <div className="br-2 bg-white py-3">
                            <WidgetListTopProduct items = {listTopProduct}/>
                        </div>
                    </div>
                </div>
            </div>

            {isSuccess && <SuccessPopup onClosePopup = {onClosePopup}/>}

        </div>
    );
}

export default ProductDetail;