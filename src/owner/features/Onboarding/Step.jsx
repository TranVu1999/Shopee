import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WidgetContent = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    padding: 1.125rem 0;
    border-bottom: 1px solid #e5e5e5;
`;

const WidgetStep = styled.div`
    flex: 1;
    font-size: .9125rem;
    text-align: center;
    color: #b7b7b7;

    &.active {
        color: #333;

        .dot {
            background-color: #ee4d2d;
        }
    }

    .dot {
        display: inline-block;
        width: .625rem;
        height: .625rem;

        background-color: #b7b7b7;
        border-radius: 50%;
    }

    &:nth-child(2) {
        position: relative;

        &:before, &:after {
            content: '';
            position: absolute;
            top: 27%;

            width: calc(100% - 2rem);
            height: 1px;
            background-color: #b7b7b7;
            z-index: 0;
        }

        &:before {
            left: 0;
            transform: translateX(-50%);
        }

        &:after {
            right: 0;
            transform: translateX(50%);
        }

        &.active.left:before,
        &.active.right:after {
            background-color: #ee4d2d;
        }
        
    }
`;

Step.propTypes = {
    indexStep: PropTypes.number.isRequired,
};

function Step({indexStep}) {

    // render
    const renderLineStep = () => {
        return indexStep === 1 ? "active left" : indexStep === 2 ? "active left right" : "";
    }

    return (
        <WidgetContent className = "d-flex">
            <WidgetStep className = {indexStep >= 0 ? "active" : ""}>
                <div className="dot"></div>
                <div className="title">Cài đặt thông tin cửa hàng</div>
            </WidgetStep>
            <WidgetStep className = {renderLineStep()}>
                <div className="dot"></div>
                <div className="title">Cài đặt vận chuyển</div>
            </WidgetStep>
            <WidgetStep className = {indexStep === 2 ? "active" : ""}>
                <div className="dot"></div>
                <div className="title">Cài đặt đăng bán sản phẩm</div>
            </WidgetStep>
        </WidgetContent>
    );
}

export default Step;