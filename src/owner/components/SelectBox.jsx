import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    position: relative;

    min-height: 2rem;
    max-height: 2rem;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const ResultSelected = styled.div`
    position: relative;

    div{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        
        max-width: 240px;
        // min-width: 180px;
        padding: .25rem 2.875rem .25rem .875rem;

        cursor: pointer;
    }

    span{
        position: absolute;
        top: 50%;
        right: .875rem;
        transform: translateY(-50%);
        font-size: 1.5rem;
    }
`;

const WidgetOptions = styled.div`
    position: absolute;
    top: 105%;
    left: 0;

    padding: .25rem 0;
    margin-top: .25rem;
    min-width: 100%;

    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-top: none;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;

    div{
        padding: .25rem .875rem;
        cursor: pointer;
        white-space: nowrap;

        &:hover{
            background-color: rgba(0,0,0,.2);
        }

        &.selected{
            color: #ee4d2d;
        }
    }
`;

SelectBox.propTypes = {
    listOption: PropTypes.array.isRequired,
    indexSelected: PropTypes.number.isRequired,
    handleSelectOption: PropTypes.func,
};

function SelectBox({listOption, indexSelected, handleSelectOption}) {
    //Data
    const [isShowListOption, setIsShowListOption] = React.useState(false);

    // Render
    const renderOptions = () =>{
        return listOption.map((item, index) =>{
            return (
                <div 
                    key = {item}
                    className = {index === indexSelected && "selected"}
                    onClick = {() => handleSelectOption(index)}
                >{item}</div>
            );
        })
    }

    return (
        <WidgetContent className="d-inline-block">
            <ResultSelected>
                <div
                    onClick = {() => setIsShowListOption(!isShowListOption)}
                >{listOption[indexSelected]}</div>

                <span aria-hidden="true" className="arrow_carrot-down"></span>
            </ResultSelected>

            <WidgetOptions 
                style={{display: isShowListOption ? "block" : "none"}}
            >{renderOptions()}
            </WidgetOptions>
        </WidgetContent>
    );
}

export default SelectBox;