import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Models
import {getDaysInMonth} from './../util/DateTime';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div``;

const Header = styled.div`
    padding: .5rem .75rem;
    font-size: 1rem;
    color: #333;
    border-bottom: 1px solid ${BorderColor.mainColor};

    button{
        font-size: 1.5rem;
        color: #999;
    }
`;

const MonthYear = styled.div`
    span:first-child{
        margin-right: .25rem;
    }
`;

const DateOfWeek = styled.div`
    padding: .5rem 1rem;
`;

const ListDate = styled.div`
    padding: .5rem 1rem;

    &>div{
        margin-bottom: .5rem;
    }
`;

const WidgetDateOfMonth = styled.div`
    width: calc(100% / 7);
    text-align: center;
    margin-bottom: .5rem;
`;

const DateOfMonth = styled.div`
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;

    font-size: .875rem;
    text-align: center;

    line-height: 1.5rem;
    border-radius: 4px;

    &:hover{
        background-color: rgba(0,0,0,.2);
    }

    &.active{
        color: #fff;
        background-color: #ee4d2d;
    }
`;

DateBox.propTypes = {
    
};

function DateBox(props) {

    const listDateOfMonth = getDaysInMonth(7, 2021);

    // Render
    const renderListDate = () =>{
        const elm = [];

        const date = new Date("Aug 1, 2021");
        const numericalOrderDate = date.getDay();

        for(let i = 0; i < numericalOrderDate; i++){
            elm.push(
                <WidgetDateOfMonth key={-i}>
                    <DateOfMonth></DateOfMonth>
                </WidgetDateOfMonth>
            )
        }

        for(let item of listDateOfMonth){
            elm.push(
                <WidgetDateOfMonth key={item.getDate()}>
                    <DateOfMonth>{item.getDate()}</DateOfMonth>
                </WidgetDateOfMonth>
            )
        }

        return elm;
    }

    return (
        <WidgetContent>
            <Header className="d-flex align-items-center justify-content-between">
                <div>
                    <button><span aria-hidden="true" className="arrow_carrot-2left"></span></button>
                    <button><span aria-hidden="true" className="arrow_carrot-left"></span></button>
                </div>

                <MonthYear>
                    <span>Tháng 8</span>
                    <span>2021</span>
                </MonthYear>

                <div>
                    <button><span aria-hidden="true" className="arrow_carrot-right"></span></button>
                    <button><span aria-hidden="true" className="arrow_carrot-2right"></span></button>
                </div>
            </Header>

            <DateOfWeek className="d-flex justify-content-between">
                <DateOfMonth>CN</DateOfMonth>
                <DateOfMonth>T2</DateOfMonth>
                <DateOfMonth>T3</DateOfMonth>
                <DateOfMonth>T4</DateOfMonth>
                <DateOfMonth>T5</DateOfMonth>
                <DateOfMonth>T6</DateOfMonth>
                <DateOfMonth>T7</DateOfMonth>
            </DateOfWeek>

            <ListDate className="d-flex flex-wrap">
                {renderListDate()}
            </ListDate>


        </WidgetContent>
    );
}

export default DateBox;