import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';
import NotifyPopup from './NotifyPopup';

const WidgetContent = styled.div`
    position: relative;
    padding: .75rem .875rem;
    color: #333;

    border: 1px solid #e5e5e5;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);

    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;

    &:hover{
        box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    }

    &:after{
        content: '';
        position: absolute;
        top: -4px;
        left: 0;

        width: 100%;
        height: 8px;
        background-color: transparent;
    }

    &.active:after{
        background-color: ${props=>props.borderColorActive}
    }
`;

const Title = styled.div`
    margin: 0;
    font-size: .875rem;
`;

const Number = styled.span`
    display: block;
    margin: .5rem 0 .875rem;
    font-size: 1.5rem;
`;

const CompareNumber = styled.div`
    font-size: .75rem;

    span:first-child{
        color: #999;
    }
`

SquareStatistics.propTypes = {
    info: PropTypes.object.isRequired,
    active: PropTypes.bool,
    colorActive: PropTypes.string,
    handleActive: PropTypes.func,
};

SquareStatistics.defaultProps = {
    active: false,
    colorActive: "",
    handleActive: null
}

function SquareStatistics({
    info, 
    active, 
    colorActive, 
    handleActive
}) {

    const handleClick = () =>{
        if(!handleActive) return;

        console.log(info.index)
        handleActive(info.index);
    }

    return (
        <WidgetContent 
            className={active && "active"}
            borderColorActive = {colorActive}
            onClick = {handleClick}
        >
            <Title>{info.type} <NotifyPopup content = {info.notify}/></Title>
            <Number>{info.value}</Number>
            <CompareNumber className="d-flex justify-content-between">
                <span>{info.compareSpan}</span>
                <span>{info.compareNumber}</span>
            </CompareNumber>
        </WidgetContent>
    );
}

export default SquareStatistics;