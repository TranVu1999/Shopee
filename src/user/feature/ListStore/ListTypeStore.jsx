import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const WidgetContent = styled.div`
    margin-bottom: 50px;
`;

const Item = styled(Link)`
    display: block;
    width: 25%;
    margin-bottom: 1rem;

    font-size: 1.125rem;
    color: #333;

    span{
        margin-right: .5rem;
    }
`;


ListTypeStore.propTypes = {
    listTypeStore: PropTypes.array.isRequired,
};

function ListTypeStore({listTypeStore}) {

    // render
    const renderListTypeStore = () =>{
        return listTypeStore.map(item =>{
            return (
                <Item 
                    key = {item.alias}
                    to = {`/list-store/${item.alias}`}
                >
                    <span>-</span>
                    {item.title}
                </Item>
            );
        })
    }

    return (
        <WidgetContent className="d-flex flex-wrap">
            {renderListTypeStore()}
        </WidgetContent>
    );
}

export default ListTypeStore;