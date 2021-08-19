import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    padding: .5rem .875rem;
`;


InputInventoryNumber.propTypes = {
    
};

function InputInventoryNumber(props) {
    return (
        <WidgetContent className="widget-input-box">
            <input type="text" placeholder="0"/>
        </WidgetContent>
    );
}

export default InputInventoryNumber;