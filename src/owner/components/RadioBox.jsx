import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    position: relative;
    margin-right: .5rem;
    width: 1.125rem;
    height: 1.125rem; 

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 50%;

    &.checked{
        background-color: #ee4d2d;
        border-color: #ee4d2d;
    }

    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: .5rem;
        height: .5rem;
        border-radius: 50%;

        background-color: #fff;
    }
`;

RadioBox.propTypes = {
    checked: PropTypes.bool,
};

function RadioBox({checked}) {
    return (
        <WidgetContent 
            className={checked ? "d-inline-block checked" : "d-inline-block"}
        >
            
        </WidgetContent>
    );
}

export default RadioBox;