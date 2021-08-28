import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
`;

const WidgetTitle = styled.div`
    position: relative;

    hr{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, 50%);

        width: 100%;
        margin: 0;

        color: rgba(0,0,0,.8);
        background-color: rgba(0,0,0,.26); 

        border-top: 1px dotted rgba(0,0,0,.26);
        z-index: 0;
    }

    h1{
        position: relative;
        display: inline-block;
        padding: 1.125rem 1.125rem;
        margin: 0;
        border-radius: 8px;

        font-size: 1.25rem;
        background-color: #ee4d2d;
        color: #fff;
        z-index: 1;
    }

`;

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

function Title({title}) {
    return (
        <WidgetContent>
            <WidgetTitle className="text-center">
                <h1>{title}</h1>
                <hr />
            </WidgetTitle>
        </WidgetContent>
    );
}

export default Title;