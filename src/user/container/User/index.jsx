import React, {useEffect, useState, lazy, Suspense} from "react";
import { Switch, Route } from 'react-router-dom';

// Components
import WidgetSidebar from "../../feature/User/WidgetSidebar";

// Apis
import accountApi from "../../../api/accountAPI";

// routes
import routes from './routes';
const WidgetUserPortfolio = lazy(() => import("../../feature/User/WidgetUserProfile"));



function UserPage(props) {
    // Data
    const {path} = props.match;
    const {pathname} = props.location;

    const [user, setUser] = useState(null);


    useEffect(() => {
        const fetchUserInfo = async function() {
            const res = await accountApi.getFullInfo();
            if(res.success) {
                setUser(res.user);
            }
        }

        switch(pathname) {
            case "/user":
            case "/user/information":
                if(!user) {
                    fetchUserInfo();
                }
                
                break;
            default: 
                break;
        }
    }, [pathname]);

    return (
        <div className="mt-80 mb-40 user-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <WidgetSidebar />
                    </div>
                    <div className="pl-5 col-lg-10">
                        <Suspense>
                            <Switch>
                                <Route exact path = {'/user'} >
                                    <WidgetUserPortfolio user = {user}/>
                                </Route>
                                <Route path = {'/user/information'} >
                                    <WidgetUserPortfolio user = {user}/>
                                </Route>

                            {/* {routes.map((item, index) =>{
                                return <Route 
                                    key = {index} 
                                    path = {`${path}/${item.path}`} 
                                    component = {item.component}
                                    exact = {item.exact || false}
                                />
                            })} */}
                            </Switch>
                        </Suspense>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
