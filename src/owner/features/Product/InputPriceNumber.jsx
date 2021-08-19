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
    
};

function InputPriceNumber(props) {
    return (
        <WidgetContent className="d-flex align-items-center widget-input-box">
            <span>₫</span>
            <input type="text" placeholder="Nhập vào"/>
        </WidgetContent>
    );
}

export default InputPriceNumber;