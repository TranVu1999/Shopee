import React from 'react';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    position: relative;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    input{
        width: 100%;
        padding: .25rem .875rem;
    }

    button{
        position: absolute;
        right: 0;

        display: none;
        width: 1.5rem;
        height: 50%;

        span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-size: 1rem;
            color: #999;

            background-color: transparent;
        }
    }

    button.up{
        top: 0;
        border-bottom: 1px solid ${BorderColor.mainColor};
        border-left: 1px solid ${BorderColor.mainColor};
    }

    button.down{
        bottom: 0px;
        border-left: 1px solid ${BorderColor.mainColor};
    }

    &:hover{
        button{
            display: block;
        }
    }
`;


function InputNumber() {
    return (
        <WidgetContent>
            <input type="text" placeholder="Nhập vào"/>
            <button className="up"><span aria-hidden="true" class="arrow_triangle-up"></span></button>
            <button className="down"><span aria-hidden="true" className="arrow_triangle-down"></span></button>
        </WidgetContent>
    );
}

export default InputNumber;