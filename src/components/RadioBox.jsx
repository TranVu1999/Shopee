import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 1.125rem;
    height: 1.125rem;

    border: 1px solid #d5d5d5;
    border-radius: 50%;
    cursor: pointer;

    &.active {
        border-color: #ee4d2d;
        background-color: #ee4d2d;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: .3125rem;
        height: .3125rem;
        background-color: #fff;
        border-radius: 50%;
    }
`;

RadioBox.propTypes = {
    isCheck: PropTypes.bool,
    identification: PropTypes.object,
    onChose: PropTypes.func.isRequired,
};

RadioBox.defaultProps = {
    isCheck: false,
    identification: null
}

function RadioBox({isCheck, onChose, identification}) {

    // handle event
    const onHandleClick = () => {
        onChose(identification);
    }

    return <WidgetContainer 
        onClick = {onHandleClick}
        className = {isCheck ? "active" : ""}
    />;
}

export default RadioBox;