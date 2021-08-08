import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    font-size: .875rem;
    color: #333;
    border-bottom: 1px solid ${BorderColor.mainColor};

    div{
        position: relative;
        padding: 1.125rem 1.5rem;
        text-align: center;
        cursor: pointer;

        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 2px;
            background-color: transparent;
        }

        &.active{
            color: #ee4d2d;
            font-weight: 600;

            &:after{
                background-color: #ee4d2d;
            }
        }
    }
`;

TabBox.propTypes = {
    listTab: PropTypes.array.isRequired,
    indexActive: PropTypes.number.isRequired,
    handleChoseTab: PropTypes.func.isRequired,
};

function TabBox({listTab, indexActive, handleChoseTab}) {

    // render
    const renderListTab = () => {
        return listTab.map((item, index) =>{
            return <div 
                className={index === indexActive && "active"}
                onClick={() => handleChoseTab(index)}
            >{item}</div>
        });
    }

    return (
        <WidgetContent className="d-flex">
            {renderListTab()}
        </WidgetContent>
    );
}

export default TabBox;