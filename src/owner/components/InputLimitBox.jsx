import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    &>div{ 
        span{
            padding-left: .75rem;
            border-left: 1px solid ${BorderColor.mainColor};
        }
    }
    
`;
InputLimitBox.propTypes = {
    verify: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    large: PropTypes.bool,
    error: PropTypes.string.isRequired,

    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
};

InputLimitBox.defaultProps = {
    placeholder: "Nhập vào",
    large: false,
    handleBlur: null
};

function InputLimitBox({
    placeholder, 
    limit, 
    value, 
    large,
    verify,
    handleChange,
    handleBlur,
    error
}) {

    // handle event
    const onHandleChange = event =>{
        if(!handleChange) return;

        handleChange({
            ...verify,
            value: event.target.value
        });
    } 
    
    const onHandleBlur = () =>{
        if(!handleBlur) return;
        handleBlur({...verify})
    }

    return (
        <WidgetContent 
            className = {error ? "input-box ping-pong" : "input-box"} 
        >
            <div className="d-flex">
                <input 
                    type = "text" 
                    placeholder = {placeholder}
                    value = {value}
                    onChange = {onHandleChange}
                    onBlur = {onHandleBlur}
                />
                <span>{value.length}/{limit}</span>
            </div>
            <p className="notify">{error}</p>
        </WidgetContent>
    );
}

export default InputLimitBox;