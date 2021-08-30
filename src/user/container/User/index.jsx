import React from "react";
import PropTypes from "prop-types";
import {
    Switch, 
    Route, 
    useRouteMatch
} from 'react-router-dom';

// Components
import WidgetSidebar from "../../feature/User/WidgetSidebar";

import routes from './routes';

UserPage.propTypes = {};

function UserPage(props) {
    // Data
    let {path, url} = useRouteMatch();

    return (
        <div className="mt-80 mb-40 user-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <WidgetSidebar />
                    </div>
                    <div className="pl-5 col-lg-10">
                        <Switch>
                        {routes.map((item, index) =>{
                            console.log(`${path}/${item.path}`)
                            return <Route 
                                key = {index} 
                                path = {`${path}/${item.path}`} 
                                component = {item.component}
                                exact = {item.exact || false}
                            />
                        })}
                        </Switch>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
