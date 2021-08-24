import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Title from '../../common/component/Title';

// Modules
import Number from '../../util/number';

// images
import pic1 from './../../assets/image/product-sale/pic1.jpeg';
import pic2 from './../../assets/image/product-sale/pic2.jpeg';
import pic3 from './../../assets/image/product-sale/pic3.jpeg';
import pic4 from './../../assets/image/product-sale/pic4.jpeg';
import pic5 from './../../assets/image/product-sale/pic5.jpeg';

const WidgetContent = styled.div`
    background-color: #fff;
`;

const ListProduct = styled.div`

`;

const ProductItem = styled.a`

    .thumbnail{
        width: 198px;
        height: 198px;

        background-size: cover;
        background-position: center;
    }

    .title{
        margin-bottom: 0;

        font-size: 1.125rem;
        text-transform: uppercase;
        
        color: rgba(0,0,0,.8);
    }

    .price{
        font-size: 1rem;
        color: #ee4d2d;

        span{
            margin-right: .25rem;
            color: rgba(0,0,0,.26);
        }
    }
`;

ProductSale.propTypes = {
    
};

function ProductSale(props) {
    // Data
    const listProduct = [
        {
            id: 1,
            url: "#/",
            image: pic1,
            title: "BALO NAM",
            price: 2200
        },
        {
            id: 2,
            url: "#/",
            image: pic2,
            title: "QUẦN KAKI",
            price: 1000
        },
        {
            id: 3,
            url: "#/",
            image: pic3,
            title: "ÁO THUN NAM",
            price: 6500
        },
        {
            id: 4,
            url: "#/",
            image: pic4,
            title: "GIÁY THỂ THAO",
            price: 1000
        },
        {
            id: 5,
            url: "#/",
            image: pic5,
            title: "VÍ NAM",
            price: 9000
        },

    ]

    // render
    const renderListProduct = () =>{
        return listProduct.map(item =>{
            return (
                <ProductItem 
                    className="col text-center" 
                    key = {item.id}
                    href = "#/"
                >
                    <div 
                        className="d-inline-block thumbnail"
                        style = {{backgroundImage: `url(${item.image}`}}
                    />
                    <p className="title">{item.title}</p>
                    <p className="price">
                        <span>Từ</span>
                        <small>₫</small>
                        {Number.convertToMoney(item.price)}
                    </p>
                </ProductItem>
            );
        })
    }

    return (
        <WidgetContent>
            <Title title = "PHONG CÁCH TRẺ TRUNG - CHÀNG DIỆN ĐẾN LỚP"/>

            <ListProduct className="row">
                {renderListProduct()}
            </ListProduct>
        </WidgetContent>
    );
}

export default ProductSale;