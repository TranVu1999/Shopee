import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetCheckBox = styled.div`
    display: inline-block;
    margin-right: 1.5rem;
    height: 1.125rem;
    width: 1.125rem;
    border: 1px solid #d5d5d5;
    border-radius: 2px;

    cursor: pointer;

    &.active{
        position: relative;
        background-color: #ee4d2d;
        border-color: #ee4d2d;

        &:before{
            content: '';
            position: absolute;
            top: 15%;
            left: 55%;

            height: 7px;
            width: 11px;

            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform-origin: center;
            transform: rotate(-45deg) translate(-50%, -50%);
            
        }
    }
`;

CheckBox.propsType = {
    isChecked: PropTypes.bool,
    onChose: PropTypes.func.isRequired,
    identification: PropTypes.object.isRequired,
}

CheckBox.defaultProps = {
    isChecked: false,
}



function CheckBox({isChecked, onChose, identification}) {

    // handle event
    const onHandleChecked = () => {
        onChose(identification)
    }

    return (
        <WidgetCheckBox 
            className={isChecked ? "active" : ""}
            onClick = {onHandleChecked}
        />
    );
}

export default CheckBox;