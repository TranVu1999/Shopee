import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme 
import {BorderColor} from './../theme';

const WidgetContent = styled.div`
    font-size: .875rem;
    
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const SelectBox = styled.div`
    position: relative;
    padding: .25rem .875rem;
    width: 9.5rem;
    border-right: 1px solid ${BorderColor.mainColor};
`;

const ResultSelected = styled.div`
    cursor: pointer;
    color: #333;

    span:last-child{
        font-size: 1.5rem;
        color: #999;
    }
`;

const OptionsBox = styled.div`
    position: absolute;
    top: 110%;
    left: 0;

    width: 100%;
    padding-bottom: .5rem;
    background-color: #fff;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    div{
        padding: .25rem .875rem;
        cursor: pointer;

        &:hover{
            background-color: rgba(0,0,0,.2);
        }

        &.active{
            color: #ee4d2d;
        }
    }
`;

const InputBox = styled.div`
    padding: .25rem .875rem;

    input{
        width: 100%;
    }
`;

SearchMoreOptionBox.propTypes = {
    listOptions: PropTypes.array.isRequired,
    indexSelected: PropTypes.number.isRequired,
    handleSelected: PropTypes.func,
};

SearchMoreOptionBox.defaultProps = {
    handleSelected: null
}

function SearchMoreOptionBox({listOptions, indexSelected, handleSelected}) {
    // Data
    const [isShowOptions, setIsShowOptions] = React.useState(false);
    const [resultSelected, setResultSelected] = React.useState(0);

    // handle event
    const onHandleSelected = index =>{
        if(!handleSelected) return;
        handleSelected(index);
    }

    // render
    const renderListOption = () =>{
        return listOptions.map((item, index) =>{
            return (
                <div 
                    key = {item}
                    className = {indexSelected === index && "active"}
                    onClick = {() => onHandleSelected(index)}
                >{item}</div>
            );
        });
    }

    return (
        <WidgetContent className="d-flex align-items-center">
            <SelectBox>
                <ResultSelected 
                    className="d-flex align-items-center justify-content-between"
                    onClick = {() => setIsShowOptions(!isShowOptions)}
                >
                    <span>{listOptions[indexSelected]}</span>
                    <span aria-hidden="true" className="arrow_carrot-down"></span>
                </ResultSelected>

                <OptionsBox style={{display: isShowOptions ? "block" : "none"}}>{renderListOption()}</OptionsBox>
                
            </SelectBox>

            <InputBox className="flex-fill">
                <input type="text" placeholder="Nhập vào"/>
            </InputBox>
        </WidgetContent>
    );
}

export default SearchMoreOptionBox;