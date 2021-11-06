import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Tab from './../Layout/Tab';
import Thumbnail from '../Product/Thumbnail.jsx';


const WidgetContent = styled.div`

    .row{
        div[class|="col"]:nth-child(6n+1){
            .product__thumbnail{
                margin-left: 0;
            }
        }
        
    }

    .row{
        div[class|="col"]:nth-child(6n+6){
            .product__thumbnail{
                margin-right: 0;
            }
        }
        
    }
`;

const ListProduct = styled.div`
    gap: 5px;
`;

const Product = styled.div`
    width: calc((100% - 25px) /6);
`;

const Tabs = styled.div`
    position: sticky;
    top: 7.375rem;
    z-index: 10;
    background-color: #fff;

    font-size: 1rem;
    text-transform: uppercase;

    border-bottom: 1px solid rgba(0,0,0,.09);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);

    div{
        padding: .875rem 1.5rem;
        cursor: pointer;
    }

    div.active{
        position: relative;
        color: rgb(238, 77, 45);

        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 3px;
            background-color: rgb(238, 77, 45);
        }
    }
`;

const WidgetButton = styled.div`
    a{
        display: inline-block;
        min-width: 24.375rem;
        height: 2.5rem;

        text-align: center;

        color: #555;
        background-color: #fff;

        border: 1px solid rgba(0,0,0,.03);
        border-radius: 2px;
        line-height: 2.5rem;
    }
`;

ProductHint.propTypes = {
    items: PropTypes.array,
};

ProductHint.defaultProps = {
    items: []
}

function ProductHint(props) {
   
    const [activeIndex, setActiveIndex] = useState(0);

    const {items} = props;

    // handle event
    const onHandleChoseTab = index =>{
        if(index !== activeIndex){
            setActiveIndex(index);
        }
    }

    // render
    const renderItems = () =>{
        return items.map(item =>{
            return (
                <Product key = {item.id}>
                    <Thumbnail item = {item}/>
                </Product>
            );
        })
    }

    return (
        <WidgetContent className = "product-hint-content">

            <Tabs className="d-flex align-items-center">
                <div className="active">Goi y Hom nay</div>
                <div>Thanh toan bang xu</div>
            </Tabs>

            <ListProduct className="mt-2 mb-3 row">
                {renderItems()}
            </ListProduct>

            <WidgetButton className="text-center">
                <a href="#/">Xem thêm</a>
            </WidgetButton>

        </WidgetContent>
    );
}

export default ProductHint;