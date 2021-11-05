import React from 'react';
import PropTypes from 'prop-types';

InputBox.propTypes = {
    placeholder: PropTypes.string,
    large: PropTypes.bool,

    verify: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
    placeholder: "Nhập vào",
    large: false
};

function InputBox({placeholder, large, value, verify, onHandleChange}) {

    const handleChange = event =>{
        if(!onHandleChange) return;

        onHandleChange({...verify, value: event.target.value});
    }

    return (
        <div
            className="d-inline-block w-100 widget-input-box" 
            style = {{padding: large ? ".5rem .875rem" : ".25rem .875rem"}}
        >
            <input 
                type="text" 
                placeholder = {placeholder} 
                value= {value}
                onChange = {handleChange}
            />
        </div>
    );
}

export default InputBox;