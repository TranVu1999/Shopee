import React, {useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const TranslateAnimation = keyframes`
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(50px);
    }
`;

const WidgetContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,.3);
    z-index: 1000;
`;

const WidgetContent = styled.div`
    position: relative;
    width: 500px;
    margin: 0 auto;
    padding: 2rem 0;

    background-color: #fff;
    border-radius: .25rem;
    overflow: hidden;
    animation: ${TranslateAnimation} .5s ease forwards;  
    
`;

const Title = styled.div`
    text-align:center;

    span {
        font-size: 6rem;
        color: #F9BC82;
    }

    h2{
        margin-top: 2rem;
        font-weight: 700;
    }
`;

const Buttons = styled.div`
    button {
        display: inline-block;
        margin: 0 .5rem;
        padding: .625rem 1.5rem;
        font-weight: 600;
        
        background-color: #C1C1C1;
        color: #fff;
        border-radius: .25rem;
    }

    button:nth-child(2) {
        background-color: #ee4d2d;
    }
`;


ConfirmPopup.propTypes = {
    onCancelPopup: PropTypes.func.isRequired,
    onConfirmPopup: PropTypes.func.isRequired,
}

function ConfirmPopup({onCancelPopup, onConfirmPopup}) {

    useEffect(() => {
        const bodyElm = document.querySelector("body")
        
        bodyElm.style.overflow = "hidden";
        return () => {
            bodyElm.style.overflowY = "scroll";
        }
        
    }, []);

    // handle event
    const handleCancelPopup = () => {
        if(!onCancelPopup) return;
        onCancelPopup();
    }
    const handleConfirmPopup = () => {
        if(!onConfirmPopup) return;
        onConfirmPopup();
    }

    return (
        <WidgetContainer>
            <WidgetContent className="text-center">
                <Title>
                    <span class="icon icon-notification"></span>
                    <h2>Are you sure?</h2>
                    <p>You will not be able to recover this imaginary file!</p>
                </Title>

                <Buttons>
                    <button onClick = {onCancelPopup}>Cancel </button>
                    <button onClick = {onConfirmPopup}>Yes, delete it! </button>
                </Buttons>
                
            </WidgetContent>
        </WidgetContainer>
    );
}

export default ConfirmPopup;