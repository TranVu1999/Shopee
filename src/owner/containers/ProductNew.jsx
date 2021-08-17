import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputImage from '../features/Product/InputImage';

const WidgetContent = styled.div``;

ProductNew.propTypes = {
    
};

function ProductNew(props) {
    return (
        <WidgetContent>
            <InputImage required/>
        </WidgetContent>
    );
}

export default ProductNew;