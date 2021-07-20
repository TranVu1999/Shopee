import React from 'react';
import PropTypes from 'prop-types';

// Components
import styled from 'styled-components';

const SidebarWidgetContent = styled.div`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #d5d5d5;

    h5{
        font-size: 20px;
    }
`

SidebarWidget.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
};

SidebarWidget.defaultProps = {
    title: "Tat Ca Danh Muc",
    icon: (<span aria-hidden="true" className="mr-2 icon_ul"></span>)
}

function SidebarWidget(props) {

    const {title, icon} = props;

    return (
        <SidebarWidgetContent>
            <h5 className = "d-flex align-items-center">
                 {icon}
                {title}
            </h5>
        </SidebarWidgetContent>
    );
}

export default SidebarWidget;