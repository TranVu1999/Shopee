import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Tab from './../Layout/Tab';
import Thumbnail from './../Product/Thumbnail';


const WidgetContent = styled.div`
    .product__thumbnail{
        margin: 4px 4px;
    }

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
                <div className="col-lg-2" key = {item.id}>
                    <Thumbnail 
                        title = {item.title} 
                        img = {item.img} 
                        price = {item.price}
                        discount = {item.discount}
                        numOrder = {item.numOrder}
                    />
                </div>
            );
        })
    }

    return (
        <WidgetContent className = "product-hint-content">

            <Tabs className="d-flex align-items-center">
                <div className="active">Goi y Hom nay</div>
                <div>Thanh toan bang xu</div>
            </Tabs>

            <div className="mt-2 row">
                {renderItems()}
            </div>

        </WidgetContent>
    );
}

export default ProductHint;