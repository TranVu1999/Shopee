import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: .5rem .875rem;

    span{
        margin-right: .75rem;
        padding-right: .5rem;
        border-right: 1px solid ${BorderColor.mainColor};
    }
`;

InputPriceNumber.propTypes = {
    verify: PropTypes.object.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    value: PropTypes.number,
};

InputPriceNumber.defaultProps = {
    value: 0,
}

function InputPriceNumber({verify, value, onHandleChange}) {

    const handleChange = event =>{
        if(!onHandleChange) return;

        onHandleChange({
            ...verify,
            value: event.target.value
        });
    }

    return (
        <WidgetContent className="d-flex align-items-center widget-input-box">
            <span>₫</span>
            <input 
                type="text" 
                placeholder="Nhập vào" 
                value = {value}
                onChange = {handleChange}
            />
        </WidgetContent>
    );
}

export default InputPriceNumber;