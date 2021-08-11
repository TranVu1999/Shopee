import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../../theme';
import Checkbox from './../../../components/CheckBox';
import RadioBox from '../../../components/RadioBox';
import LabelLine from '../LabelLine';

const WidgetContent = styled.div`
    font-size: .875rem;
`;

const WidgetTableChoice = styled.div`
    padding: 0 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Row = styled.div`
    padding: 1.125rem 0;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &:last-child{
        border: none;
    }
`;

const Label = styled.div`
    width: 8rem;
    margin-right: 1rem;
    text-align: right;
`;

const WidgetOption = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    width: 100%;
    
    span.label{
        display: flex;
        align-items: center;
    }
`;

const WidgetChart = styled.div`
    padding-top: 5rem;
    min-height: 350px;

    a{
        color: #1379d2;
        margin: 0 .5rem;
    }
`;

StatisticsChart.propTypes = {
    
};

function StatisticsChart(props) {
    return (
        <WidgetContent>
            <WidgetTableChoice>
                <Row className="d-flex">
                    <Label>Nguồn :</Label>
                    <WidgetOption>
                        <div>
                            <span className="label">
                                <RadioBox/>
                                Tất cả
                            </span>
                        </div>
                        <div>
                            <span className="label"> <RadioBox/> Ứng dụng</span>
                        </div>
                        <div>
                            <span className="label"> <RadioBox/> Máy tính</span>
                        </div>
                    </WidgetOption>
                </Row>
                <Row className="d-flex">
                    <Label>Lượt Xem :</Label>
                    <WidgetOption>
                        <div>
                            <span className="label">
                                <Checkbox/>
                                Lượt Xem
                            </span>
                        </div>
                        <div>
                            <span className="label"> <Checkbox/> Số lượt xem trung bình</span>
                        </div>
                        <div>
                            <span className="label"> <Checkbox/> Thời gian xem trung bình</span>
                        </div>
                        <div>
                            <span className="label"> <Checkbox/> Tỉ lệ thoát trang</span>
                        </div>
                    </WidgetOption>
                </Row>
                <Row className="d-flex">
                    <Label>Khách Truy Cập :</Label>
                    <WidgetOption>
                        <div>
                            <span className="label"><Checkbox/> Lượt truy cập</span>
                        </div>
                        <div>
                            <span className="label"> <Checkbox/> Số khách truy cập mới</span>
                        </div>
                        <div>
                            <span className="label"> <Checkbox/> Số khách truy cập hiện tại</span>
                        </div>
                        <div>
                            <span className="label"><Checkbox/> Người theo dõi mới</span>
                        </div>
                    </WidgetOption>
                </Row>
                
            </WidgetTableChoice>

            <LabelLine listLine={[]}/>

            <WidgetChart className="text-center">

                <div>
                    <img src="data:image/png;base64,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" alt="" />
                </div>

                <span>
                    Shop chưa có dữ liệu. Hãy thử 
                    <a href="#/">Tối ưu sản phẩm của bạn</a>
                    hoặc sử dụng 
                    <a href="#/">Công cụ Marketing</a>.
                </span>
            </WidgetChart>
        </WidgetContent>
    );
}

export default StatisticsChart;