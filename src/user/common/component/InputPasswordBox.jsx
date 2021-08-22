import React from 'react';
import PropTypes from 'prop-types';

InputPasswordBox.propTypes = {
    placeholder: PropTypes.string,
};

InputPasswordBox.defaultProps = {
    placeholder: "Nhập vào"
}

function InputPasswordBox({placeholder}) {
    return (
        <div className="widget-input-box">
            <input type="password" placeholder={placeholder}/>
        </div>
    );
}

export default InputPasswordBox;