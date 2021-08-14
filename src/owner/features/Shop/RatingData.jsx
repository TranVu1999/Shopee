import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Images
import emptyDataImage from './../../assets/image/empty-data.png';

const WidgetContent = styled.div`
    padding: 0 1.5rem;
    font-size: .875rem;
`;

const Header = styled.div`
    padding: .25rem 0;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 4px;

    .information, .replay{
        width: 250px;
    }
`;

const Body = styled.div``;

const WidgetEmptyData = styled.div`
    padding: 3rem 0;
`;


RatingData.propTypes = {
    
};

function RatingData(props) {
    return (
        <WidgetContent>
            <Header className="d-flex">
                <div className="information">Thông tin Sản phẩm </div>
                <div className="flex-fill evaluation-content">Đánh giá của Người mua </div>
                <div className="replay">Trả lời đánh giá của bạn </div>
            </Header>

            <Body>
                <WidgetEmptyData className="text-center">
                    <img src={emptyDataImage} alt="empty data" />
                    <p>Chưa có đánh giá nào dành cho Shop của bạn</p>
                </WidgetEmptyData>
            </Body>
        </WidgetContent>
    );
}

export default RatingData;