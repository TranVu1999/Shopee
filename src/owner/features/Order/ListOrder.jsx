import React from 'react';
import styled from 'styled-components';

// Theme
import OrderItem from './OrderItem';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;


function ListOrder() {
    return (
        <WidgetContent>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </WidgetContent>
    );
}

export default ListOrder;