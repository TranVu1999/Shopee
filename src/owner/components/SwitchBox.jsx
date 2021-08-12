import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const WidgetContent = styled.div`
    position: relative;

    width: 3rem;
    height: 1.5rem;
    border-radius: .75rem;
    background-color: #b7b7b7;
    
    transition: .3s ease-in-out;
    cursor: pointer;

    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 2px;
        transform: translate(0, -50%);

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: #fff;

        transition: .3s ease-in-out;
    }

    &.active{
        background-color: #65F55F;

        &:after{
            left: calc(100% - 1.375rem );
        }
    }
`;

SwitchBox.propTypes = {
    isActive: PropTypes.bool,
    handleSwitch: PropTypes.func,
};

SwitchBox.defaultProps = {
    isActive: false,
    handleSwitch: null
} 

function SwitchBox({isActive, handleSwitch}) {

    // Handle Event
    const onHandleSwitch = () =>{
        if(!handleSwitch) return;
        handleSwitch();
    }

    return (
        <WidgetContent 
            className={classnames({active: isActive})}
            onClick = {onHandleSwitch}
        ></WidgetContent>
    );
}

export default SwitchBox;