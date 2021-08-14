import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    width: 100%;
    padding: .25rem .875rem;

    font-size: .875rem;

    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    input{
        margin-right: .5rem;
        width: 100%;
    }
`;
InputLimitBox.propTypes = {
    value: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
};

InputLimitBox.defaultProps = {
    placeholder: "Nhập vào"
};

function InputLimitBox({placeholder, limit, value}) {

    return (
        <WidgetContent className="d-flex">
            <input 
                type = "text" 
                placeholder = {placeholder}
                value = {value}
            />
            <span>{value.length}/{limit}</span>
        </WidgetContent>
    );
}

export default InputLimitBox;