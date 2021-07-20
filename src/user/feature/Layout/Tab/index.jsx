import React from 'react';
import PropTypes from 'prop-types';

// Components
import styled from 'styled-components';

// CSS
import './index.scss';
import PopUp from '../../../common/component/PopUp';
import { useState } from 'react';

const HeaderTab = styled.h5`
    text-transform: ${props => props.small ? "capitalize" : "uppercase"};
    font-size: ${props => props.small ? "18px!important" : "23px"};

`

Tab.propTypes = {
    smallHeaderTab: PropTypes.bool,
    full: PropTypes.bool,
    items: PropTypes.array,
    activeIndex: PropTypes.number,
    onHandleChoseTab: PropTypes.func,
    moreTab: PropTypes.bool,
};

Tab.defaultProps = {
    smallHeaderTab: false,
    full: true,
    items: [],
    activeIndex: 0,
    onHandleChoseTab: null,
    moreTab: false
}

function Tab(props) {

    const [isShowPopup, setIsShowPopup] = useState(false);

    const {
        items, 
        activeIndex, 
        onHandleChoseTab, 
        full,
        smallHeaderTab,
        moreTab
    } = props;

    const onHandleClick = index =>{
        if(onHandleChoseTab){
            onHandleChoseTab(index);
        }
    }

    const renderListTab = () =>{
        return items.map((item, index) =>{
            return (
                <div 
                    className = {activeIndex === index ? "tab-item active" : "tab-item"}
                    key = {item.title}
                    onClick = {() => {onHandleClick(index)}}
                >
                    <HeaderTab small = {smallHeaderTab}> {item.image ? <img src = {item.image} alt="Barista Shop" /> : "" } {item.title}</HeaderTab>
                </div>
            )
        })
    }


    return (
        <div 
            className = "d-flex align-items-center tab-content" 
            style = {{justifyContent: full ? "space-between" : "flex-start"}}
        >
            {renderListTab()}

            <div 
                className="tab-item tab-more"
                onMouseEnter = {() => {setIsShowPopup(true)}}
                onMouseLeave = {() => {setIsShowPopup(false)}}
            >
                <HeaderTab small = {smallHeaderTab}
                >Xem them  <span aria-hidden="true" class="arrow_triangle-down"></span></HeaderTab>

                <div className="tab-more-box">
                    <PopUp isOpen = {isShowPopup}>no no</PopUp>
                </div>
            </div>
        </div>
    );
}

export default Tab;