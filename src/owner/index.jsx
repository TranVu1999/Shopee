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
import DataCenter from './containers/DataCenter';

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

            {/* <WidgetBodyManagement> */}
                {/* <Content> */}
                    {/* <TransportManagement/> */}
                    {/* <SetupTransport/> */}
                    {/* <OrderManagement/> */}
                    {/* <ProductManagement/> */}
                {/* </Content> */}
                
            {/* </WidgetBodyManagement> */}

            <DataCenter/>
            
        </div>
    );
}

export default OwnerRoll;