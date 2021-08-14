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
    }
`

TextareaLimitBox.propTypes = {
    placeholder: PropTypes.string,
    limit: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

TextareaLimitBox.defaultProps = {
    placeholder: "Nhập vào"
};

function TextareaLimitBox({placeholder, limit, value}) {
    return (
        <div>
            <WidgetContent>
                <textarea 
                    placeholder={placeholder} 
                    value={value}
                    rows="5"
                />
            </WidgetContent>
            <div className="text-right"><span>{value.length}/{limit}</span></div>
           
        </div>
        
    );
}

export default TextareaLimitBox;