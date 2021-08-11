import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BorderColor } from '../../../theme';
import NotifyPopup from '../../../components/NotifyPopup';

const WidgetContent = styled.div`
    font-size: .875rem;
`;

const Header = styled.div`
    padding: .5rem 1.5rem .5rem 11rem;

    display: grid;
    grid-template-columns: repeat(4,25%);
    align-items: center;

    text-align: right;

    color: #fff;
    background: #4788e2;
    border-radius: 4px;
`;

const TableBody = styled.div`
    margin-top: 1rem;
`;

const TableLabel = styled.div`
    width: 10rem;

    color: #fff;
    background-color: #4788e2;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    img{
        width: 2rem;
        margin-bottom: .5rem;
    }
`;

const TableContent = styled.div`
    padding: 0 1.5rem;

    border: 1px solid ${BorderColor.mainColor};
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const TableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4,25%);
    align-items: center;
    padding: 1rem 0;

    text-align: right;
    color: #333;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &:last-child{
        border: none;
    }

    div{
        label{
            margin: 0 .75rem 0 0;
        }

        span{
            font-size: .75rem;
        }
        

        strong{
            font-size: 1.125rem;
            margin-right: 1.125rem;
            font-weight: 600;
        }
    }
`


StatisticsTable.propTypes = {
    
};

