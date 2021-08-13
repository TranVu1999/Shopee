import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';

const WidgetContent = styled.div`
    margin-bottom: 1rem;
`;

const WidgetSpan = styled.div`
    font-size: .875rem;
    font-weight: 600;
    color: #999;
    cursor: pointer;

    img{
        height: 1rem;
        width: 1rem;
        margin-right: .5rem;
    }

    label{
        flex: 1;
        max-width: 8.75rem;
        cursor: pointer;
    }

    span{
        font-size: 1.5rem;
    }
`;

const SubMenu = styled.ul`
    padding: .5rem 0 0 1.5rem;

    max-height: 0;
    overflow: hidden;
    transition: all .3s;

    &.open{
        max-height: 10rem;
    }
`;

const SubMenuItem = styled.li`
    font-size: 13px;
    color: #333;
    margin-bottom: .375rem;

    a.active{
        color: #ee4d2d;
        font-weight: 600;
    }
`;

SidebarItem.propTypes = {
    icon: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    subMenu: PropTypes.array,
};

SidebarItem.defaultProps = {
    subMenu: []
}

function SidebarItem({icon, span, subMenu}) {
    // Data
    const [isShowSubMenu, setIsShowSubMenu] = React.useState(false);

    // Render sub-menu
    const renderSubMenu = () =>{
        return subMenu.map(item =>{
            return (
                <SubMenuItem key={item.title}>
                    <NavLink 
                        to={item.url}
                        activeClassName="active"
                    >{item.title}</NavLink>
                </SubMenuItem>
            );
        });
    }

    return (
        <WidgetContent>
            <WidgetSpan 
                className="d-flex align-items-center justify-content-between"
                onClick = {() => setIsShowSubMenu(!isShowSubMenu)}
            >
                <img data-v-5fe982fb="" src={icon}/>
                <label className="m-0">{span}</label>
                {subMenu.length > 0 && <span className="arrow_carrot-down"></span>}
            </WidgetSpan>

            {subMenu.length > 0 && <SubMenu className={classnames({open: isShowSubMenu})}>{renderSubMenu()}</SubMenu> }
        </WidgetContent>
    );
}

export default SidebarItem;