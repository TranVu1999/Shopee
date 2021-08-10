import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';
import OrderItem from './OrderItem';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;



ListOrder.propTypes = {
    
};

function ListOrder(props) {
    return (
        <WidgetContent>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </WidgetContent>
    );
}

export default ListOrder;