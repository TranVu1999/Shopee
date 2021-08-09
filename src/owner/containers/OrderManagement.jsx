import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TabBox from '../components/TabBox';
import Filter from '../features/Order/Filter';

const WidgetContent = styled.div`
`;

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
        <WidgetContent>
            <TabBox 
                listTab={tab.listTab} 
                indexActive={tab.indexActive}
                handleChoseTab = {handleChoseTab}
            />
            <Filter/>
            {/* <ListOrder/> */}
        </WidgetContent>
    );
}

export default OrderManagement;