import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from './../../../common/component/CheckBox';

const WidgetItem = styled.li`
    margin-bottom: .25rem;
    cursor: pointer;
    font-size: .875rem;
`;


WidgetListCheck.propTypes = {
    items: PropTypes.array,
    maxLength: PropTypes.number,
};

WidgetListCheck.defaultProps = {
    items: [],
    maxLength: 0
}

function WidgetListCheck(props) {
    const {items, maxLength} = props;
    const length = items.length;
    const [isShowFullItems, setIsShowFullItems] = useState(length > maxLength);

    // RENDER
    const showElmMore = () => {
        return isShowFullItems ? (
            <span
                onClick = {() => {setIsShowFullItems(!isShowFullItems)}}
            >
                Xem them 
                <span aria-hidden="true" className="arrow_carrot-down"></span>
            </span>
        ) : (
            <span
                onClick = {() => {setIsShowFullItems(!isShowFullItems)}}
            >
                Rut Gon 
                <span aria-hidden="true" className="arrow_carrot-up"></span>
            </span>
        )
    }

    const renderListCheckBox = () =>{
        let listItemsTemp = isShowFullItems ? items.slice(0, maxLength) : items;

        let elm = listItemsTemp.map(item =>{
            return (
                <WidgetItem 
                    className = "d-flex align-items-center"
                    key = {item}
                >
                    <Checkbox/>
                    <span>{item}</span>
                </WidgetItem>
            );
        });

        let showMoreElm = length > maxLength ? (
            <li> {showElmMore()}</li>
        ) : "";
        
        elm.push(showMoreElm);

        return elm;
    }

    return (
        <ul className="list-check">
            {renderListCheckBox()}
        </ul>
    );
}

export default WidgetListCheck;