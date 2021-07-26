import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// Components
import WidgetBreadcrumb from '../../feature/Layout/WidgetBreadcrumb';
import WidgetImage from '../../feature/ProductDetail/WidgetImage';
import WidgetModalImage from '../../feature/ProductDetail/WidgetModalImage';
import WidgetThumbnailStore from '../../feature/ProductDetail/WidgetThumbnailStore';


// Hooks
import useOutsideElement from './../../hooks/outsideElement';

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

function ProductDetailPage(props) {
    // State
    const [indexImageActive, setIndexImageActive] = useState(0);
    const [storeInformation] = useState({
        title: "4U SHOP",
        onlineTime: "70",
        avatar: "https://cf.shopee.vn/file/efb9073e1dfbabf429278b9e2e592363_tn",
        bgImage: "https://cf.shopee.vn/file/30e84c8c66e5d13ea95d729c443ee214_tn",
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

    const onHandleOpenModalImage = index =>{
        setIndexImageActive(index);
        setVisible(true);
    }

    return (
        <div className = "mt-80 mb-5 product-detail-page-content">
            <div className="container">
                <WidgetBreadcrumb items = {breadcrumb}/>

                <div className="row bg-white br-4 mb-3">
                    <WidgetImage 
                        items = {images}
                        onHandleOpenModalImage = {onHandleOpenModalImage}
                    />

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

                <div className="row bg-white py-4">
                    <div className="col-lg-4">
                        <WidgetThumbnailStore info = {storeInformation}/>
                    </div>
                    <div className="col-lg-8">
                        <div className="vertical-line-1"></div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default ProductDetailPage;