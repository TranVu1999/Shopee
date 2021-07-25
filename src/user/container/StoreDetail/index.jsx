import React from 'react';
import PropTypes from 'prop-types';
import WidgetStoreInformation from '../../feature/StoreDetail/WidgetStoreInformation';
import { useState } from 'react';

StoreDetailPage.propTypes = {
    
};

function StoreDetailPage(props) {
    const [storeInformation] = useState({
        title: "4U SHOP",
        onlineTime: "70",
        avatar: "https://cf.shopee.vn/file/efb9073e1dfbabf429278b9e2e592363_tn",
        bgImage: "https://cf.shopee.vn/file/30e84c8c66e5d13ea95d729c443ee214_tn"
    });

    return (
        <div className = "mt-80 store-detail-page-content">
            <div className="bg-white">
                <div className="container">
                    <WidgetStoreInformation
                        info = {storeInformation}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default StoreDetailPage;