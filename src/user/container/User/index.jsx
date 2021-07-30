import React from 'react';
import PropTypes from 'prop-types';
import WidgetSidebar from '../../feature/User/WidgetSidebar';
import WidgetUserPortfolio from '../../feature/User/WidgetUserPortfolio';

UserPage.propTypes = {
    
};

function UserPage(props) {
    return (
        <div className = "mt-80 user-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <WidgetSidebar/>
                    </div>
                    <div className="pl-5 col-lg-10">
                        <WidgetUserPortfolio/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;