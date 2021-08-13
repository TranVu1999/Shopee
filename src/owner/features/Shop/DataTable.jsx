import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

// Images
import emptyDataImage from './../../assets/image/empty-data.png';

const WidgetContent = styled.div`
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Header = styled.div`
    background-color: #f6f6f6;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &>div{
        padding: .5rem 1rem;
    }

    .type-report{
        width: 8rem;
    }

    .time, .account{
        width: 10rem;
    }

    .action{
        width: 10.875rem;
    }
`;

const Body= styled.div`
    min-height: 200px;
`;

const WidgetEmptyData = styled.div`
    padding: 4rem 0;
`;

DataTable.propTypes = {
    
};

function DataTable(props) {
    return (
        <WidgetContent>
            <Header className="d-flex align-items-center">
                <div className="type-report">Loại báo cáo</div>
                <div className="time">Thời gian yêu cầu</div>
                <div className="account">Tài khoản yêu cầu</div>
                <div className="flex-fill name-report">Tên báo cáo</div>
                <div className="action">Hoạt Động</div>
            </Header>

            <Body>
                <WidgetEmptyData className="text-center">
                    <img src={emptyDataImage} alt="empty data" />
                    <br />
                    <span>Không có dữ liệu</span>
                </WidgetEmptyData>
            </Body>
        </WidgetContent>
    );
}

export default DataTable;