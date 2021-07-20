import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Button.propTypes = {
    span: PropTypes.string,
    isLink: PropTypes.bool,
    link: PropTypes.string,
    primary: PropTypes.bool,
}

Button.defaultProps = {
    span: "Read More",
    isLink: false,
    link: "#",
    primary: false
}

const CoffeeButton = styled.button`
    display: inline-block;
    padding: 18px 40px;

    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;

    color: #fff;
    background-color: ${props=>props.primary ? "#312a26" : "#c7a17a"};

    letter-spacing: 2.5px;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: ${props=>props.primary ? "#c7a17a" : "#312a26"};
    }

`

function Button(props) {
    return (
        <CoffeeButton 
            as = {props.isLink ? "a" : "button"}
            href = {props.link}
            primary = {props.primary}

        >{props.span}</CoffeeButton>
    );
}

export default Button;