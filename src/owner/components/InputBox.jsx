import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    padding: .25rem .875rem;
    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    input{
        width: 100%;
    }
`;

InputBox.propTypes = {
    placeholder: PropTypes.string,
};

InputBox.defaultProps = {
    placeholder: "Nhập vào"
};

function InputBox({placeholder}) {
    return (
        <WidgetContent className="d-inline-block">
            <input type="text" placeholder = {placeholder}/>
        </WidgetContent>
    );
}

export default InputBox;