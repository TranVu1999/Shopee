import React from 'react';
import {useController} from 'react-hook-form';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../theme';

const WidgetContent = styled.div`
    &>div{ 
        span{
            padding-left: .75rem;
            border-left: 1px solid ${BorderColor.mainColor};
        }
    }
    
`;

function InputLimitBox(props, ref) {
    const {field, fieldState} = useController(props);

    return (
        <WidgetContent 
            className = {fieldState.error ? "w-100 error" : "w-100"} 
        >
            <div className="input-box d-flex">
                <input 
                    type = "text" 
                    {...field}
                />
                <span>{field.value ? field.value.length : "0"}/{120}</span>
            </div>
            <p className="notify">{fieldState.error && fieldState.error.message}</p>
        </WidgetContent>
    );
}


export default  React.forwardRef(InputLimitBox);