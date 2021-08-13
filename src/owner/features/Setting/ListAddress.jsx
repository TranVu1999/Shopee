import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddressItem from './AddressItem';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;

    &>div:last-child{
        border: none;
    }
`;

ListAddress.propTypes = {
    
};

function ListAddress(props) {
    return (
        <WidgetContent>
            <AddressItem/>
            <AddressItem/>
        </WidgetContent>
    );
}

export default ListAddress;