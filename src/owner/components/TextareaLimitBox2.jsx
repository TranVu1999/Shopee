import React from 'react';
import styled from 'styled-components';
import {useController} from 'react-hook-form';

// Theme
import {BorderColor} from '../theme';

const WidgetContent = styled.div``;

const WidgetInput = styled.div`
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

function TextareaLimitBox(props, ref) {
    // validation
    const {field, fieldState} = useController(props);

    return (
        <WidgetContent>
            <WidgetInput className="input-box">
                <textarea 
                    placeholder={props.placeholder} 
                    rows = {props.large ? "8" : "5"}
                    {...field}
                />
            </WidgetInput>
            <div className="d-flex align-items-center justify-content-between">
                <p className="notify">{fieldState.error && fieldState.error.message}</p>
                <span>{field.value ? field.value.length : "0"}/{5000}</span>
            </div>
        </WidgetContent>
        
    );
}

export default React.forwardRef(TextareaLimitBox);