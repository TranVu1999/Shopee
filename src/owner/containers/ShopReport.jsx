import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TitleContent from './../components/TitleContent';
import TabBox from './../components/TabBox';
import DataTable from '../features/Shop/DataTable';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

ShopReport.propTypes = {
    
};

function ShopReport(props) {
    // Data
    const [listTab, setListTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Xuất đơn hàng",
            "Phiếu gửi hàng",
            "Báo cáo số dư",
            "Báo cáo thu nhập",
            "Báo cáo Marketing",
            "Báo cáo phân tích bán hàng"
        ]
    });

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive !== listTab.indexActive){
            setListTab({...listTab, indexActive});
        }
    }

    return (
        <section>
            <TitleContent 
                title="Báo Cáo Của Tôi"
                subTitle="
                Xem và tải các báo cáo trong vòng 6 tháng qua"
            />

            <WidgetContent>
                <TabBox 
                    indexActive={listTab.indexActive}
                    listTab={listTab.listTab}
                    handleChoseTab={handleChoseTab}
                />

                <div className="mb-4"></div>
                <DataTable/>
            </WidgetContent>
            
        </section>
    );
}

export default ShopReport;