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

    textarea{
        width: 100%;
        resize: none;
    }
`

TextareaLimitBox.propTypes = {
    placeholder: PropTypes.string,
    limit: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    large: PropTypes.bool,
    verify: PropTypes.object.isRequired,

    handleChange: PropTypes.func.isRequired,
};

TextareaLimitBox.defaultProps = {
    placeholder: "Nhập vào",
    large: false
};

function TextareaLimitBox({
    placeholder, 
    limit, 
    value, 
    large,
    verify,
    handleChange
}) {

    // handle event
    const onHandleChange = event =>{
        if(!handleChange) return;

        handleChange({
            ...verify,
            value: event.target.value
        });
    }

    return (
        <div>
            <WidgetContent>
                <textarea 
                    placeholder={placeholder} 
                    value={value}
                    rows = {large ? "8" : "5"}
                    onChange = {onHandleChange}
                />
            </WidgetContent>
            <div className="text-right"><span>{value.length}/{limit}</span></div>
        </div>
        
    );
}

export default TextareaLimitBox;