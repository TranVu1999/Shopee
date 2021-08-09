import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    position: relative;
    padding: .25rem .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Result = styled.div`
    label{
        margin-bottom: 0;
        color: #333;
    }

    span{
        color: #999;
        margin-right: .625rem;
    }
`;

const DatePickerRange = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const DatePicker = styled.div`
    width: 17rem;
    min-height: 100px;
    background-color: #fff;
`;

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

const DateOfMonth = styled.div`
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

RangeDateBox.propTypes = {
    
};

function RangeDateBox(props) {
    return (
        <WidgetContent>
            <Result>
                <span className="icon_calendar"></span>
                <label> 2021/07/10 – 2021/08/09</label>
            </Result>

            <DatePickerRange className="d-flex">
                <DatePicker>
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

                    <ListDate >
                        <div className="d-flex justify-content-between">
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth>1</DateOfMonth>
                            <DateOfMonth>2</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>3</DateOfMonth>
                            <DateOfMonth>4</DateOfMonth>
                            <DateOfMonth>5</DateOfMonth>
                            <DateOfMonth>6</DateOfMonth>
                            <DateOfMonth>7</DateOfMonth>
                            <DateOfMonth>8</DateOfMonth>
                            <DateOfMonth>9</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>10</DateOfMonth>
                            <DateOfMonth>11</DateOfMonth>
                            <DateOfMonth>12</DateOfMonth>
                            <DateOfMonth>13</DateOfMonth>
                            <DateOfMonth>14</DateOfMonth>
                            <DateOfMonth>15</DateOfMonth>
                            <DateOfMonth>16</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>17</DateOfMonth>
                            <DateOfMonth>18</DateOfMonth>
                            <DateOfMonth>19</DateOfMonth>
                            <DateOfMonth>20</DateOfMonth>
                            <DateOfMonth>21</DateOfMonth>
                            <DateOfMonth>22</DateOfMonth>
                            <DateOfMonth>23</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>24</DateOfMonth>
                            <DateOfMonth>25</DateOfMonth>
                            <DateOfMonth>26</DateOfMonth>
                            <DateOfMonth>27</DateOfMonth>
                            <DateOfMonth>28</DateOfMonth>
                            <DateOfMonth>29</DateOfMonth>
                            <DateOfMonth>30</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>31</DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                        </div>
                    </ListDate>
                    

                </DatePicker>
                <DatePicker>
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

                    <ListDate >
                        <div className="d-flex justify-content-between">
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth>1</DateOfMonth>
                            <DateOfMonth>2</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>3</DateOfMonth>
                            <DateOfMonth>4</DateOfMonth>
                            <DateOfMonth>5</DateOfMonth>
                            <DateOfMonth>6</DateOfMonth>
                            <DateOfMonth>7</DateOfMonth>
                            <DateOfMonth>8</DateOfMonth>
                            <DateOfMonth>9</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>10</DateOfMonth>
                            <DateOfMonth>11</DateOfMonth>
                            <DateOfMonth>12</DateOfMonth>
                            <DateOfMonth>13</DateOfMonth>
                            <DateOfMonth>14</DateOfMonth>
                            <DateOfMonth>15</DateOfMonth>
                            <DateOfMonth>16</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>17</DateOfMonth>
                            <DateOfMonth>18</DateOfMonth>
                            <DateOfMonth>19</DateOfMonth>
                            <DateOfMonth>20</DateOfMonth>
                            <DateOfMonth>21</DateOfMonth>
                            <DateOfMonth>22</DateOfMonth>
                            <DateOfMonth>23</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>24</DateOfMonth>
                            <DateOfMonth>25</DateOfMonth>
                            <DateOfMonth>26</DateOfMonth>
                            <DateOfMonth>27</DateOfMonth>
                            <DateOfMonth>28</DateOfMonth>
                            <DateOfMonth>29</DateOfMonth>
                            <DateOfMonth>30</DateOfMonth>
                        </div>
                        <div className="d-flex justify-content-between">
                            <DateOfMonth>31</DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                            <DateOfMonth></DateOfMonth>
                        </div>
                    </ListDate>
                </DatePicker>
            </DatePickerRange>
            
        </WidgetContent>
    );
}

export default RangeDateBox;