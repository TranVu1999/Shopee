import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

HeadingSmall.propTypes = {
    title: PropTypes.string,
}

HeadingSmall.defaultProps = {
    title: "What Happens Here"
}

const Title = styled.p`
    font-family: 'Merriweather', serif;
    font-size: 18px;
    font-style: italic;
    text-align: center;

    color: #c7a17a;
`

function HeadingSmall(props) {
    return (
        <Title>{props.title}</Title>
    );
}

export default HeadingSmall;