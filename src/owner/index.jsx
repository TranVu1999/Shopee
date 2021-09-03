import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';

// Css
import './assets/sass/index.scss';
import './style.scss';

// Components
import PageWidthSidebar from './features/Layout/PageWidthSidebar';
import Login from './containers/Login';


function OwnerRoll() {
    // data
    const {path} = useRouteMatch();

    return (
        <div className = "main-wrapper">
            <Switch>
                <Route
                    path = {`${path}/login`} 
                    component = {Login}
                    exact = {true}
                />
                <Route
                    path = "/"
                    component = {PageWidthSidebar}
                />
            </Switch>
        </div>
    );
}

export default OwnerRoll;