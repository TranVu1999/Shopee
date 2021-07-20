import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// CSS
import './index.scss';

const Title = styled.h5`
    padding: 2px 15px 2px 0;
    margin-right: 15px;

    font-size: 22px;
    font-weight: 400;

    border-right: 2px solid #d5d5d5;
    line-height: 1;
`;

const Services = styled.div`
    padding-left: 18px;
    margin-right: 20px;

    font-size: 18px;

    color: #333;
`;

TitleMall.propTypes = {
    
};

function TitleMall(props) {
    return (
        <div className = "mb-3 title-mall-content">
            <div className = "d-flex align-items-center justify-content-between">
                <div className = "d-flex align-items-center">
                    <Title>
                        <a href="#/">Coffee Mall</a>
                    </Title>

                    <div className = "d-flex">
                        <Services>7 ngay mien phi tra hang</Services>
                        <Services>Hang chinh hang 100%</Services>
                        <Services>Mien phi van chuyen</Services>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default TitleMall;