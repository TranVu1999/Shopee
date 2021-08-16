import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import RangeDateBox from '../../components/RangeDateBox';

// Theme
import { BorderColor } from './../../theme';

const WidgetContent = styled.div`
    &>span{
        margin-right: 1rem;
    }
`;

const Button = styled.button`
    padding: 0 1.25rem;
    margin: 0 1rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
    color: #333;
`;

const ButtonHamburger = styled(Button)`
    margin: 0;
    padding: 0 .5rem;
    font-size: 1.5rem;
    color: #999;
`;

DateBox.propTypes = {
    
};

function DateBox(props) {
    return (
        <WidgetContent className="d-flex align-items-center">
            <span>Ngày đặt hàng</span>
                <RangeDateBox/>
                <Button className="align-self-stretch">Xuất</Button>
                <ButtonHamburger className="align-self-stretch">
                    <span aria-hidden="true" className="icon_menu"></span>
                </ButtonHamburger>
        </WidgetContent>
    );
}

export default DateBox;