import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Input = styled.input`
    width: 100%;
    padding: 0 4px;

    background-color: #fff;
    border: 1px solid #d5d5d5;

    &:focus{
        background-color: #fff;
        border: 1px solid #c7a17a;
    }
`;

const Hyphen = styled.div`
    max-width: 20px;
    min-width: 20px;
    height: 1px;
    margin: 0 5px;

    background-color: #d5d5d5;
`;

WidgetPrice.propTypes = {
    
};

function WidgetPrice(props) {
    return (
        <div className = "d-flex align-items-center" >
            <Input placeholder = "Tu"/>
            
            <Hyphen/>

            <Input placeholder = "Den"/>

        </div>
    );
}

export default WidgetPrice;