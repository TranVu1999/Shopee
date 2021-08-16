import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SearchMoreOptionBox from '../../components/SearchMoreOptionBox';

// Theme
import {BorderColor} from './../../theme';
import InputNumber from '../../components/InputNumber';

const WidgetContent= styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

const Row = styled.div`
    margin-bottom: 1.125rem;
    gap: 2rem;
`;

const WidgetInput = styled.div`
    width: 50%;

    label{
        width: 4.6875rem;
        margin: 0 1rem 0 0;
        text-align: right;
        color: #333;
    }
`;

const InputTypeGoods = styled.div`
    
`;

const WidgetInputSelectedGoodsResult = styled.div`
    padding: .25rem .875rem;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
    cursor: pointer;

    .place-holder{

    }

    .result-selected{
        color: #333;
    }

    button{
        font-size: 1.125rem;
        color: #999;
    }
`;

const WidgetRangeNumber = styled.div`
    &>span{
        margin: 0 .5rem;
        width: .5rem;
        height: .0625rem;
        background-color: ${BorderColor.mainColor};
    }
`;

const Button = styled.button`
    padding: .25rem .875rem;
    margin-right: .5rem;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const HighlightButton = styled(Button)`
    color: #fff;
    background-color: #ee4d2d;
    border-color: #ee4d2d;
`;


Filter.propTypes = {
    
};

function Filter(props) {
    // data
    const [listOption, setListOption] = React.useState({
        indexSelected: 0,
        listOption: [
            "Tên sản phẩm", 
            "SKU sản phẩm",
            "SKU phân loại",
            "Phân loại hàng", 
            "Mã sản phẩm", 
        ]
    });

    // handle event
    const handleChoseTypeSearch = indexSelected =>{
        if(indexSelected !== listOption.indexSelected){
            setListOption({...listOption, indexSelected});
        }
        
    }

    return (
        <WidgetContent>
            <Row className="d-flex">
                <WidgetInput className="" >
                    <SearchMoreOptionBox 
                        listOptions={listOption.listOption}
                        indexSelected={listOption.indexSelected}
                        handleSelected = {handleChoseTypeSearch}
                    />
                </WidgetInput>
                
                <WidgetInput className="d-flex align-items-center">
                    <label>Danh mục</label>

                    <InputTypeGoods className="flex-fill">

                        <WidgetInputSelectedGoodsResult className="d-flex align-items-center justify-content-between">
                            <span className="place-holder">Chọn ngành hàng</span>
                            {/* <label className="result-selected"></label> */}
                            <button class="icon icon-pencil"></button>
                        </WidgetInputSelectedGoodsResult>
                        
                    </InputTypeGoods>
                </WidgetInput>
            </Row>

            <Row className="d-flex">
                <WidgetInput className="d-flex align-items-center">
                    <label>Kho hàng</label>

                    <WidgetRangeNumber className="d-flex align-items-center">
                        <InputNumber/>
                        <span></span>
                        <InputNumber/>
                    </WidgetRangeNumber>
                </WidgetInput>

                <WidgetInput className="d-flex align-items-center">
                    <label>Đã bán</label>

                    <WidgetRangeNumber className="d-flex align-items-center">
                        <InputNumber/>
                        <span></span>
                        <InputNumber/>
                    </WidgetRangeNumber>
                </WidgetInput>
            </Row>
            
            <Row className="mt-4">
                <HighlightButton>Tìm</HighlightButton>
                <Button>Nhập Lại</Button>
            </Row>
            
        </WidgetContent>
    );
}

export default Filter;