import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionBox = styled.div`
    padding: 1.4rem 1.5rem;
    background-color: #fff;
`;

const Detail = styled.div`
    padding-left: 0.875rem;
`;

const Label = styled.label`
    padding-left: 0.875rem;
    margin-right: 2.5rem;
    width: 8.5rem;
    
    color: rgba(0,0,0,.4);
    font-size: 1rem
`;

const Title = styled.h5`
    padding: 1rem 0.875rem;
    background: rgba(0,0,0,.02);
`;

const BreadcrumbItem = styled.a`
    display: inline-flex;
    align-items: center;
    margin-right: .5rem;

    span{
        margin-left: .5rem;
        color: #666!important;
    }

    &:last-child{
        span{
            display: none;
        }
    }

    &:hover{
        color: #c7a17a;
    }
`;

WidgetDescription.propTypes = {
    item: PropTypes.object,
};

WidgetDescription.defaultProps = {
    item: {
        breadcrumb: [],
        moreDetail: [],
        description: ""
    }
}

function WidgetDescription(props) {
    const {breadcrumb, moreDetail, description} = props.item;

    // Render
    const renderBreadcrumb = () =>{
        return breadcrumb.map(item =>{
            return (
                <BreadcrumbItem href={item.url}>
                    {item.title}
                    <span className="arrow_carrot-right"></span>
                </BreadcrumbItem>
            );
        });
    }

    const renderMoreDetail = () =>{
        return moreDetail.map(item =>{
            return (
                <div className = "d-flex mb-2" key = {item.label}>
                    <Label>{item.label}</Label>
                    <div>{item.content}</div>
                </div>
            );
        });
    }

    return (
        <DescriptionBox className = "br-2">
            <Title className = "page-product__content--header">CHI TIẾT SẢN PHẨM</Title>
            <div className="d-flex mb-2">
                <Label>Danh Mục</Label>
                <div>{renderBreadcrumb()}</div>
            </div>
            {renderMoreDetail()}


            <Title className = "page-product__content--header">MÔ TẢ SẢN PHẨM</Title>
            <Detail>{description}</Detail>
            
        </DescriptionBox>
    );
}

export default WidgetDescription;