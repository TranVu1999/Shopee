import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from './../../util/number';

const WidgetContent = styled.div`
    background-color: #fff;
`;

const WidgetTop = styled.div`

`;

const WidgetListProduct = styled.div`
    margin: 0 1rem;
    background-color: #EAE7DE;
    gap: 1px;
`;

const WidgetProduct = styled.div`
    position: relative;
    padding: 1rem .875rem 1.25rem;
    flex: 1;
    background-color: #fff;

    .thumbnail{
        width: 10.125rem;
        height: 10.125rem;
        margin: 0 auto .9375rem;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .price{
        text-align: center;
        color: rgb(238, 77, 46);
    }
`;

const WidgetBottom = styled.div`

`;

BestSeller.propTypes = {
    
};

function BestSeller(props) {
    // Data
    const listProduct = [
        {
            id: 1,
            image: "https://cf.shopee.vn/file/b00ff4037cb1c50ff8a4ebaaaaefbef0_tn",
            price: 3790500,
            link: "#/",
            discount: 40
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/cc3fa29b51413911e5802c21a1a678dd_tn",
            price: 69000,
            link: "#/",
            discount: 28
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/f2785448bca1336bd6cf9fa61cf960c1_tn",
            price: 3200000,
            link: "#/",
            discount: 20
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/a256a89d3b7b4b80224e768d9ff6fdff_tn",
            price: 3190000,
            link: "#/",
            discount: 27
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/c99ab717849936a107873f4000887f03_tn",
            price: 18000,
            link: "#/",
            discount: 50
        },
        {
            id: 6,
            image: "https://cf.shopee.vn/file/dd252c72f8a2a72a1d449b33c35315e5_tn",
            price: 2694000,
            link: "#/",
            discount: 50
        }
    ]

    // render
    const renderListProduct = () =>{
        return listProduct.map(item =>{
            return (
                <WidgetProduct>
                    <div 
                        className="thumbnail"
                        style = {{backgroundImage: `url(${item.image})`}}
                    ></div>
                    <div className="price">₫{Number.convertToMoney(item.price)}</div>
                    <div class="box-discount"><div><b>{item.discount}%</b> Sale</div></div>
                </WidgetProduct>
            );
        })
    }

    return (
        <WidgetContent>
            <WidgetTop>
                <picture>
                    <img src="https://cf.shopee.vn/file/0efd6b9a5b7c775694ba83ba94c3989b" alt="title" />
                </picture>
            </WidgetTop>

            <WidgetListProduct className="d-flex">
                {renderListProduct()}
            </WidgetListProduct>

            <WidgetBottom>
                <picture>
                    <img src="https://cf.shopee.vn/file/14d5cbbd163951f9ff4a7ae0bf9f143f" alt="" />
                </picture>
            </WidgetBottom>
        </WidgetContent>
    );
}

export default BestSeller;