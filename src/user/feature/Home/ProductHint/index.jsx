import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Components
import Tab from './../../Layout/Tab';
import Thumbnail from './../../../feature/Product/Thumbnail';

// CSS
import './index.scss';

ProductHint.propTypes = {
    items: PropTypes.array,
};

ProductHint.defaultProps = {
    items: []
}

function ProductHint(props) {
    const [listTab] = useState([
        {
            title: "Goi y Hom nay",
            image: ""
        },
        {
            title: "Thanh toan bang xu",
            image: ""
        }
    ]);

    const [activeIndex, setActiveIndex] = useState(0);

    const {items} = props;

    const onHandleChoseTab = index =>{
        if(index !== activeIndex){
            setActiveIndex(index);
        }
    }

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
        <div className = "product-hint-content">
            <Tab 
                items = {listTab} 
                activeIndex = {activeIndex}
                onHandleChoseTab = {onHandleChoseTab}
            />

            <div className="row">
                {renderItems()}
            </div>

        </div>
    );
}

export default ProductHint;