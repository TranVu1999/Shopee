import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DiscountBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    min-height: 100px;

    background: #fff4f4;
    border: 1px solid #ee4d2d;
    box-shadow: .125rem .125rem .3125rem rgba(0,0,0,.07);
`;

const WidgetRight = styled.div`
    flex: 1;
    padding-left: 15px;
`;

const WidgetLeft = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35%;
    border-left: 1px dashed #d5d5d5;
`;

const Title = styled.strong`
    font-size: .85em;
    font-weight: 400;
    color: #d0011b;
    line-height: 22px;
`;

const Expire = styled.span`
    font-size: .75em;
`;

const Button = styled.button`
    padding: 2px 20px;
    color: #fff;
    background-color: #ee4d2d;
`;

WidgetDiscount.propTypes = {
    item: PropTypes.object,
    isSmall: PropTypes.bool,
};

WidgetDiscount.defaultProps = {
    item: {
        min: "",
        max: "",
        expire: ""
    },
    isSmall: false
}

function WidgetDiscount(props) {
    const {min, max, expire, isSmall} = props.item;

    return (
        <DiscountBox>
            <WidgetRight>
                <Title className = "d-block">{min} {isSmall ? <br /> : ""} {max}</Title>
                <Expire>HSD: {expire}</Expire>
            </WidgetRight>

            <WidgetLeft>
                <Button>Lưu</Button>
            </WidgetLeft>
            
        </DiscountBox>
    );
}

export default WidgetDiscount;