import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.div`
    margin-right: 8px;
    height: 16px;
    width: 16px;

    background-color: #fff;
    
    border: 1px solid #d5d5d5;
    border-radius: 2px;
`;

function WidgetCheckBox(props) {
    return (
        <CheckBox />
    );
}

export default WidgetCheckBox;