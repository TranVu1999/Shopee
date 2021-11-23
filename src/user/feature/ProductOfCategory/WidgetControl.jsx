import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    padding: .875rem 1.125rem;
    font-size: .875rem;
    background-color: #EDEDED;
`;

const ButtonControl = styled.button`
    padding: .25rem .875rem;
    background-color: #fff;

    &.active{
        color: #fff;
        background-color: #ee4d2d;
    }
`;

const SelectControl = styled.select`
    height: 100%;
    background-color: #fff;
`;

const NavigationButton = styled.button`
    height: 100%;
    font-size: 22px;
    padding: 4px 8px;
    background-color: #fff;
    border: 1px solid transparent;

    &:first-child{
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        border-right: 1px solid #d5d5d5;
    }

    &:last-child{
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
`;


WidgetControl.propTypes = {
    
};

function WidgetControl(props) {
    return (
        <WidgetContent className = "d-flex align-items-center justify-content-between">
            <div className = "d-flex align-items-center">
                <div className = "mr-4">Sắp xếp theo</div>
                <div className = "mr-3">
                    <ButtonControl className = "active">Phổ biến</ButtonControl>
                </div>

                <div className = "mr-3">
                    <ButtonControl>Mới nhất</ButtonControl>
                </div>

                <div className = "mr-3">
                    <ButtonControl>Bán chạy</ButtonControl>
                </div>

                <div className="px-2 align-self-stretch bg-white">
                    <SelectControl>
                        <option value="">Giá</option>
                        <option value="">Giá: Thấp đến Cao</option>
                        <option value="">Giá: Cao đến Thấp</option>
                    </SelectControl>
                </div>
            </div>
            
            <div className = "d-flex align-self-stretch align-items-center">
                    <span className = "mr-3">1/100</span>

                    <div className = "align-self-stretch">
                        <NavigationButton disabled = "true">
                            <span aria-hidden="true" className="arrow_carrot-left"></span>
                        </NavigationButton>

                        <NavigationButton>
                            <span aria-hidden="true" className="arrow_carrot-right"></span>
                        </NavigationButton>
                    </div>
                </div>
        </WidgetContent>
    );
}

export default WidgetControl;