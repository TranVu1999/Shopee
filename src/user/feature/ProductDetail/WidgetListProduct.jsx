import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from "react-router-dom";

// Components
import Thumbnail from '../Product/Thumbnail';


const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    background-color: #fff;
`;

const Title = styled.div`
    margin-bottom: 1rem;

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

const ListProduct = styled.div`
    gap: 10px;
`;

const Product = styled.div`
    width: calc((100% - 40px) / 5);
`;


WidgetListProduct.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    listProduct: PropTypes.array.isRequired,
};

WidgetListProduct.defaultProps = {
    url: ""
}

function WidgetListProduct({url, title, listProduct}) {    

    // render
    const renderListProduct = () =>{
        return listProduct.map(item =>{
            return (
                <Product key = {item.id}>
                    <Thumbnail item = {item}/>
                </Product>
            );
        })
    }

    return (
        <WidgetContent>
            <Title className="d-flex justify-content-between align-items-center">
                <h5>{title}</h5>

                {
                    url && 
                    <Link 
                        to = {url} 
                        className="d-flex align-items-center"
                    >
                        Xem tất cả
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                    </Link>
                }
                
            </Title>

            <ListProduct className="row">
                {renderListProduct()}
            </ListProduct>
        </WidgetContent>
    );
}

export default WidgetListProduct;