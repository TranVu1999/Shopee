import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Footer from './feature/Layout/Footer';
import Header from './feature/Layout/Header';

// Css
import './assets/sass/index.scss';

// Others
import routes from './container/routes';

function UserRoll(props) {

    return (
        <div className = "main-wrapper">
            <Header/>

            <Switch>
                {routes.map((item, index) =>{
                return <Route 
                    key = {index} 
                    path = {item.path} 
                    component = {item.component}
                    exact = {item.exact || false}
                />
                })}
            </Switch>
            
            <Footer/>
        </div>
    );
}

export default UserRoll;