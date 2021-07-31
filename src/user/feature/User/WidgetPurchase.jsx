import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from '../Layout/Tab';
import PurchaseItem from './PurchaseItem';

const WidgetContent = styled.div`
    font-size: 16px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    padding: .5em 1em;

    color: #212121;
    background-color: #d5d5d5;
    border-radius: 4px;

    span{
        font-size: 1.125em;
        font-weight: 600;
    }

    input{
        margin-left: 1em;
        flex: 1;
    }
`;


WidgetPurchase.propTypes = {
    
};

function WidgetPurchase(props) {

    const listTab = [
        {title: "Tất cả"},
        {title: "Chờ xác nhận"},
        {title: "Chờ lấy hàng"},
        {title: "Đang giao"},
        {title: "Đã giao"},
        {title: "Đã Hủy"},

    ];

    // State
    const [activeIndex, setActiveIndex] = React.useState(0);

    // Functions
    const onHandleChoseTab = indexTab =>{
        if(indexTab !== activeIndex) setActiveIndex(indexTab);
    } 

    return (
        <WidgetContent>
            <Tab 
                smallHeaderTab = {true}
                full = {true}
                items = {listTab} 
                activeIndex = {activeIndex}
                onHandleChoseTab = {onHandleChoseTab}
            />

            <Filter>
                <button><span class="icon_search"></span></button>
                <input type="text" />
            </Filter>

            <div>
                <PurchaseItem/>
            </div>
        </WidgetContent>
    );
}

export default WidgetPurchase;