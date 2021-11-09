import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContainer = styled.div`
    flex: 1;

    .skeleton {
        width: 100%;
        height: 72px;
        margin-right: 24px;
    }
`;

const WidgetStatisticsItem = styled.div`
    width: 33.333333%;
    font-size: .875rem;
    line-height: 36px;
`;

StatisticsStore.propTypes = {
    store: PropTypes.object,
};

StatisticsStore.defaultProps = {
    store: null
}

function StatisticsStore(props) {
    const {store} = props;

    // render
    const renderJoinedDate = () => {
        return "5 tháng trước"
    }

    return (
        <WidgetContainer className = "ml-5 d-flex flex-wrap">
            {!store && <div className="skeleton"></div>}

            {store && <>
                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Đánh giá: <span>{store.rating}</span>
                    </div>
                </WidgetStatisticsItem>

                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Tỉ lệ phản hồi: <span>{store.responseRate}%</span>
                    </div>
                </WidgetStatisticsItem>
                
                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Tham gia: <span>{renderJoinedDate()}</span>
                    </div>
                </WidgetStatisticsItem>
                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Sản phẩm: <span>{store.amountProduct}</span>
                    </div>
                </WidgetStatisticsItem>
                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Thời gian phản hồi: <span>{store.responseTime}</span>
                    </div>
                </WidgetStatisticsItem>
                <WidgetStatisticsItem>
                    <div className="store__aspect--statistics">
                        Người theo dõi: <span>{store.amountTracker}</span>
                    </div>
                </WidgetStatisticsItem>
            </>}
            
        </WidgetContainer>
    );
}

export default StatisticsStore;