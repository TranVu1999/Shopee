import React from 'react';
import {useController} from 'react-hook-form';

function InputBox(props, ref) {
    // validate
    const {field} = useController(props);
    

    return (
        <div
            className="d-inline-block widget-input-box" 
            style = {{padding: true ? ".5rem .875rem" : ".25rem .875rem"}}
        >
            <input 
                type="text" 
                placeholder = "Nhập vào"
                {...field}
            />
        </div>
    );
}

export default React.forwardRef(InputBox);