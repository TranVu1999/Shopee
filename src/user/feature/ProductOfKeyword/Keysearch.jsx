import React from 'react';
import PropTypes from 'prop-types';
// icons
import {hintBulbIcon} from './../../../asset/icon';

Keysearch.propsTypes = {
    keysearch: PropTypes.string.isRequired,
}

function Keysearch({keysearch}) {
    

    return (
        <div className = "d-flex align-items-center widget-keysearch">
            {hintBulbIcon}Kết quả tìm kiếm cho từ khóa <span>"{keysearch}"</span>
        </div>
    );
}

export default Keysearch;