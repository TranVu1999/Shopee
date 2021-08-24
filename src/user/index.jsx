import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Login from './container/Login';
import Layout from './container/Layout';

// Css
import './assets/sass/index.scss';
import './style.scss';


function UserRoll(props) {

    return (
        <div className = "main-wrapper">
            <Switch>
                <Route 
                    path = "/login" 
                    component = {Login}
                    exact = {true}
                />

                <Route 
                    path = "/" 
                    component = {Layout}
                />
            </Switch>
        </div>
    );
}

export default UserRoll;