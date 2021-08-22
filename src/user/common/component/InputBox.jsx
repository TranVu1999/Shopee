import React from 'react';
import PropTypes from 'prop-types';

InputBox.propTypes = {
    placeholder: PropTypes.string,
};

InputBox.defaultProps = {
    placeholder: "Nhập vào"
}

function InputBox({placeholder}) {
    return (
        <div className="widget-input-box">
            <input type="text" placeholder={placeholder}/>
        </div>
    );
}

export default InputBox;