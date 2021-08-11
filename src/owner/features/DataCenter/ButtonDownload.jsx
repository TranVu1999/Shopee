import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.button`
    padding: 0.25rem 1.5rem;
    color: #333;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    span{
        margin-right: .5rem;
    }   
`;

ButtonDownload.propTypes = {
    
};

function ButtonDownload(props) {
    return (
        <WidgetContent>
            <span aria-hidden="true" className="icon_download"></span>Tải dữ liệu
        </WidgetContent>
    );
}

export default ButtonDownload;