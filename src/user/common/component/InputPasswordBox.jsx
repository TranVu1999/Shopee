import React from 'react';
import PropTypes from 'prop-types';

InputPasswordBox.propTypes = {
    placeholder: PropTypes.string,

    value: PropTypes.string.isRequired,
    verify: PropTypes.object.isRequired,
    onHandleChange: PropTypes.func.isRequired,
};

InputPasswordBox.defaultProps = {
    placeholder: "Nhập vào"
}

function InputPasswordBox({
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
                type="text" 
                placeholder={placeholder}
                value = {value}
                onChange = {handleChange}
            />
        </div>
    );
}

export default InputPasswordBox;