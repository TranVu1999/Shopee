import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionBox = styled.div`
    padding: 1.4rem 1.5rem;
    font-size: .875rem;
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
    categories: PropTypes.array,
    describe: PropTypes.string,
    attributes: PropTypes.object,
};

WidgetDescription.defaultProps = {
    item: {
        breadcrumb: [],
        moreDetail: [],
        description: ""
    }
}

function WidgetDescription(props) {
    const attributeNames = [
        {
            EN: "brand",
            VI: "Nhãn hiệu"
        },
        {
            EN: "originPlace",
            VI: "Xuất xứ"
        },
        {
            EN: "material",
            VI: "Chất liệu"
        },
        {
            EN: "collar",
            VI: "Kiểu cổ áo"
        },
        {
            EN: "event",
            VI: "Dịp"
        },
        {
            EN: "pattern",
            VI: "Mẫu"
        },
        {
            EN: "sleeve",
            VI: "Dài tay"
        },
        {
            EN: "style",
            VI: "Phong cách"
        },
        {
            EN: "sleeveStyle",
            VI: "Kiểu cổ áo"
        },
        {
            EN: "cuffStyle",
            VI: "Kiểu cổ tay áo"
        },
        {
            EN: "shape",
            VI: "Hình dáng"
        },
        {
            EN: "tallFit",
            VI: "TallFit"
        },
        {
            EN: "large",
            VI: "Lớn"
        }
    ]
    const {breadcrumb, moreDetail} = props.item;
    const {description, attributes, categories} = props;
    const [productAttr, setProductAttr] = useState([]);

    // useEffect
    // formatproduct attribute
    useEffect(() => {
        const tempAttr = [];
        for(let x of attributeNames) {
            for(let y in attributes) {
                if(x.EN === y) {
                    tempAttr.push({
                        label: x.VI,
                        value: attributes[y]
                    })
                }
            }
        }

        setProductAttr(tempAttr)
    }, [attributes])

    // Render
    const renderBreadcrumb = () =>{
        const elm = [];
        const maxIndex = categories.length - 1;
        for(let idx = 0; idx < maxIndex; idx++) {
            elm.push(
                <BreadcrumbItem key = {categories[idx]}>
                    {categories[idx]}
                    <span className="arrow_carrot-right"></span>
                </BreadcrumbItem>
            )
        }
        return elm;        
    }

    const renderMoreDetail = () =>{
        const elm = [];
        for(let attr of productAttr) {
            let flag = false;
            let value = "";
            if(typeof attr.value === "string" && attr.value) {
                flag = true;
                value = attr.value;
            } else if(Array.isArray(attr.value) && attr.value.length) {
                flag = true;
                value = attr.value.join(',');
            }

            if(flag) {
                elm.push(<div className = "d-flex mb-2" key = {attr.label}>
                    <Label>{attr.label}</Label>
                    <div>{value}</div>
                </div>);
            }
        }
        return elm;
        
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