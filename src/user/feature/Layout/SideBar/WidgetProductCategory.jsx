import React, { useState } from 'react';
import PropTypes from 'prop-types';
// modules
import validate from './../../../../utils/validate';


WidgetProductCategory.propTypes = {
    prodCateSelected: PropTypes.string.isRequired,
    categories: PropTypes.array,
    onChoseCategory: PropTypes.func.isRequired,
};

WidgetProductCategory.defaultProps = {
    categories: []
}

function WidgetProductCategory({
    prodCateSelected, 
    categories, 
    onChoseCategory
}) {

    // GLOBAL VARIABLES
    const lengthCategory = categories.length;

    // STATE
    const [isShowFullCategory, setIsShowFullCategory] = useState(lengthCategory > 6);

    // SET STATE
    const showFullSidebar = () =>{
        setIsShowFullCategory(!isShowFullCategory);
    }

    // handle event
    const onHandleChoseCategory = indexCate => {
        if(!onChoseCategory) return;
        onChoseCategory({
            name: "topCategory",
            value: categories[indexCate]
        });
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
                    key = {item._id} 
                    className = {validate.removeAccents(prodCateSelected) === validate.removeAccents(item.alias) ? "active" : ""}
                    onClick = {() => onHandleChoseCategory(index)}
                >
                    <span className="arrow_carrot-right"></span>
                    <span>{item.title}</span>
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