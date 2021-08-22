import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputBox from '../../common/component/InputBox';
import InputPasswordBox from '../../common/component/InputPasswordBox';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    background-color: rgb(238, 77, 45);
`;

const WrapForm = styled.div`
    height: 600px;
    width: 65rem;
    margin: 0 auto;

    background-image: url(https://cf.shopee.vn/file/be50c95ee8da6c997d171fc7e7e36712);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    a{
        color: #05a;
        font-size: .75rem;
    }
`;


WrapContent.propTypes = {
    
};

function WrapContent({FormLogin}) {

    return (
        <WidgetContent>
            <div className="container">
                <WrapForm className="d-flex align-items-center justify-content-end">
                    {FormLogin}            
                </WrapForm>

            </div>
        </WidgetContent>
    );
}

export default WrapContent;