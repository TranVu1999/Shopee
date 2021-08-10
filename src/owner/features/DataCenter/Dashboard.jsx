import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SquareStatistics from '../../components/SquareStatistics';

const WidgetContent = styled.div`
    width: 79rem;
    margin: 0 auto;
    padding-top: 1rem;
`;

const ImportantIndicator = styled.section`
    padding: 1.125rem 1.5rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

const Title = styled.h5`
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: #333;
`;

const WidgetListStatisticsBox = styled.div`
    gap: .5rem;

    &>div{
        flex: 1;
    }
`;

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    // Data 
    const listSquareStatistics = [
        {
            index: 0,
            type: "Doanh thu",
            value: "₫ 0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng giá trị của các đơn đặt hàng đã đặt (đã thanh toán, chưa thanh toán và thanh toán khi nhận hàng) trong khoảng thời gian đã chọn, bao gồm doanh thu từ các đơn đặt hàng bị hủy và trả lại / hoàn tiền."
        },
        {
            index: 1,
            type: "Đơn hàng",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số đơn đặt hàng đã đặt (đã thanh toán, chưa thanh toán, thanh toán khi nhận hàng) trong khoảng thời gian đã chọn, bao gồm cả đơn đặt hàng bị hủy và trả lại / hoàn tiền."
        },
        {
            index: 2,
            type: "Tỉ lệ chuyển đổi",
            value: "0.00%",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tỉ lệ khách đặt hàng trên tổng số khách truy cập"
        },
        {
            index: 3,
            type: "Doanh thu / đơn",
            value: "₫ 0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Doanh thu trung bình của một đơn hàng phát sinh trong khoảng thời gian đã chọn."
        },
        {
            index: 4,
            type: "Lượt truy cập",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số khách truy cập duy nhất đã xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn. Mỗi khách xem một trang sản phẩm nhiều lần được tính là khách truy cập duy nhất."
        },
        {
            index: 5,
            type: "Lượt xem trang",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số lượt xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn (từ Máy tính và Ứng dụng)"
        }
    ];
    
    const [listChoseTypeStatistics, setListChoseTypeStatistics] = React.useState([
        {
            isActive: false,
            color: " rgb(54, 127, 227)"
        },
        {
            isActive: false,
            color: "rgb(246, 189, 22)"
        },
        {
            isActive: false,
            color: "rgb(35, 170, 171)"
        },
        {
            isActive: false,
            color: "rgb(88, 183, 241)"
        },
        {
            isActive: true,
            color: "rgb(251, 115, 75);"
        },
        {
            isActive: false,
            color: "rgb(148, 95, 185)"
        },

    ]);

    // Handle event
    const onHandleActive = index =>{
        let newArr = [...listChoseTypeStatistics];
        newArr[index] = {...newArr[index], isActive: !newArr[index].isActive};

        setListChoseTypeStatistics(newArr);
    }

    const renderListSquareStatistics = () =>{
        return listSquareStatistics.map((item, index) =>{
            return (
                <div 
                    key = {item.type}
                ><SquareStatistics 
                    info = {item} 
                    active = {listChoseTypeStatistics[index].isActive} 
                    colorActive={listChoseTypeStatistics[index].color}
                    handleActive = {onHandleActive}
                /></div>
            );
        })
    }

    return (
        <WidgetContent>
            <ImportantIndicator>
                <Title>Chỉ số quan trọng</Title>

                <WidgetListStatisticsBox className="d-flex">{renderListSquareStatistics()}
                </WidgetListStatisticsBox>
            </ImportantIndicator>
        </WidgetContent>
    );
}

export default Dashboard;