import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import QuestionItem from './QuestionItem';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;

    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.p`
    font-size: 1.125rem;
    color: #333;
`;

const WidgetListQuestion = styled.div`
    padding-left: 3rem;
    padding-right: 1rem;

    &>div:first-child{
        border: none;
    }
`;


ListQuestion.propTypes = {
    listQuestion: PropTypes.array.isRequired,
};

function ListQuestion({listQuestion}) {

    // render
    const renderListQuestion = () =>{
        return listQuestion.map(item =>{
            return (
                <QuestionItem key={item.id} content={item}/>
            );
        });
    }

    return (
        <WidgetContent>
            <Title> Hỏi - Đáp </Title>

            <WidgetListQuestion>
                {renderListQuestion()}
            </WidgetListQuestion>
        </WidgetContent>
    );
}

export default ListQuestion;