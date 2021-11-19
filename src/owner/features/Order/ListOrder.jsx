import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import OrderItem from './OrderItem';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

ListOrder.propsTypes = {
    listInvoice: PropTypes.array.isRequired,
}


function ListOrder({listInvoice}) {

    // redner
    const renderListInvoice = () => {
        return listInvoice.map(invoice => {
            return <OrderItem key = {invoice._id} invoice = {invoice}/>
        })
    }
    return (
        <WidgetContent className="list-invoice">
            {renderListInvoice()}
        </WidgetContent>
    );
}

export default ListOrder;