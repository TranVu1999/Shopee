import React from 'react';
import {useController} from 'react-hook-form';
import styled from 'styled-components';

const WidgetContent = styled.div`
    padding: .5rem .875rem;
    border: 1px solid #d5d5d5;
    border-radius: .25rem;
`;

function InputInventoryNumber(props) {
    // validation
    const {field} = useController(props);

    return (
        <WidgetContent className="widget-input-box">
            <input 
                type="text" 
                placeholder="Nhập vào"
                {...field}
            />
        </WidgetContent>
    );
}

export default React.forwardRef(InputInventoryNumber);