import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.div`
    font-size: 15px;
    text-transform: capitalize;
    margin-bottom: 10px;
`;

WidgetLabel.propTypes = {
    title: PropTypes.string,
};

WidgetLabel.defaultProps = {
    title: "Noi Ban"
}

function WidgetLabel(props) {

    return (
        <Label>{props.title}</Label>
    );
}

export default WidgetLabel;