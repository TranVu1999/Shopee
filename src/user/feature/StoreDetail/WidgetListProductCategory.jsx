import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.ul`
    font-size: .875rem;
    color: rgba(0,0,0,.8);

    li{
        padding: .5rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.09);   
        line-height: 1.25rem;     

        &:last-child{
            border: none;
        }
    }
`;

WidgetListProductCategory.propTypes = {
    listProductCat: PropTypes.array.isRequired,
};

function WidgetListProductCategory({listProductCat}) {
    
    // render
    const renderListProductCat = () =>{
        return listProductCat.map(item =>{
            return (
                <li key = {item}>
                    <a href="#/">{item}</a>
                </li>
            );
        })
    }

    return (
        <WidgetContent>{renderListProductCat()}</WidgetContent>
    );
}

export default WidgetListProductCategory;