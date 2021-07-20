import React from 'react';
import PropTypes from 'prop-types';
import SearchTrendBox from './SearchTrendBox';
import styled from 'styled-components';

SearchTrend.propTypes = {
    items: PropTypes.array,
};

SearchTrend.defaultProps = {
    items: []
}

const SearchTrendContent = styled.div`
    .row .col:last-child .search-trend-box{
        border-right: 1px solid transparent;
    }
`

function SearchTrend(props) {

    const renderListSearchTrend = () =>{
        return props.items.map(item =>{
            return (
                <div className="col" key = {item.id}>
                    <SearchTrendBox 
                        id = {item.id} 
                        title = {item.title} 
                        image = {item.image}
                    />
                </div>
            );
        });
    }

    return (
        <SearchTrendContent>
            <div className="row">
                {renderListSearchTrend()}
                
            </div>
            
        </SearchTrendContent>
    );
}

export default SearchTrend;