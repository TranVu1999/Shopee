import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Components
import TabBox from '../components/TabBox';
import FrameTime from './../components/FrameTime';
import Header from '../features/DataCenter/Header';
import ButtonDownload from '../features/DataCenter/ButtonDownload';

// Theme 
import {BorderColor} from './../theme';
import StatisticsTable from '../features/DataCenter/Traffic/StatisticsTable';
import StatisticsChart from '../features/DataCenter/Traffic/StatisticsChart';

const WidgetContent = styled.div`
    margin: 4rem 0 0;

    section{
        width: 79rem;
        margin: 0 auto;
    }
`;

const WidgetTabBox = styled.div`
    margin-bottom: 1rem;
    background-color: #fff;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &>div{
        width: 79rem;
        margin: 0 auto;
    }
`;

const TitleSection = styled.h5`
    margin-bottom: .5rem;
    color: #333;
    font-size: 1.125rem;
    font-weight: 500;
`;

const TitleDescription = styled.p`
    font-size: .875rem;
    color: #666;
`;

const WidgetStatisticsTable = styled.div`
    margin-bottom: 1rem;
    padding: 1.125rem 1.5rem;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
`;

const WidgetStatisticsChart = styled(WidgetStatisticsTable)`
`;


DataCenterTraffic.propTypes = {
    
};

function DataCenterTraffic(props) {
    // Data
    const [tab, setTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tổng quan",
            "Truy cập",
            "Sản phẩm",
            "Doanh thu",
            "Marketing",
            "Chat",
            "Quân Sư Bán Hàng",
            "Góc học tập",
        ]
    });

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === tab.indexActive) return;
        setTab({...tab, indexActive});
    }

    return (
        <WidgetContent>
            <WidgetTabBox>
                <div>
                    <TabBox 
                        listTab={tab.listTab} 
                        indexActive={tab.indexActive}
                        handleChoseTab = {handleChoseTab}
                    />
                </div>
            </WidgetTabBox>

            <section>
                <Header>
                    <div>
                        <span className="mr-2">Khung Thời Gian</span>
                        <FrameTime/>
                    </div>

                    <ButtonDownload/>
                </Header>

                <WidgetStatisticsTable>
                    <div>
                        <TitleSection>Tổng Quan</TitleSection>
                        <TitleDescription>Phân tích lượng truy cập trang chi tiết sản phẩm và trang chủ của Shop trên ứng dụng Shopee và trên máy tính.</TitleDescription>
                    </div>

                    <StatisticsTable/>
                </WidgetStatisticsTable>

                <WidgetStatisticsChart>
                    <div className="mb-4">
                        <TitleSection>Xu hướng số liệu</TitleSection>
                    </div>

                    <StatisticsChart/>
                </WidgetStatisticsChart>

            </section>
            
        </WidgetContent>
    );
}

export default DataCenterTraffic;