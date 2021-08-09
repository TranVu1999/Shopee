import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TabBox from '../components/TabBox';
import Filter from '../features/Product/Filter';

const WidgetContent = styled.div``;

ProductManagement.propTypes = {
    
};

function ProductManagement(props) {
    // Data
    const [tab, setTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tất cả",
            "Đang hoạt động",
            "Hết hàng",
            "Vi phạm",
            "Đã ẩn",
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
        </WidgetContent>
    );
}

export default ProductManagement;