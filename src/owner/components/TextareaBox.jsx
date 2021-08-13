import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    width: 100%;
    padding: .25rem .875rem;

    font-size: .875rem;

    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    textarea{
        width: 100%;
    }
`

TextareaBox.propTypes = {
    
};

function TextareaBox(props) {
    return (
        <WidgetContent>
            <textarea placeholder="Số nhà, tên đường.v.v.."/>
        </WidgetContent>
    );
}

export default TextareaBox;