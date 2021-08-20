import React from 'react';
import PropTypes from 'prop-types';

InputBox.propTypes = {
    placeholder: PropTypes.string,
    large: PropTypes.bool,
};

InputBox.defaultProps = {
    placeholder: "Nhập vào",
    large: false
};

function InputBox({placeholder, large}) {
    return (
        <div
            className="d-inline-block widget-input-box" 
            style = {{padding: large ? ".5rem .875rem" : ".25rem .875rem"}}
        >
            <input type="text" placeholder = {placeholder}/>
        </div>
    );
}

export default InputBox;