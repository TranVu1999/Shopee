import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

// Components
import Footer from './../feature/Layout/Footer';
import Header from './../feature/Layout/Header';

// Others
import routes from './routes';


Layout.propTypes = {
    
};

function Layout(props) {
    console.log(props);

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

export default Layout;