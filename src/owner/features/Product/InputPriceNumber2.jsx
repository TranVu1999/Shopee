import React from 'react';
import styled from 'styled-components';
import {useController} from 'react-hook-form';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: .5rem .875rem;
    border: 1px solid #d5d5d5;
    border-radius: .25rem;

    span{
        margin-right: .75rem;
        padding-right: .5rem;
        border-right: 1px solid ${BorderColor.mainColor};
    }
`;

function InputPriceNumber(props) {
    // validation
    const {field} = useController(props);
   

    return (
        <WidgetContent className="d-flex align-items-center widget-input-box">
            <span>₫</span>
            <input 
                type="text" 
                placeholder="Nhập vào"
                {...field}
            />
        </WidgetContent>
    );
}

export default React.forwardRef(InputPriceNumber);