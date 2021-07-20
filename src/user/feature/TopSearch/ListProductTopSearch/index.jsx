import React from 'react';
import PropTypes from 'prop-types';

// Components
import Thumbnail from './../../Product/Thumbnail';

// CSS
import './index.scss';

ListProductTopSearch.propTypes = {
    items: PropTypes.array,
};

ListProductTopSearch.defaultProps = {
    items: []
}

function ListProductTopSearch(props) {

    const {items} = props;

    const renderItems = () =>{
        return items.map(item =>{
            return (
                <div className="col-5" key = {item.id}>
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
        <div className = "list-product-top-search">
            <div className="row">
                {renderItems()}
            </div>

        </div>
    );
}

export default ListProductTopSearch;