import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Checkbox from './../../../common/component/CheckBox';
// modules
import validate from './../../../../utils/validate';

const WidgetItem = styled.li`
    margin-bottom: .25rem;
    cursor: pointer;
    font-size: .875rem;
`;


WidgetListCheck.propTypes = {
    itemSelected: PropTypes.string,
    items: PropTypes.array,
    maxLength: PropTypes.number,
    onChose: PropTypes.func.isRequired,
};

WidgetListCheck.defaultProps = {
    items: [],
    maxLength: 0
}

function WidgetListCheck({
    itemSelected,
    items, 
    maxLength, 
    onChose
}) {
    const length = items.length;
    const [isShowFullItems, setIsShowFullItems] = useState(length > maxLength);

    // handle event
    const onHandleChose = e => {
        if(!onChose) return;
        onChose({...e});
    }

    // RENDER
    const showElmMore = () => {
        return isShowFullItems ? (
            <span
                onClick = {() => {setIsShowFullItems(!isShowFullItems)}}
            >
                Xem thêm 
                <span className="arrow_carrot-down"></span>
            </span>
        ) : (
            <span
                onClick = {() => {setIsShowFullItems(!isShowFullItems)}}
            >
                Rút gọn
                <span className="arrow_carrot-up"></span>
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
                    <Checkbox 
                        isChecked = {itemSelected === validate.removeAccents(validate.formatToUrl(item))}
                        identification = {{name: "deliveryAddress", value: item}}
                        onChose = {onHandleChose}
                    />
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