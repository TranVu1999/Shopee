import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: .875rem 1.5rem;
    margin-bottom: 1rem;

    font-size: .875rem;

    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
`;

Header.propTypes = {
    
};

function Header({children}) {
    return (
        <WidgetContent className="d-flex justify-content-between">
            {children}
        </WidgetContent>
    );
}

export default Header;