import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import styled from 'styled-components';

const ListProductCategory = styled.ul`
    text-transform: capitalize;
`;

const ProductCategoryItem = styled.li`
    padding-left: 15px;

    &:hover{
        color: #c7a17a;
    }

    &.active{
        color: #c7a17a;
        font-weight: 600;
    }
`;

WidgetProductCategory.propTypes = {
    indexActive: PropTypes.number,
    items: PropTypes.array,
};

WidgetProductCategory.defaultProps = {
    indexActive: 0,
    items: []
}

function WidgetProductCategory(props) {
    const {indexActive, items} = props;

    // GLOBAL VARIABLES
    const lengthCategory = items.length;

    // STATE
    const [isShowFullCategory, setIsShowFullCategory] = useState(lengthCategory > 6);

    // SET STATE
    const showFullSidebar = () =>{
        setIsShowFullCategory(!isShowFullCategory);
    }

    // RENDER
    const showElmMore = () => {
        return isShowFullCategory ? (
            <span
                onClick = {() => {showFullSidebar()}}
            >
                Xem them 
                <span aria-hidden="true" className="arrow_carrot-down"></span>
            </span>
        ) : (
            <span
                onClick = {() => {showFullSidebar()}}
            >
                Rut Gon 
                <span aria-hidden="true" className="arrow_carrot-up"></span>
            </span>
        )
    }

    const renderListCategory = () => {
        let elm = [];
        let listCategoryTemp = isShowFullCategory ? items.slice(0, 6) : items;
        
        elm = listCategoryTemp.map((item, index) =>{
            return (
                <ProductCategoryItem 
                    key = {item} 
                    className = {indexActive === index ? "active" : ""}
                >
                    <span>{item}</span>
                </ProductCategoryItem>
            );
        });

        let showMoreElm = lengthCategory > 6 ? (
            <li> {showElmMore()}</li>
        ) : "";

        elm.push(showMoreElm);

        return elm;

    }

    return (
        <ListProductCategory>
            {renderListCategory()}
        </ListProductCategory>
    );
}

export default WidgetProductCategory;