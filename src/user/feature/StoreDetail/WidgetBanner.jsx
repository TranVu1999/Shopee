import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerBox = styled.div`
    min-height: 235px;

    img{
        width: 100%;
    }
`;

WidgetBanner.propTypes = {
    image: PropTypes.string,
};

WidgetBanner.defaultProps = {
    image: ""
}

function WidgetBanner(props) {
    const {image} = props;
    return (
        <BannerBox>
            <img src={image} alt="banner" />
        </BannerBox>
    );
}

export default WidgetBanner;