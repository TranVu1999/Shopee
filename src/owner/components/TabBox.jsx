import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

TabBox.propTypes = {
    listTab: PropTypes.array.isRequired,
};

function TabBox({listTab}) {

    // render
    const renderListTab = () => {
        return listTab.map((item, index) =>{
            return <NavLink to = {item.url}
                key = {item.title}
                activeClassName="active"
            >{item.title}</NavLink>
        });
    }

    return (
        <div className="d-flex owner-tab-box">
            {renderListTab()}
        </div>
    );
}

export default TabBox;