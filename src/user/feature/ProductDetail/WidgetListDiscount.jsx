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

    width: 66px;
    margin-left: 5px;
    border-left: 1px dashed #d5d5d5;
`;

const Title = styled.strong`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: .75rem;
    font-weight: 400;
    color: #d0011b;
    line-height: .875rem;
`;

const Expire = styled.span`
    font-size: .75em;
`;

const Button = styled.button`
    padding: .125rem .1875rem;
    width: calc(100% - 20px);

    font-size: .8125rem;
    color: #fff;
    background-color: #ee4d2d;
    border-radius: 2px;
`;

WidgetListDiscount.propTypes = {
    items: PropTypes.array,
};

WidgetListDiscount.defaultProps = {
    items: []
}

function WidgetListDiscount(props) {
    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{
            const {
                min, 
                max, 
                expire, 
                isSmall
            } = item;

            return (
                <DiscountBox>
                    <WidgetRight>
                        <Title >{min} {isSmall ? <br /> : ""} {max}</Title>
                        <Expire>HSD: {expire}</Expire>
                    </WidgetRight>

                    <WidgetLeft>
                        <Button>Lưu</Button>
                    </WidgetLeft>
                    
                </DiscountBox>
            );
        });
    }

    return (
        <div>
            <div className = "page-product__sidebar--header">Mã giảm giá của Shop</div>
            {renderItems()}
        </div>
    );
}

export default WidgetListDiscount;