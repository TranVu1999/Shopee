import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TitleContent from './../components/TitleContent';
import RatingFilter from '../features/Shop/RatingFilter';
import RatingData from '../features/Shop/RatingData';

const WidgetStatistics = styled.div`
    span:first-child{
        margin-right: .25rem;
        font-size: 2.5rem;
        color: #ee4d2d;
    }

    span:last-child{
        margin-left: .25rem;
    }
`;

ShopRating.propTypes = {
    
};

function ShopRating(props) {
    return (
        <section>
            <TitleContent 
                title="Đánh Giá Shop"
                subTitle="Xem đánh giá Shop của bạn"
                rightElm={<WidgetStatistics>
                    <span>0.0</span>/
                    <span>5</span>
                </WidgetStatistics>}
            />

            <RatingFilter/>

            <RatingData/>
        </section>
    );
}

export default ShopRating;