import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme/index';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    h5{
        color: #333;
        font-size: 1.375rem;
        font-weight: 600;
    }

    p{
        font-size: .875rem;
        color: #999;
    }
`;

TitleContent.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

TitleContent.defaultProps = {
    subTitle: ""
};

function TitleContent({title, subTitle}) {
    return (
        <WidgetContent>
            <h5>{title}</h5>
            <p>{subTitle}</p>
        </WidgetContent>
    );
}

export default TitleContent;