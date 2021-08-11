import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    max-width: 80%;
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-top: 1px solid ${BorderColor.mainColor};
`;

const Title = styled.div`
    position: relative;
    margin-bottom: .5rem;
    font-size: 1rem;
    color: #333;

    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: -32px;
        transform: translateY(-50%);

        width: .5rem;
        height: .5rem;
        
        background-color: #d8d8d8;

        border-radius: 50%;
    }
`;

const Description = styled.div`
    font-size: .875rem;
`;

QuestionItem.propTypes = {
    content: PropTypes.object.isRequired,
};

function QuestionItem({content}) {
    return (
        <WidgetContent>
            <Title>{content.title}</Title>
            <Description>{content.description}</Description>
        </WidgetContent>
    );
}

export default QuestionItem;