import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    background-color: #fff;
`;

const WidgetObject = styled.div`
    padding: 1.5rem 1.5rem;
`;

const Title = styled.h5`
    padding: .875rem 0 1.125rem;

    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;

    color: rgba(0,0,0,.8);
`;

const Button = styled.button`
    width: 100%;
    padding: 5px 15px;

    background-color: #c7a17a;
    color: #fff;

    border: 1px solid #c7a17a;
    transition: all .3s ease;

    &:hover{
        background-color: #fff;
        color: #c7a17a;
    }
`

Sidebar.propTypes = {
    Avatar: PropTypes.element,
};

function Sidebar({
    Avatar, 
    WidgetSalerooms,
    WidgetRating,
    WidgetPrice,
    WidgetListProductCategory
}) {
    return (
        <WidgetContent>
            {Avatar}

            <WidgetObject>
                <Title>Danh mục Shop</Title>
                {WidgetListProductCategory}
            </WidgetObject>

            <WidgetObject>
                <Title>Danh mục Shop</Title>
                {WidgetSalerooms}
            </WidgetObject>

            <WidgetObject>
                <Title>Đánh giá</Title>
                {WidgetRating}
            </WidgetObject>

            <WidgetObject>
                <Title>Khoảng giá</Title>
                {WidgetPrice}
            </WidgetObject>
            
            <WidgetObject>
                <Button>Xóa tất cả</Button>
            </WidgetObject>
            
            
        </WidgetContent>
    );
}

export default Sidebar;