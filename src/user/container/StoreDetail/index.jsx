import React, { useState } from 'react';

// Components
import Tab from './../../feature/Layout/Tab';
import WidgetStoreInformation from '../../feature/StoreDetail/WidgetStoreInformation';
import WidgetSliderDiscount from '../../feature/StoreDetail/WidgetSliderDiscount';

function StoreDetailPage(props) {
    const [storeInformation] = useState({
        title: "4U SHOP",
        onlineTime: "70",
        avatar: "https://cf.shopee.vn/file/efb9073e1dfbabf429278b9e2e592363_tn",
        bgImage: "https://cf.shopee.vn/file/30e84c8c66e5d13ea95d729c443ee214_tn",
    });

    const [listTab] = useState([
        {
            title: "Dao choi",
        },
        {
            title: "Tat ca san pham",
        },
        {
            title: "Deal duoi 49K",
        },
        {
            title: "Sale off 50%",
        }
    ]);

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

        },
        {
            id: 4,
            min: "Giảm ₫30k Đơn Tối Thiểu ₫349k",
            expire: "31.07.2021"

        }
    ])

    return (
        <div className = "mt-80 store-detail-page-content">
            <div className="bg-white pb-3" style = {{borderBottom: "1px solid #d5d5d5"}}>
                <div className="container">
                    <WidgetStoreInformation
                        info = {storeInformation}
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="container">
                    <Tab
                        smallHeaderTab = {true}
                        items = {listTab} 
                        activeIndex = {0}
                    />

                    <WidgetSliderDiscount items = {listDiscount}/>
                </div>
            </div>
            
        </div>
    );
}

export default StoreDetailPage;