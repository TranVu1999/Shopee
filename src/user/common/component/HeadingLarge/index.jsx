import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

HeaderLarge.propTypes = {
    title: PropTypes.string,
    isDark: PropTypes.bool,
}

HeaderLarge.defaultProps= {
    title: "Merchandise - sale",
    isDark: false
}

const Title = styled.h1`
    position:relative;

    display: inline-block;
    margin-bottom: 50px;

    text-align: center;
    font-size: 35px;
    font-weight: 700;

    color: ${props=>props.isDark && "#fff"};

    letter-spacing: 1px;
    line-height: 1.5;

    &:after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);

        display: block;
        height: 2px;
        width: 50%;

        background-color: #c7a17a;
    }

`;

function HeaderLarge(props) {
    return (
        <div className = "text-center">
            <Title isDark = {props.isDark}>{props.title}</Title>
        </div>

    );
}

export default HeaderLarge;