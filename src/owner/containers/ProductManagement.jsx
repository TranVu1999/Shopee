import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Components
import TabBoxButton from '../components/TabBoxButton';
import Filter from '../features/Product/Filter';
import Title from '../features/Product/Title';
import DataTable from '../features/Product/DataTable';

const WidgetContent = styled.div`
    padding-bottom: 2rem;
`;

ProductManagement.propTypes = {
    
};

function ProductManagement(props) {
    // Data
    const {alias} = useParams();

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

    React.useEffect(() =>{
        if(alias === "all"){
            setTab({...tab, indexActive: 0});
        }else{
            setTab({...tab, indexActive: 3});
        }
    }, [alias]);

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === tab.indexActive) return;
        setTab({...tab, indexActive});
    }

    return (
        <WidgetContent className="owner-page-content">
            <TabBoxButton 
                listTab={tab.listTab} 
                indexActive={tab.indexActive}
                handleChoseTab = {handleChoseTab}
            />

            <div className="mb-2"></div>

            <Filter/>
            <Title/>

            <div className="mb-4"></div>
            <DataTable/>

        </WidgetContent>
    );
}

export default ProductManagement;