import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridBanner = styled.div`
    display: grid;
    gap: ${props => props.gap}px;
    grid-template-columns: ${props => props.col};
`;

const Banner = styled.div`
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


WidgetGridBanner.propTypes = {
    gap: PropTypes.number,
    col: PropTypes.number,
    items: PropTypes.array,
};

WidgetGridBanner.defaultProps = {
    gap: 0,
    col: 2,
    items: []
}

function WidgetGridBanner(props) {
    const {col, items, gap} = props;

    const renderBanner = () =>{
        return items.map(item =>{
            return (
                <Banner key = {item}>
                    <img src={item} alt="banner" />
                </Banner>
            );
        })
    }

    return (
        <GridBanner col = {col} gap = {gap}>
            {renderBanner()}
        </GridBanner>
    );
}

export default WidgetGridBanner;