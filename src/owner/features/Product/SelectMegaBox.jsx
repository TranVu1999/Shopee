import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../../theme';

const WidgetContent = styled.div`
    position: relative;
    font-size: .875rem;
`;

const WidgetResultSelected = styled.div`
    position: relative;
    padding: .5rem .875rem;

    border-radius: 4px;
    border: 1px solid ${BorderColor.mainColor};
    cursor: pointer;

    span.arrow_carrot-down{
        position: absolute;
        top: 44%;
        right: 0;
        transform: translate(-50%, -50%);

        font-size: 1.5rem;
        line-height: 0;
    }

    span.result.active{
        color: #333;
    }

    label{
        padding: .125rem .5rem;
        margin: 0 .25rem 0 0;
        background-color: #FAFAFA;
        
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 2px;   
        line-height: 1rem;   
        
        span{
            cursor: pointer;
        }

        svg{
            margin-left: .25rem;
            width: .75rem;
            height: .75rem;
        }
    }
`;

const WidgetDropDown = styled.div`
    position: absolute;
    top: 105%;
    left: 0;

    width: 100%;
    max-height: 0;

    background-color: #fff;

    transition: all .5s linear;
    overflow: hidden;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    z-index: 100;
`;

const WidgetSearch = styled.div`
    padding: .625rem;

    &>div{
        padding: .25rem .875rem;

        border-radius: 4px;
        border: 1px solid ${BorderColor.mainColor};
    }

    input{
        width: 100%;
    }

    span{
        margin-right: .5rem;
    }
`;

const WidgetListOption = styled.div`
    margin-bottom: .5rem;
    max-height: 15rem;
    overflow-y: scroll;
`;

const WidgetOption = styled.div`
    padding: .25rem .625rem;
    cursor: pointer;

    &:hover{
        background-color: rgba(0,0,0,.04);
    }

    &.active{
        color: #ee4d2d;
    }
`;

const WidgetFooter = styled.div`
    padding: .625rem;
    border-top: 1px solid ${BorderColor.mainColor};
`;

const ButtonOpenFormAdd = styled.button`
    width: 100%;
    color: #2673dd;

    span.icon_plus{
        margin-right: .25rem;
        font-size: 1.5rem;
    }
`;

const WidgetFormAddNewItem = styled.div`
    input{
        margin-right: .5rem;
        padding: 0 .5rem;
        width: 100%;

        font-size: .75rem;
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 4px;
    }

    div{
        gap: .25rem;
    }

    button{
        padding: 0 .125rem;
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 4px;
    }

    svg{
        width: 1rem;
        height: 1rem;
        fill: #999;
    }
`;


SelectMegaBox.propTypes = {
    name: PropTypes.string.isRequired,
    listOption: PropTypes.array.isRequired,
    indexSelected: PropTypes.number,
    arrIndexSelected: PropTypes.array,
    limit: PropTypes.number,
    selectedQuantity: PropTypes.number,
    isExtended: PropTypes.bool,

    handleChoseOption: PropTypes.func.isRequired,
};

SelectMegaBox.defaultProps = {
    indexSelected: -1,
    arrIndexSelected: [],
    limit: 0,
    selectedQuantity: 0,
    isExtended: false
};

function SelectMegaBox({
    name,
    listOption, 
    limit,
    indexSelected,
    arrIndexSelected,
    isExtended,
    handleChoseOption
}) {

    // Data
    const [isShowListOption, setIsShowListOption] = React.useState(false);
    const [isOpenFormAddNew, setIsOpenFormAddNew] = React.useState(false);
    const amountSelected = arrIndexSelected.filter(item => item).length;

    // handle event
    const handleChose = index =>{
        if(!handleChoseOption) return;
        handleChoseOption({name, index});
    }

    // render
    const renderListOption = () =>{
        if(limit){
            return listOption.map((item, index) =>{
                return(
                    <WidgetOption 
                        key = {item}
                        onClick = {() => handleChose(index)}
                        className = {indexSelected === index && "active"}
                    >{item}</WidgetOption>
                );
            })
        }

        return listOption.map((item, index) =>{
            return(
                <WidgetOption 
                    key = {item}
                    onClick = {() => handleChose(index)}
                    className = {arrIndexSelected[index] && "active"}
                >{item}</WidgetOption>
            );
        })        
    }

    const renderResultSelected = () =>{
        if(indexSelected === -1 && amountSelected === 0){
            return (<span className="result">Vui lòng chọn</span>)
        }
        
        if(indexSelected !== -1){
            return (<span className="result active">{listOption[indexSelected]}</span>)
        }else{
            let elm = [];
            
            for(let idx in listOption){
                if(arrIndexSelected[idx]){
                    elm.push(
                        <label key = {listOption[idx]}>{listOption[idx]} 
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"></path></svg></span>
                        </label>
                    );
                }
            }

            return elm;
        }
    }

    

    return (
        <WidgetContent>
            <WidgetResultSelected 
                className="d-flex align-items-center justify-content-between"
                onClick = {() => setIsShowListOption(!isShowListOption)}
            >
                <div>
                    {renderResultSelected()}
                </div>
                
                <div>
                    {limit !== 0 && (<span className="mr-4 number">{`${amountSelected}/${limit}`}</span>)}
                    <span aria-hidden="true" className="arrow_carrot-down"></span>
                </div>
            </WidgetResultSelected>

            <WidgetDropDown style = {{maxHeight: isShowListOption ? "345px" : "0px"}}>
                <WidgetSearch>
                    <div className="d-flex align-items-center ">
                        <span aria-hidden="true" className="icon_search"></span>
                        <input type="text" placeholder="Nhập vào"/>
                    </div>
                </WidgetSearch>

                <WidgetListOption>
                    {renderListOption()}
                </WidgetListOption>

                {isExtended && <WidgetFooter>
                    {!isOpenFormAddNew && <ButtonOpenFormAdd 
                        className = "d-flex align-items-center"
                        onClick = {() => setIsOpenFormAddNew(true)}
                    >
                        <span aria-hidden="true" className="icon_plus"></span>
                        <span>Thêm thuộc tính mới</span>
                    </ButtonOpenFormAdd>}
                    

                    {isOpenFormAddNew && <WidgetFormAddNewItem className="d-flex align-items-center">
                        <input type="text" placeholder="Nhập vào"/>

                        <div className="align-self-stretch d-flex align-items-center">
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path></svg></button>

                            <button
                                onClick = {() => setIsOpenFormAddNew(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"></path></svg>
                            </button>
                        </div>
                    </WidgetFormAddNewItem>}
                    
                </WidgetFooter>}

                
            </WidgetDropDown>

        </WidgetContent>
    );
}

export default SelectMegaBox;