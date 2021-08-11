import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';
import DateBox from './DateBox';

const WidgetContent = styled.div`
    position: relative;

    display: inline-block;
    padding: .25rem .875rem;
    font-size: .875rem;

    border-radius: 4px;
    border: 1px solid ${BorderColor.mainColor};
`;

const WidgetResultLabel = styled.div`
    cursor: pointer;

    svg{
        height: 1rem;
        width: 1rem;
        fill: #999;
    }

    label{
        margin: 0 .5rem 0;
    }
`;

const WidgetTimeOption = styled.div`
    position: absolute;
    left: 0;
    top: 110%;
    display: none!important;

    background-color: #fff;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
`;

const WidgetTimeOptionLeft = styled.div`
    padding: 1rem 0;
    min-width: 7.5rem;
    max-width: 13.75rem;
    border-right: 1px solid ${BorderColor.mainColor};

    ul:last-child{
        border: none;
        padding: 0;
    }
`;

const ListFrameTime = styled.ul`
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    li{
        padding: .25rem .875rem;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover{
            background-color: rgba(0,0,0,.2);
        }
    }

    span.arrow_carrot-right{
        font-size: 1.25rem;
    }
`;

const WidgetTimeOptionRight = styled.div`
    width: 17rem;
    height: 100px;
`;


FrameTime.propTypes = {
    
};

function FrameTime(props) {
    return (
        <WidgetContent>
            <WidgetResultLabel>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.5156954,1 C11.7918378,1 12.0156954,1.22385763 12.0156954,1.5 L12.015,2 L14,2 C14.5522847,2 15,2.44771525 15,3 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,3 C1,2.44771525 1.44771525,2 2,2 L3.991,2 L3.99143991,1.5 C3.99143991,1.22385763 4.21529754,1 4.49143991,1 C4.76758229,1 4.99143991,1.22385763 4.99143991,1.5 L4.991,2 L11.015,2 L11.0156954,1.5 C11.0156954,1.22385763 11.239553,1 11.5156954,1 Z M14,6 L2,6 L2,14 L14,14 L14,6 Z M5.5,11 C5.77614237,11 6,11.2238576 6,11.5 C6,11.7761424 5.77614237,12 5.5,12 L4.5,12 C4.22385763,12 4,11.7761424 4,11.5 C4,11.2238576 4.22385763,11 4.5,11 L5.5,11 Z M8.5,11 C8.77614237,11 9,11.2238576 9,11.5 C9,11.7761424 8.77614237,12 8.5,12 L7.5,12 C7.22385763,12 7,11.7761424 7,11.5 C7,11.2238576 7.22385763,11 7.5,11 L8.5,11 Z M11.5,11 C11.7761424,11 12,11.2238576 12,11.5 C12,11.7761424 11.7761424,12 11.5,12 L10.5,12 C10.2238576,12 10,11.7761424 10,11.5 C10,11.2238576 10.2238576,11 10.5,11 L11.5,11 Z M5.5,8 C5.77614237,8 6,8.22385763 6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4.5,9 C4.22385763,9 4,8.77614237 4,8.5 C4,8.22385763 4.22385763,8 4.5,8 L5.5,8 Z M8.5,8 C8.77614237,8 9,8.22385763 9,8.5 C9,8.77614237 8.77614237,9 8.5,9 L7.5,9 C7.22385763,9 7,8.77614237 7,8.5 C7,8.22385763 7.22385763,8 7.5,8 L8.5,8 Z M11.5,8 C11.7761424,8 12,8.22385763 12,8.5 C12,8.77614237 11.7761424,9 11.5,9 L10.5,9 C10.2238576,9 10,8.77614237 10,8.5 C10,8.22385763 10.2238576,8 10.5,8 L11.5,8 Z M3.991,3 L2,3 L2,5 L14,5 L14,3 L12.015,3 L12.0156954,3.5 C12.0156954,3.77614237 11.7918378,4 11.5156954,4 C11.239553,4 11.0156954,3.77614237 11.0156954,3.5 L11.015,3 L4.991,3 L4.99143991,3.5 C4.99143991,3.77614237 4.76758229,4 4.49143991,4 C4.21529754,4 3.99143991,3.77614237 3.99143991,3.5 L3.991,3 Z"></path></svg>

                <label>trong 7 ngày qua : </label>
                <span>04-08-2021 - 10-08-2021 (GMT+07)</span>
            </WidgetResultLabel>

            <WidgetTimeOption className="d-flex">
                <WidgetTimeOptionLeft>
                    <ListFrameTime>
                        <li>Thời gian báo cáo</li>
                        <li>Hôm qua</li>
                        <li>Trong 7 ngày qua</li>
                        <li>Trong 30 ngày qua</li>
                    </ListFrameTime>

                    <ListFrameTime>
                        <li className="d-flex align-items-center justify-content-between">
                            <span>Theo ngày</span>
                            <span aria-hidden="true" className="arrow_carrot-right"></span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            <span>Theo tuần</span>
                            <span aria-hidden="true" className="arrow_carrot-right"></span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            <span>Theo tháng</span>
                            <span aria-hidden="true" className="arrow_carrot-right"></span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                            <span>Theo năm</span>
                            <span aria-hidden="true" className="arrow_carrot-right"></span>
                        </li>
                        
                    </ListFrameTime>
                </WidgetTimeOptionLeft>

                <WidgetTimeOptionRight>
                    <DateBox/>
                </WidgetTimeOptionRight>

            </WidgetTimeOption>


        </WidgetContent>
    );
}

export default FrameTime;