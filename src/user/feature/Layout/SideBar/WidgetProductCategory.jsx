import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import styled from 'styled-components';


WidgetProductCategory.propTypes = {
    indexActive: PropTypes.number,
    categories: PropTypes.array,
};

WidgetProductCategory.defaultProps = {
    indexActive: 0,
    categories: []
}

function WidgetProductCategory(props) {
    const {indexActive, categories} = props;

    // GLOBAL VARIABLES
    const lengthCategory = categories.length;

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
        let listCategoryTemp = isShowFullCategory ? categories.slice(0, 6) : categories;
        
        elm = listCategoryTemp.map((item, index) =>{
            return (
                <li 
                    key = {item} 
                    className = {indexActive === index ? "active" : ""}
                >
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    <span>{item}</span>
                </li>
            );
        });

        let showMoreElm = lengthCategory > 6 ? (
            <li> {showElmMore()}</li>
        ) : "";

        elm.push(showMoreElm);

        return elm;

    }

    return (
        <ul className="categories">
            {renderListCategory()}
        </ul>
    );
}

export default WidgetProductCategory;