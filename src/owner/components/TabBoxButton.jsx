import React from 'react';
import PropTypes from 'prop-types';



TabBoxButton.propTypes = {
    listTab: PropTypes.array.isRequired,
    indexActive: PropTypes.number.isRequired,
    handleChoseTab: PropTypes.func.isRequired,
};

function TabBoxButton({listTab, indexActive, handleChoseTab}) {

    // handle event
    const onHandleChoseTab = index =>{
        if(!handleChoseTab) return;
        handleChoseTab(index);
    }

    // render
    const renderListTab = () => {
        return listTab.map((item, index) =>{
            return <div
                key = {item}
                className={indexActive === index && "active"}
                onClick = {() => onHandleChoseTab(index)}
            >{item}</div>
        });
    }

    return (
        <div className="d-flex owner-tab-box">
            {renderListTab()}
        </div>
    );
}

export default TabBoxButton;