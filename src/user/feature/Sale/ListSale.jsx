import React from 'react';
import PropTypes from 'prop-types';

// Components
import ThumbnailSaleLarge from '../Product/ThumbnailSaleLarge';


ListSale.propTypes = {
    items: PropTypes.array,
};

ListSale.defaultProps = {
    items: []
}

function ListSale(props) {

    const {items} = props;

    const renderItems = () =>{
        return items.map(item =>{
            return (
                <div className="col-lg-3">
                    <ThumbnailSaleLarge item = {item}/>
                </div>
                
            );
        });
    }

    return (
        <div className = "list-sale-content">
            <div className="row">
                {renderItems()}
            </div>
        </div>
    );
}

export default ListSale;