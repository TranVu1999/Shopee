import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

// Css
import './assets/sass/index.scss';
import './style.scss';

// Components
import Header from './features/Layout/Header';
import PageWidthSidebar from './features/Layout/PageWidthSidebar';

// Others
import routes from './containers/routes';


function OwnerRoll(props) {

    return (
        <div className = "main-wrapper">
            <Header/>

            <Switch>
                <Route
                    path = "/portal" 
                    component = {PageWidthSidebar}
                    exact = {false}
                />
            </Switch>
            

            {/* <DataCenterTraffic/> */}
            {/* <DataCenterDashboard/> */}
            {/* <DataCenterLearn/> */}
        </div>
    );
}

export default OwnerRoll;