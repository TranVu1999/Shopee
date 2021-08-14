import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Analysis from './Analysis';
import Information from './Information';

const WidgetContent = styled.div`
    padding: 1.124rem 1.5rem;
    gap: 1.5rem;
`;

const WidgetLeft = styled.div``;

const WidgetRight = styled.div`

`;

Profile.propTypes = {
    
};

function Profile(props) {
    return (
        <WidgetContent className="d-flex">
            <WidgetLeft>
                <Analysis/>
            </WidgetLeft>

            <WidgetRight className="flex-fill">
                <Information/>
            </WidgetRight>
        </WidgetContent>
    );
}

export default Profile;