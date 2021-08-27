import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    background-color: #fff;
`;

const Title = styled.div`
    h5{
        margin: 0;
        font-size: 1rem;
        color: rgba(0,0,0,.54);
        font-weight: 500;
        text-transform: uppercase;
    }

    a{
        font-size: .875rem;
        color: #ee4d2d;

        span{
            margin-top: .125rem;
            font-size: 1.125rem;
        }
    }
`;


WidgetListProduct.propTypes = {
    listProduct: PropTypes.array.isRequired,
};

function WidgetListProduct({listProduct}) {    

    return (
        <WidgetContent>
            <Title className="d-flex justify-content-between align-items-center">
                <h5>Các sản phẩm khác của Shop</h5>
                <a href="#/" className="d-flex align-items-center">
                    Xem tất cả
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                </a>
            </Title>
        </WidgetContent>
    );
}

export default WidgetListProduct;