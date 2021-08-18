import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import WidgetAddInformation from '../features/Product/WidgetAddInformation';

const WidgetContent = styled.div``;

const WidgetSidebar = styled.div`
    width: 235px;
    margin-left: 40px;
`;

ProductNew.propTypes = {
    
};

function ProductNew(props) {
    

    return (
        <WidgetContent>
            <WidgetAddInformation/>
        </WidgetContent>
    );
}

export default ProductNew;