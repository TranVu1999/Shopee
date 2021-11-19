import React, { useState } from 'react';
import PropTypes from 'prop-types';

// hooks
import useOutsideElement from './../../../hooks/outsideElement';

TabBox.propTypes = {
    tabBox: PropTypes.object.isRequired,
    onChoseTab: PropTypes.func.isRequired,
}

function TabBox({tabBox, onChoseTab}) {
    // Data
    const {listTab, indexActive} = tabBox;
    const [isShowRightControl, setIsShowRightControl] = useState(true);

     // Custom Hooks
     const {
        visible: visibleRightOption, 
        setVisible: setVisibleRightOption, 
        ref: refRight
    } = useOutsideElement(false);
    const {
        visible: visibleLeftOption, 
        setVisible: setVisibleLeftOption, 
        ref: refLeft
    } = useOutsideElement(false);

    // Handle event
    const onHandleChoseTab = index => {
        const firstTabElm = document.querySelector(".widget-tabBox .tab-box__container .tab-box__item");

        if(index >= 6) {
            firstTabElm.style.marginLeft = "-280px"; 
            setIsShowRightControl(false);
            setVisibleRightOption(false);
        } else if(index <= 2) {
            firstTabElm.style.marginLeft = "0px";
            setIsShowRightControl(true);
            setVisibleLeftOption(false);
        }

        if(!onChoseTab) return;
        onChoseTab(index);
    }

    const onHandleOpenOptionTab = direction => {
        if(direction === "right") {
            setVisibleRightOption(true);
        } else  {
            setVisibleLeftOption(true);
        }
    }

    // render 
    const renderListTabBox = () => {
        return listTab.map((tab, index) => {
            return (
                <div 
                    className = {indexActive === index ? "tab-box__item active" : "tab-box__item"}
                    onClick = {() => onHandleChoseTab(index)}
                >{tab.title}</div>
            );
            
        })
    }

    const renderListOptionTabBoxRight = () => {
        return listTab.slice(6).map((tab, index) => {
            return (
                <div 
                    className = {indexActive === index + 6 ? "option-tab-box__item active" : "option-tab-box__item"}
                    onClick = {() => onHandleChoseTab(index + 6)}
                >{tab.title}</div>
            );
            
        })
    }

    const renderListOptionTabBoxLeft = () => {
        return listTab.slice(0, 3).map((tab, index) => {
            return (
                <div 
                    className = {indexActive === index ? "option-tab-box__item active" : "option-tab-box__item"}
                    onClick = {() => onHandleChoseTab(index)}
                >{tab.title}</div>
            );
            
        })
    }

    return (
        <div className="d-flex widget-tabBox">
            {!isShowRightControl && <div className="d-flex align-items-center justify-content-center tab-box__control left">
                <button onClick = {() => onHandleOpenOptionTab("left")}><i className="fas fa-ellipsis-h"></i></button>

                {visibleLeftOption && <div className="list-option-tab-box" ref = {refLeft}>
                    {renderListOptionTabBoxLeft()}
                </div>}
            </div>}
            

            <div className="tab-box__container">
                {renderListTabBox()}
            </div>

            {isShowRightControl && <div className="d-flex align-items-center justify-content-center tab-box__control right">
                <button onClick = {() => onHandleOpenOptionTab("right")}><i className="fas fa-ellipsis-h"></i></button>

                {visibleRightOption && <div className="list-option-tab-box" ref = {refRight}>
                    {renderListOptionTabBoxRight()}
                </div>}
                
            </div>}
            
            
            
        </div>
    );
}

export default TabBox;