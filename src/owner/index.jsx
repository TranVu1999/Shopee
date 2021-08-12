import React from 'react';
import styled from 'styled-components';

// Css
import './assets/sass/index.scss';

// Components
import Sidebar from './features/Layout/Sidebar';
import Header from './features/Layout/Header';
import SetupTransport from './containers/SetupTransport';
import OrderManagement from './containers/OrderManagement';
import ProductManagement from './containers/ProductManagement';
import DataCenterDashboard from './containers/DataCenterDashboard';
import DataCenterLearn from './containers/DataCenterLearn';
import DataCenterTraffic from './containers/DataCenterTraffic';
import SettingAccount from './containers/SettingAccount';
import SettingShop from './containers/SettingShop';


const WidgetBodyManagement = styled.div`
    margin: 4rem 0 0 15rem;
`;

const Content = styled.div`
    width: 1100px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 2px;
`;


function OwnerRoll(props) {

    return (
        <div className = "main-wrapper">
            <Header/>
            {/* <Sidebar/> */}

            <WidgetBodyManagement>
                <Content>
                    {/* <TransportManagement/> */}
                    {/* <SetupTransport/> */}
                    {/* <OrderManagement/> */}
                    {/* <ProductManagement/> */}
                    {/* <SettingAccount/> */}
                    <SettingShop/>
                </Content>
                
            </WidgetBodyManagement>

            {/* <DataCenterTraffic/> */}
            {/* <DataCenterDashboard/> */}
            {/* <DataCenterLearn/> */}
        </div>
    );
}

export default OwnerRoll;