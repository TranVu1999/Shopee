import React from 'react';
import PropTypes from 'prop-types';

// Components
import TabBox from '../components/TabBox';
import Filter from '../features/Order/Filter';
import ListOrder from '../features/Order/ListOrder';

OrderManagement.propTypes = {
    
};

function OrderManagement(props) {
    // Data
    const [tab, setTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tất cả",
            "Chờ xác nhận",
            "Chờ lấy hàng",
            "Đang giao",
            "Đã giao",
            "Đơn huỷ",
            "Trả hàng/Hoàn tiền",
        ]
    });

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === tab.indexActive) return;
        setTab({...tab, indexActive});
    }

    return (
        <div>
            <TabBox 
                listTab={tab.listTab} 
                indexActive={tab.indexActive}
                handleChoseTab = {handleChoseTab}
            />
            <Filter/>

            <ListOrder/>
        </div>
    );
}

export default OrderManagement;