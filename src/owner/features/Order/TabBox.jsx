import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import { BorderColor } from './../../theme';

const WidgetContent = styled.div`
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    div{
        position: relative;
        padding: .375rem 1.125rem;
        margin-right: .25rem;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border: 1px solid ${BorderColor.mainColor};
        border-bottom: none;

        cursor: pointer;

        &.active{
            font-weight: 600;
            color: #fff;
            background-color: #ee4d2d;
            border-color: #ee4d2d;
        }
    }
`;

TabBox.propTypes = {
    
};

function TabBox(props) {
    // Data
    const [indexOpenTab, setIndexOpenTab] = React.useState(0);

    // Handle event
    const handleChoseTab = index =>{
        if(indexOpenTab !== index) setIndexOpenTab(index);
    }

    return (
        <WidgetContent className="d-flex">
            <div 
                className = {indexOpenTab === 0 && "active"}
                onClick = {() => {handleChoseTab(0)}}
            >Tất cả</div>

            <div 
                className = {indexOpenTab === 1 && "active"}
                onClick = {() => {handleChoseTab(1)}}
            >Chưa xử lý</div>

            <div 
                className = {indexOpenTab === 2 && "active"}
                onClick = {() => {handleChoseTab(2)}}
            >Đã xử lý</div>
        </WidgetContent>
    );
}

export default TabBox;