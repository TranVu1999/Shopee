import React, {lazy, useEffect} from 'react';
import {
    Switch, 
    Route, 
    useRouteMatch
} from 'react-router-dom';

// Css
import './assets/sass/index.scss';
import './style.scss';

// Components
const Login = lazy(() => import("./containers/Login"));
const Onboarding = lazy(() => import("./containers/Onboarding"));
const PageWidthSidebar = lazy(() => import("./features/Layout/PageWidthSidebar"));


function OwnerRoll() {
    // data
    const {path} = useRouteMatch();    

    return (
        <div className = "main-wrapper owner-page-content">
            <Switch>
                <Route
                    path = {`${path}/login`} 
                    component = {Login}
                    exact = {true}
                />
                <Route
                    path = {`${path}/onboarding`} 
                    component = {Onboarding}
                    exact = {true}
                />
                <Route
                    path = "/ban-hang"
                    component = {PageWidthSidebar}
                />
            </Switch>
        </div>
    );
}

export default OwnerRoll;