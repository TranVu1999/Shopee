import React from 'react';
import styled from 'styled-components';

// Theme
import {BorderColor} from "./../../theme";

const WidgetContent = styled.div`
    padding: .25rem .5rem;
    width: 17.5rem;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    button{
        margin-left: .5rem;
        font-size: 1rem;
        color: #999;
    }
`;

function SearchBox() {
    return (
        <WidgetContent className="d-flex">
            <input className="flex-fill" type="text" placeholder="Tìm đơn hàng"/>
            <button><span aria-hidden="true" className="icon_search"></span></button>
        </WidgetContent>
    );
}

export default SearchBox;