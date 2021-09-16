import React from 'react';
import {useController} from 'react-hook-form';
import styled from 'styled-components';

const WidgetContent = styled.div`
    padding: .5rem .875rem;
`;

function InputInventoryNumber(props) {
    // validation
    const {field, formState} = useController(props);

    return (
        <WidgetContent className="widget-input-box">
            <input 
                type="text" 
                placeholder="0"
                {...field}
            />
        </WidgetContent>
    );
}

export default React.forwardRef(InputInventoryNumber);