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

const RotateCircle = keyframes`
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
`;

const IconLineTip = keyframes`
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }
    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }
    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
`;

const IconLineLong = keyframes`
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }
    100% {
        width: 47px;
        right: 8px;
        top: 38px;
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

    border-radius: .25rem;
    overflow: hidden;
    animation: ${TranslateAnimation} .5s ease forwards;   
    
    .title {
        padding: 2rem 0;
        background-color: #47C9A2;
    }
`;

const SuccessCheckmark = styled.div`
    width: 80px;
    margin: 0 auto;
    
    .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #fff;
        
        &::before {
            top: 3px;
            left: -2px;
            width: 30px;
            transform-origin: 100% 50%;
            border-radius: 100px 0 0 100px;
        }
        
        &::after {
            top: 0;
            left: 30px;
            width: 60px;
            transform-origin: 0 50%;
            border-radius: 0 100px 100px 0;
            animation: ${RotateCircle} 4.25s ease-in;
        }
        
        &::before, &::after {
            content: '';
            height: 100px;
            position: absolute;
            background: transparent;
            transform: rotate(-45deg);
        }
        
        .icon-line {
            height: 5px;
            background-color: #fff;
            display: block;
            border-radius: 2px;
            position: absolute;
            z-index: 10;
            
            &.line-tip {
                top: 46px;
                left: 14px;
                width: 25px;
                transform: rotate(45deg);
                animation: ${IconLineTip} 0.75s;
            }
            
            &.line-long {
                top: 38px;
                right: 8px;
                width: 47px;
                transform: rotate(-45deg);
                animation: ${IconLineLong} 0.75s;
            }
        }
        
        .icon-circle {
            top: -4px;
            left: -4px;
            z-index: 10;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            box-sizing: content-box;
            border: 4px solid #fff;
        }
        
        .icon-fix {
            top: 8px;
            width: 5px;
            left: 26px;
            z-index: 1;
            height: 85px;
            position: absolute;
            transform: rotate(-45deg);
            background-color: transparent;
        }
    }
`;

const SuccessContent = styled.div`
    padding: 2rem 0;
    background-color: #fff;

    h4 {
        font-size: 2.25rem;
        color: #434e65;
    }

    button {
        display: inline-block;
        padding: .375rem 1.5rem;

        font-size: .875rem;
        background-color: #eeb711;
        color: #fff;
        border-radius: 25px;

        i {
            margin-left: .125rem;
            transition: all .3s ease;
        }

        &:hover {
            background-color: #eda645;

            i {
            
                transform: translateX(8px);
            }
        } 
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;

    button {
        font-size: 1.125rem;
        opacity: .5;
        color: #fff;

        &:hover {
            opacity: 1;
        }
    }
`;

SuccessPopup.propTypes = {
    onClosePopup: PropTypes.func.isRequired,
}

function SuccessPopup({onClosePopup}) {

    useEffect(() => {
        const bodyElm = document.querySelector("body")
        
        bodyElm.style.overflow = "hidden";
        return () => {
            bodyElm.style.overflowY = "scroll";
        }
        
    }, []);

    // handle event
    const handleClick = () => {
        if(!onClosePopup) return;
        onClosePopup();
    }

    return (
        <WidgetContainer>
            <WidgetContent className="text-center">
                <div className="title">
                    <SuccessCheckmark>
                        <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                        </div>
                    </SuccessCheckmark>
                </div>

                <SuccessContent>
                    <h4>Done!</h4>
                    <p>Your account has been created successfully.</p>

                    <button onClick = {handleClick}>
                        Start Exploring <i class="fas fa-arrow-right"></i>
                    </button>
                </SuccessContent>

                <CloseButton>
                    <button onClick = {handleClick}>
                        <i class="fas fa-times"></i>
                    </button>
                </CloseButton>
                
            </WidgetContent>
        </WidgetContainer>
    );
}

export default SuccessPopup;