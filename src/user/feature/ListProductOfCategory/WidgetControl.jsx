import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ButtonControl = styled.button`
    padding: 8px 15px;
    background-color: #fff;

    &.active{
        color: #fff;
        background-color: #c7a17a;
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
        <div className = "d-flex align-items-center justify-content-between">
            <div className = "d-flex align-items-center">
                <div className = "mr-4">Sap xep theo</div>
                <div className = "mr-3">
                    <ButtonControl className = "active">Pho Bien</ButtonControl>
                </div>

                <div className = "mr-3">
                    <ButtonControl>Moi Nhat</ButtonControl>
                </div>

                <div className = "mr-3">
                    <ButtonControl>Moi Nhat</ButtonControl>
                </div>

                <div className = "mr-3">
                    <ButtonControl>Ban Chay</ButtonControl>
                </div>

                <div className="px-2 align-self-stretch bg-white">
                    <SelectControl>
                        <option value="">Gia</option>
                        <option value="">Gia: Thap den Cao</option>
                        <option value="">Gia: Cao den Thap</option>
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
        </div>
    );
}

export default WidgetControl;