import React from 'react';
import PropTypes from 'prop-types';

// Components
import styled from 'styled-components';

const SidebarWidgetTitleContent = styled.div`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #d5d5d5;

    h5{
        font-size: 20px;
    }
`

SidebarWidgetTitle.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
};

SidebarWidgetTitle.defaultProps = {
    title: "Tat Ca Danh Muc",
    icon: "icon_hourglass"
}

function SidebarWidgetTitle(props) {

    const {title, icon} = props;

    return (
        <SidebarWidgetTitleContent>
            <h5 className = "d-flex align-items-center">
                <span aria-hidden="true" className = {`mr-2 ${icon}`} ></span>
                {title}
            </h5>
        </SidebarWidgetTitleContent>
    );
}

export default SidebarWidgetTitle;