import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`

`;

const NavItem = styled.button`
    margin: 0 .5rem;
    padding: .25rem .75rem;

    font-size: 1.25rem;
    color: rgba(0,0,0,.4);
    border-radius: 2px;

    &.active{
        background-color: rgb(238, 77, 45);
        color: #fff;
    }

    span{
        font-size: 1.5rem;
    }
`;

const NavItemControl = styled(NavItem)`
    margin: 0;
    padding: .25rem .5rem;
`;

const NavItemDisable = styled(NavItem)`
    cursor: not-allowed!important;
`;

NavigationBar.propTypes = {
    indexActive: PropTypes.number.isRequired,
    maximum: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,

    handleChosePage: PropTypes.func.isRequired,
};

function NavigationBar({
    indexActive, 
    start, 
    end, 
    maximum,

    handleChosePage
}) {

    // handle event
    const choseNavIndex = data =>{
        if(handleChosePage){
            handleChosePage(data);
        }
    }

    // render
    const renderNavigation = () =>{
        let elm = [];
        for(let i = start; i < end; i++){
            elm.push(
                <NavItem    
                    className = {indexActive === i && "active"}
                    onClick = {() => choseNavIndex({
                        type: "chose-index",
                        value: i
                    })}
                >{i + 1}</NavItem>
            );
        }

        if(maximum > 6){
            elm.push(<NavItemDisable>...</NavItemDisable>); 
        }

        return elm;
    }

    return (
        <WidgetContent className="d-flex justify-content-center">
            <NavItemControl
                onClick = {() => choseNavIndex({type: "scroll-page", value: -1})}
            ><span aria-hidden="true" className="arrow_carrot-2left"></span></NavItemControl>
            <NavItemControl
                onClick = {() => choseNavIndex({type: "neighbor-page", value: -1})}
            ><span aria-hidden="true" className="arrow_carrot-left"></span></NavItemControl>
            

            {renderNavigation()}

            <NavItemControl
                onClick = {() => choseNavIndex({type: "neighbor-page", value: 1})}
            ><span aria-hidden="true" className="arrow_carrot-right"></span></NavItemControl>

            <NavItemControl
                onClick = {() => choseNavIndex({type: "scroll-page", value: 1})}
            ><span aria-hidden="true" className="arrow_carrot-2right"></span></NavItemControl>
        </WidgetContent>
    );
}

export default NavigationBar;