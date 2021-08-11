import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import LabelLine from '../../components/LabelLine';
import SquareStatistics from '../../components/SquareStatistics';
import FrameTime from '../../components/FrameTime';
import SelectBox from '../../components/SelectBox';
import Header from './Header';
import ButtonDownload from './ButtonDownload';

// Theme
import { BorderColor } from '../../theme';


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

    .chart{
        img{
            width: 100%;
        }
    }
`;

const Title = styled.h5`
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: #333;
`;

const WidgetListStatisticsBox = styled.div`
    margin-bottom: 2rem;
    gap: .5rem;

    &>div{
        flex: 1;
    }
`;

const WidgetListLine = styled.div`
    font-size: .875rem;

    label{
        font-size: 1rem;
        color: #333;
    }

    span.number{
        color: red;
    }
`;

const WidgetLineLabel = styled.p`
    position: relative;
    margin-right: 2rem;
    line-height: 1rem;

    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: -.875rem;
        transform: translateY(-50%);

        height: .5rem;
        width: .5rem;
        border-radius: 50%;
        background-color: ${props=>props.background};
    }
`;

Dashboard.propTypes = {
};

function Dashboard(props) {
    // Data 
    const [listSquareStatistics, setListSquareStatistics] = React.useState([
        {
            index: 0,
            type: "Doanh thu",
            value: "₫ 0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng giá trị của các đơn đặt hàng đã đặt (đã thanh toán, chưa thanh toán và thanh toán khi nhận hàng) trong khoảng thời gian đã chọn, bao gồm doanh thu từ các đơn đặt hàng bị hủy và trả lại / hoàn tiền.",
            isActive: false,
            color: "rgb(54, 127, 227)"
        },
        {
            index: 1,
            type: "Đơn hàng",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số đơn đặt hàng đã đặt (đã thanh toán, chưa thanh toán, thanh toán khi nhận hàng) trong khoảng thời gian đã chọn, bao gồm cả đơn đặt hàng bị hủy và trả lại / hoàn tiền.",
            isActive: false,
            color: "rgb(246, 189, 22)"
        },
        {
            index: 2,
            type: "Tỉ lệ chuyển đổi",
            value: "0.00%",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tỉ lệ khách đặt hàng trên tổng số khách truy cập",
            isActive: false,
            color: "rgb(35, 170, 171)"
        },
        {
            index: 3,
            type: "Doanh thu / đơn",
            value: "₫ 0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Doanh thu trung bình của một đơn hàng phát sinh trong khoảng thời gian đã chọn.",
            isActive: false,
            color: "rgb(88, 183, 241)"
        },
        {
            index: 4,
            type: "Lượt truy cập",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số khách truy cập duy nhất đã xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn. Mỗi khách xem một trang sản phẩm nhiều lần được tính là khách truy cập duy nhất.",
            isActive: true,
            color: "rgb(251, 115, 75);"
        },
        {
            index: 5,
            type: "Lượt xem trang",
            value: "0",
            compareSpan: "so với 7 ngày trước",
            compareNumber: "0.00%",
            notify: "Tổng số lượt xem trang chủ và trang sản phẩm của Shop trong khoảng thời gian được chọn (từ Máy tính và Ứng dụng)",
            isActive: false,
            color: "rgb(148, 95, 185)"
        }
    ]);
    const [listTypeInvoice, setListTypeInvoice] = React.useState({
        listTypeInvoice: [
            "Tất Cả Đơn", "Đơn Đã Xác Nhận", "Đơn Đã Thanh Toán"
        ],
        indexSelected: 0
    });

    // Handle event
    const onHandleActive = index =>{
        let newArr = [...listSquareStatistics];
        newArr[index] = {...newArr[index], isActive: !newArr[index].isActive};

        const lengthActive = newArr.filter(item => item.isActive).length;
        if(lengthActive >= 1 && lengthActive <= 4){
            setListSquareStatistics(newArr);
        }   
    }

    const onHandleSelectOption = index =>{
        if(index !== listTypeInvoice.indexSelected) setListTypeInvoice({
            ...listTypeInvoice, 
            indexSelected: index
        });
    }

    // render
    const renderListSquareStatistics = () =>{
        return listSquareStatistics.map((item, index) =>{
            return (
                <div 
                    key = {item.type}
                ><SquareStatistics 
                    info = {item} 
                    active = {item.isActive} 
                    colorActive={item.color}
                    handleActive = {onHandleActive}
                /></div>
            );
        })
    }

    return (
        <WidgetContent>
            
            <Header>
                <div className="d-flex">
                    <div className="mr-4">
                        <span className="mr-2">Khung Thời Gian</span>
                        <FrameTime/>
                    </div>

                    <div>
                        <span className="mr-2">Loại Đơn Hàng</span>
                        <SelectBox 
                            listOption = {listTypeInvoice.listTypeInvoice}
                            indexSelected={listTypeInvoice.indexSelected}
                            handleSelectOption={onHandleSelectOption}
                        />
                    </div>
                </div>

                <ButtonDownload/>
            </Header>
            

            <ImportantIndicator>
                <Title>Chỉ số quan trọng</Title>

                <WidgetListStatisticsBox className="d-flex">{renderListSquareStatistics()}
                </WidgetListStatisticsBox>

                <LabelLine listLine={listSquareStatistics}/>

                <div className="chart">
                    <img src="https://apexcharts.com/wp-content/uploads/2018/01/line-chart-zoomable-timeseries.svg" alt="chart" />
                </div>
            </ImportantIndicator>
        </WidgetContent>
    );
}

export default Dashboard;