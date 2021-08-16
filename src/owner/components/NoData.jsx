import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// images
import emptyDataImage from './../assets/image/empty-data.png';

const WidgetContent = styled.div`
    padding: 3rem 0;
`;

NoData.propTypes = {
    
};

function NoData(props) {
    return (
        <WidgetContent className="text-center">
            <img src={emptyDataImage} alt="no data" />
            <p>Không có dữ liệu</p>
        </WidgetContent>
    );
}

export default NoData;