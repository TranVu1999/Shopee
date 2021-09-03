import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetCheckBox = styled.div`
    font-size: .875rem;
    line-height: 1rem;
`;

const Box = styled.div`
    margin-right: 8px;
    height: 1.125rem;
    width: 1.125rem;

    background-color: #fff;
    
    border: 1px solid #d5d5d5;
    border-radius: 2px;

    span{
        display: none;
    }

    &.checked{
        background-color: #ee4d2d;
        border-color: #ee4d2d;

        span{
            display: block;
            color: #fff;
        }
    }
`;

CheckBox.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
}

CheckBox.defaultProps = {
    checked: false,
    label: ""
}

function CheckBox({checked, label}) {
    return (
        <WidgetCheckBox className="d-flex align-items-center">
            <Box 
                className={checked ? "d-inline-block checked" : "d-inline-block"}
            >
                <span aria-hidden="true" className="icon_check"></span>
            </Box>
            <span>{label}</span>
        </WidgetCheckBox>
        
    );
}

export default CheckBox;