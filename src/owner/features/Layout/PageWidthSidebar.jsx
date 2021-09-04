import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Switch, 
    Route, 
    useHistory,
    useRouteMatch
} from 'react-router-dom';

// Components
import Sidebar from './Sidebar';
import Header from './Header';
import ShopReport from '../../containers/ShopReport';

// Others
import routes from '../../containers/routes';

const WidgetBodyManagement = styled.div`
    margin: 4rem 0 0 15rem;
`;

const Content = styled.div`
    width: 1100px;
    margin: 0 auto;
    // background-color: #fff;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 2px;
`;


PageWidthSidebar.propTypes = {
    
};

function PageWidthSidebar(props) {
    const history = useHistory();
    const {path} = useRouteMatch();
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken){
        history.push(`/ban-hang/login`);
    }

    return (
        <>
            <Header/>
            <Sidebar/>
            <WidgetBodyManagement>
                <Content>

                    <Switch>
                        {routes.map((item, index) =>{
                            return <Route 
                                key = {index} 
                                path = {`${path}${item.path}`} 
                                component = {item.component}
                                exact = {item.exact || false}
                            />
                        })}
                    </Switch>
                </Content>
                
            </WidgetBodyManagement>
        </>
    );
}

export default PageWidthSidebar;