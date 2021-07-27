import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import WidgetStoreStatistics from '../Store/WidgetStoreStatistics';

const WidgetStatisticsItem = styled.div`
    width: 33.333333%;
    line-height: 36px;
`;

WidgetStatisticsStore.propTypes = {
    items: PropTypes.array,
};

WidgetStatisticsStore.defaultProps = {
    items: []
}

function WidgetStatisticsStore(props) {
    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{
            return (
                <WidgetStatisticsItem>
                    <WidgetStoreStatistics item = {item}/>
                </WidgetStatisticsItem>
            );
        });
    }

    return (
        <div className = "ml-5 d-flex flex-wrap">
            {renderItems()}
        </div>
    );
}

export default WidgetStatisticsStore;