import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const WidgetContent = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    span {
        display: inline-block;
        font-size: 3rem;
        color: #ee4d2d;
        animation: ${RotateAnimation} 1.5s infinite ;
    }
    
`;

function ProcessingEffect(props) {
    return (
        <WidgetContent>
            <span class="icon icon-spinner10"></span>
        </WidgetContent>

    );
}

export default ProcessingEffect;