function StatisticsTable(props) {
    return (
        <WidgetContent>
            <Header>
                <span></span>
                <span>Tất cả</span>
                <span>Ứng dụng</span>
                <span>Máy tính</span>
            </Header>

            <TableBody className="d-flex align-items-center">
                <TableLabel className="d-flex align-items-center justify-content-center flex-column align-self-stretch">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJVSURBVHgB7ZiLUcMwDIZVJugIYQLKBKQTUCagG8AGMAJMUEZgg7JBywTuBmWDHwm7NIQSS4md9o58d74+nEiyT/r9IBoYGBg4JiNKCICSP2bcrrgV3Mah64Pbmts7t9fRaPRGpwQHPufmoEeevaVjw0EU3FZojxMbdAxkBrlt0R2xMaM+EYdITz8pBZ82KWa+jtgsyIhZhdiJI68wOVizQl1aXjizPMzBzylf8MIkaypBJ5WSCo/wa8LuPQnsBToc5UAC0jhvymP4+nEKOyUpsaSQRuqmnMObvzpD35T8ytzV1xeWAVxE+l+agt8RnnmOPHZFqUFcOicGW7F03GptqWVUrDYaYshAKnsmGT1FLANoLDyLcijSLVbk31gGsIn0l6TnPtK/ptTwrD3FCg+KvQz8WhDjiVKDE13IrIPQOBcWqOR5GPwDdLvYPFuJEMgc+TFt5tpsp1f8oV60jGxY/s8tL7RZB27IIHMGxOaU+iBTKh3lXJzqUD+nvoCXwqLy3aE9q4qtMfUB/MnKoaL36HixVZmIgnKC36vofa1f9F5W7CV+ptc2zLb0lbV37irPLiknIbDG2VTaGYfA3QF7JeUAceX5OsxTPPAFmovfwVAPlnXgIdIvThu3AbxIidYXtL+1PoT0x3arNuD3MTFWSluaTeEWqVQJvwt3V5B1CoPNQ3dEy9rvBaUAe1WRopuE/2ZdnMHXQrUOXOX/nZLJJJWUg+Do2zla6Df87V3a2TYGsAzOWxcc9jJ6TX0TZrDT4QP7gi6ob4LzzjfJyHH+HRj4R3wC9wxZzVrViYoAAAAASUVORK5CYII=" alt="" />
                    <span>Lượt Xem</span>
                </TableLabel>

                <TableContent className="flex-fill align-self-stretch">
                    <TableRow>
                        <div className="text-left">
                            <label>Lượt xem</label>
                            <NotifyPopup content="Tổng số lượt xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn (từ Máy tính và Ứng dụng)"/>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Số lượt xem trung bình</label>
                            <NotifyPopup content="Trung bình số lượt xem trên 1 khách truy cập"/>
                        </div>
                        <div>
                            <strong>0,00</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0,00</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0,00</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Thời gian xem trung bình</label>
                            
                            <NotifyPopup content="Thời gian trung bình một khách truy cập xem trang chủ và trang sản phẩm của Shop."/>
                        </div>
                        <div>
                            <strong>00:00:00</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>00:00:00</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>00:00:00</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Tỉ lệ thoát trang</label>
                            
                            <NotifyPopup content="Tỉ lệ khách truy cập duy nhất vào trang sản phẩm của bạn nhưng rời đi mà không thao tác thêm (ví dụ: đánh giá sản phẩm, v.v.)"/>
                        </div>
                        <div>
                            <strong>0.00% </strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0.00% </strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0.00% </strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                </TableContent>
            </TableBody>

            <TableBody className="d-flex align-items-center">
                <TableLabel className="d-flex align-items-center justify-content-center flex-column align-self-stretch">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgB7diBTYQwFAbgHyc4N6gT6Ag3wm2gG+gGsoE6gW7gCrcBOkHZgHOC53uhRGMk9+gr0Mv1SxqSOyD/K1BagKIoiqIoiqIYENGO2zs3Tz+a8NsOueJwN39Cj5F9HHISwnek5+UY5EB6k3Q9/18RG6yNQ7xRvBpGFYykJ3njEOdQVdUlDC5gwOG3iA8vNtZnwVQAbOEHJ1+Ag4G1gAPsTOfIoQAPA2sBe9h9wiDFMNrxJvaF1PIwegUD6xUQL4hnOTaNMJWI5ZADDvJM09XIBYeRN6qfEN408syCQ22V4WXa7ZAj0t1KNXIUroBXFNBkcwWov/fvKW5BI4XcYi0h+JRl5BjP7ZGWWp2R/laJKWTeKxJ6am5PmMNC4QevSIlPeEfLe9BkU81G+WQNjEu/CKqZqrYAwgq4gKP5UkynV6UtoMXyWs1O2gLWWHjUSIkfg5qW0WlHoJgiZPUl30I9peep76RJU4roRT31nwQd+uH1Gv3C3oW/3chh7a+ttC9uH9z2POC0OEffsYtlxpjjUeMAAAAASUVORK5CYII=" alt="" />
                    <span>Khách Truy Cập</span>
                </TableLabel>

                <TableContent className="flex-fill align-self-stretch">
                    <TableRow>
                        <div className="text-left">
                            <label>Lượt truy cập</label>
                            
                            <NotifyPopup content="Tổng số khách truy cập duy nhất đã xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn. Mỗi khách xem một trang sản phẩm nhiều lần được tính là khách truy cập duy nhất."/>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Số khách truy cập mới</label>
                            
                            <NotifyPopup content="Tổng số khách truy cập duy nhất mới trong khoảng thời gian được chọn. Khách truy cập mới là khách chưa từng xem trang chủ hoặc trang sản phẩm của Shop trong 12 tháng gần nhất tính từ thời gian được chọn."/>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Số khách truy cập hiện tại</label>
                            
                            <NotifyPopup content="Tổng số khách truy cập duy nhất hiện tại trong khoảng thời gian được chọn. Khách truy cập hiện tại là khách đã từng xem trang chủ hoặc trang sản phẩm của Shop trong 12 tháng gần nhất tính từ thời gian được chọn."/>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                    <TableRow>
                        <div className="text-left">
                            <label>Người theo dõi mới</label>
                            
                            <NotifyPopup content="Tổng số người theo dõi mới trong khoảng thời gian được chọn. Nếu một khách truy cập đã theo dõi Shop bạn từ trước nhưng hủy theo dõi trong khoảng thời gian được chọn, số lượng người theo dõi sẽ bị trừ đi 1."/>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                        <div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div><div>
                            <strong>0</strong>
                            <span>0.00%</span>
                        </div>
                    </TableRow>
                </TableContent>
            </TableBody>


        </WidgetContent>
    );
}

export default StatisticsTable;