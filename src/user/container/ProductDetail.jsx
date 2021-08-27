import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

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
import WidgetDetail from '../feature/ProductDetail/WidgetDetail';
import ComboPromo from '../feature/ProductDetail/ComboPromo';


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
    // State
    const [breadcrumb] = useState([
        {
            title: "Shopee",
            url: "#/"
        },
        {
            title: "Thoi Trang Nu",
            url: "#/"
        },
        {
            title: "Dam",
            url: "#/"
        },
        {
            title: "Váy babydoll hoa nhí, váy hoa nhí dáng rộng - ullzang dáng dài cổ tim voan tơ Vintage Sota Shop",
            url: "#/"
        }
    ]);
    const [images] = useState([
        "https://cf.shopee.vn/file/a23c5f36c458f623cfe57cddc209162f_tn",
        "https://cf.shopee.vn/file/63a9eb9ed833ad94db2194b7242c1065_tn",
        "https://cf.shopee.vn/file/1ee6718cabd94a720e8aaa8484f384c4_tn",
        "https://cf.shopee.vn/file/28428ae673c8c452e7b33b82902d2526_tn",
        "https://cf.shopee.vn/file/16399f4dd2b077946a3b859a3d593a91_tn",
        "https://cf.shopee.vn/file/6331fd1e46ba2df1cdd46dbad064115c_tn"
    ]);
    const [indexImageActive, setIndexImageActive] = useState(0);
    const [storeInformation] = useState({
        title: "4U SHOP",
        onlineTime: "70",
        avatar: "https://cf.shopee.vn/file/efb9073e1dfbabf429278b9e2e592363_tn",
        bgImage: "https://cf.shopee.vn/file/30e84c8c66e5d13ea95d729c443ee214_tn",
        statistics: [
            {
                label: "Đánh giá",
                number: "6,9k"
            },
            {
                label: "Sản phẩm",
                number: "330"
            },
            {
                label: "tỉ lệ phản hồi",
                number: "100%"
            },
            {
                label: "thời gian phản hồi",
                number: "trong vài giờ"
            },
            {
                label: "tham gia",
                number: "12 tháng trước"
            },
            {
                label: "Người theo dõi",
                number: "43k"
            }
        ]
    });
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
            image: "https://cf.shopee.vn/file/45d51e73b8c33ec92f1b5d0eaad457ac_tn",
            title: "Đầm nữ thiết kế trắng dễ thương voan nhún ngực mặc dự tiệc dạo phố xinh như công chúa",
            price: 159.00, 
            discount: 50
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/c7aeba92603b28ec23bfe9f6fc6228a8_tn",
            title: "Chân váy dài ulzzang xòe vạt lệch phối đen trắng phong cách Hàn Quốc",
            price: 75.00
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/eda499019cd077aa44a5fba6c5a9f300_tn",
            title: "[SIÊU XINH] Áo babydoll cánh tiên tay phồng 2 màu be, trắng (ảnh thật cuối)",
            price: 159.00
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/27f44d0cd7f995002eb4c30b87da3b34_tn",
            title: "Áo Sơ Mi Nữ Dài Tay, Áo Kiểu Chiffon Dáng Rộng Hàn Quốc Dễ Phối Đồ Cho Nữ",
            price: 135.00
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/63ebf3719cf3f4b3978d0505ad4073c7_tn",
            title: "[SẴN] Váy trắng trễ vai tay bồng cúc bọc tiểu thư xinh xắn",
            price: 159.00
        }
    ]);
    const [productDescription] = useState({
        breadcrumb: [
            {
                title: "Shopee",
                url: "#/"
            },
            {
                title: "Thời Trang Nữ",
                url: "#/"
            },
            {
                title: "Đầm",
                url: "#/"
            }
        ],

        moreDetail: [
            {
                label: "Chiều dài tay áo",
                content: "Dài tay"
            },
            {
                label: "Mẫu",
                content: "Hoa"
            },
            {
                label: "Kiểu váy",
                content: "váy xòe"
            },
            {
                label: "Kho hàng",
                content: "41"
            },
            {
                label: "Gửi từ",
                content: "Quận Nam Từ Liêm, Hà Nội"
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, error. Eius quae dolorum eaque. Quo doloremque dolorem magni error laudantium quaerat quos alias vel suscipit? Minus adipisci consequatur voluptatibus voluptatem deserunt, aut esse blanditiis, libero quis illum ipsa a facere magni ad impedit explicabo, atque sapiente earum harum praesentium laborum eum dolore. Rerum nam cupiditate est quasi, ad impedit. Eum magni tenetur debitis temporibus ducimus eligendi quia minus eos amet, molestiae vitae unde enim ipsa ipsam? Consequuntur sit rerum quod perferendis voluptate. Accusamus, voluptatibus officia deleniti consequuntur reprehenderit maiores voluptas illo iste, saepe dicta suscipit animi laborum iusto qui molestiae."
    });
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
   

    const onHandleOpenModalImage = index =>{
        setIndexImageActive(index);
        setVisible(true);
    }

    return (
        <div className = "user-page-content product-detail-page-content">
            <div className="container">
                <WidgetBreadcrumb items = {breadcrumb}/>

                <div className="d-flex bg-white br-4 mb-3">
                    <WidgetImage 
                        items = {images}
                        onHandleOpenModalImage = {onHandleOpenModalImage}
                    />

                    <div className = "flex-fill">
                        <WidgetDetail/>
                    </div>

                    {visible ? (
                        <ModalImageBox >
                            <ImageBoxContent
                                ref = {ref}
                            >
                                <WidgetModalImage 
                                    indexActive = {indexImageActive}
                                    items = {images}
                                />
                            </ImageBoxContent>
                        </ModalImageBox>
                    ) : ""}
                    
                </div>

                {/* Combo Promo */}
                <div className="bg-white mb-3">
                    <ComboPromo/>
                </div>
                
                {/* Store */}
                <div className="row bg-white py-4">
                    <div className="col-lg-4">
                        <ThumbnailStore info = {storeInformation}/>
                    </div>
                    <div className="col-lg-8 d-flex align-items-center">
                        <div className="vertical-line-1"></div>
                        <StatisticsStore items = {storeInformation.statistics}/>
                    </div>
                </div>

            
                <div className="py-3 row ">
                    <div className = "mr-3" style = {{flex: 1}}>
                        <WidgetDescription item = {productDescription}/>

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
                    </div>

                    <div style = {{width: '16.875em'}}>
                        <div className="br-2 bg-white py-3 px-3 mb-3">
                            <WidgetListDiscount items = {listDiscount}/>
                        </div>

                        <div className="br-2 bg-white py-3">
                            <WidgetListTopProduct items = {listTopProduct}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;