import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Footer from './feature/Layout/Footer';
import Header from './feature/Layout/Header';
import Login from './container/Login';

// Css
import './assets/sass/index.scss';
import './style.scss';

// Others
import routes from './container/routes';
import Layout from './container/Layout';

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