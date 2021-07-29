import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {Color, BorderColor} from './../../theme';

const CommentStatisticsBox = styled.div`
    display: flex;
    align-items: center;

    min-height: 5rem;
    padding: 1.875rem;
    background-color: #fffbf8;
    border: 1px solid #f9ede5;
`;

const NumberBox = styled.div`
    min-width: 100px;
    margin-right: 2.5rem;

    font-size: 16px;
    color: ${Color.mainColor};

    strong{
        font-weight: 500;
        font-size: 2em;
    }
`;

const Button = styled.button`
    padding: 4px 1rem;
    margin: 0 .275rem .5rem;
    font-size: 0.875rem;
    color: ${props => props.active ? Color.mainColor : Color.greyColor};
    border: 1px solid ${props => props.active ? BorderColor.primaryColor : BorderColor.mainColor};
    border-radius: 2px;

    &:hover{
        color: ${Color.mainColor};
        border: 1px solid ${BorderColor.primaryColor};
    }
`;



WidgetCommentStatistics.propTypes = {
    average: PropTypes.number,
    statistics: PropTypes.array,
    filter: PropTypes.string,
};

WidgetCommentStatistics.defaultProps = {
    filter: "all",
    average: 0,
    statistics: [
        {
            key: "5 Sao",
            value: 0
        },
        {
            key: "4 Sao",
            value: 0
        },
        {
            key: "3 Sao",
            value: 0
        },
        {
            key: "2 Sao",
            value: 0
        },
        {
            key: "1 Sao",
            value: 0
        },
        {
            key: "Có Bình luận",
            value: 0
        },
        {
            key: "Có hình ảnh / video",
            value: 0
        }

    ]
}

function WidgetCommentStatistics(props) {
    const {average, statistics, filter} = props;

    // Render
    const renderButton = () =>{
        return statistics.map(item =>{
            return (
                <Button 
                    key = {item.key}
                    active = {filter === item.key}
                >{item.key} ({item.value})</Button>
            );
        });
    }
    return (
        <CommentStatisticsBox className = "br-2">
           <NumberBox>
                <strong>{average}</strong> trên 5 
                <div>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                </div>
           </NumberBox>

           <div>
                <Button active = {filter === "all"}>Tat Ca</Button>
                {renderButton()}
                
           </div>
        </CommentStatisticsBox>
    );
}

export default WidgetCommentStatistics;