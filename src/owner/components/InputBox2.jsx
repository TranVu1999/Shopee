import React from 'react';
import styled from 'styled-components';
import {useController} from 'react-hook-form';

const WidgetContent = styled.div`
    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: .25rem;
`;

function InputBox(props, ref) {
    // validate
    const {field} = useController(props);
    

    return (
        <WidgetContent
            className="d-inline-block widget-input-box" 
            style = {{padding: true ? ".5rem .875rem" : ".25rem .875rem"}}
        >
            <input 
                type="text" 
                placeholder = "Nhập vào"
                {...field}
            />
        </WidgetContent>
    );
}

export default React.forwardRef(InputBox);