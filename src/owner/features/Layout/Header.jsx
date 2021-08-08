import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const WidgetContent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    
    min-height: 3.5rem;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

Header.propTypes = {
    
};

function Header(props) {
    return (
        <WidgetContent>
            
        </WidgetContent>
    );
}

export default Header;