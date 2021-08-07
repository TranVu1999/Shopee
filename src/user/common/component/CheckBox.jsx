import React from 'react';
import styled from 'styled-components';

const WidgetCheckBox = styled.div`
    margin-right: 8px;
    height: 1.125rem;
    width: 1.125rem;

    background-color: #fff;
    
    border: 1px solid #d5d5d5;
    border-radius: 2px;
`;

function CheckBox(props) {
    return (
        <WidgetCheckBox />
    );
}

export default CheckBox;