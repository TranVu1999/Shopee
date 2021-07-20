import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.scss';

PopUp.propTypes = {
    isOpen: PropTypes.bool,
};

PopUp.defaultProps = {
    isOpen: false
}

function PopUp(props) {

    const {isOpen} = props;

    return (
        <div 
            className = {isOpen ? "popup-content open" : "popup-content close"}
        >
            {props.children}
        </div>
    );
}

export default PopUp;