import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoreStatisticsItem = styled.div`
    text-transform: capitalize;

    span{
        margin-right: 5px;
    }

    strong{
        margin-left: 8px;
        color: #c7a17a;
        text-transform: lowercase;
    }
`;

WidgetThumbnailStore.propTypes = {
    item: PropTypes.object,
};

WidgetThumbnailStore.defaultProps = {
    item: {
        classIcon: "",
        number: "",
        label: ""
    }
}

function WidgetThumbnailStore(props) {
    const {
        classIcon,
        label,
        number
    } = props.item;

    return (
        <StoreStatisticsItem>
            <span className={classIcon}></span>
            {label}: <strong>{number}</strong> 
        </StoreStatisticsItem>
    );
}

export default WidgetThumbnailStore;