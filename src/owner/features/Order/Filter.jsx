import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import { BorderColor } from './../../theme';
import RangeDateBox from '../../components/RangeDateBox';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

const Search = styled.div`
    padding: .25rem .5rem;
    width: 17.5rem;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    button{
        margin-left: .5rem;
        font-size: 1rem;
        color: #999;
    }
`;

const WidgetDate = styled.div`
    &>span{
        margin-right: 1rem;
    }
`;

const DateBox = styled.div`
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    span{
        display: inline-block;
        width: .875rem;
        height: 2px;

        background-color: #999;
    }

    

    .MuiInput-underline{
        font-size: .875rem;

        &:after, &:before{
            display: none;
        }

        .MuiInput-input{
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }

    
`;


const Button = styled.button``;

Filter.propTypes = {
    
};

function Filter(props) {
    return (
        <WidgetContent 
            className="d-flex align-items-center justify-content-between"
        >
            <Search className="d-flex">
                <input className="flex-fill" type="text" placeholder="Tìm đơn hàng"/>
                <button><span aria-hidden="true" className="icon_search"></span></button>
            </Search>

            <WidgetDate className="d-flex align-items-center">
                <span>Ngày đặt hàng</span>

                <RangeDateBox/>
            </WidgetDate>
        </WidgetContent>
    );
}

export default Filter;