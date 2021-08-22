import React from 'react';
import PropTypes from 'prop-types';

InputBox.propTypes = {
    placeholder: PropTypes.string,

    value: PropTypes.string.isRequired,
    verify: PropTypes.object.isRequired,
    onHandleChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
    placeholder: "Nhập vào"
}

function InputBox({
    placeholder, 
    verify, 
    value,
    onHandleChange
}) {

    // handle event
    const handleChange = event =>{
        if(!onHandleChange) return;

        onHandleChange({
            ...verify,
            value: event.target.value
        });
    }

    return (
        <div className="widget-input-box">
            <input 
                type = "text"
                value = {value} 
                placeholder = {placeholder}
                onChange = {handleChange}
            />
        </div>
    );
}

export default InputBox;