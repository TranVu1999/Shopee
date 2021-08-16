import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components 
import InputBox from './../../components/InputBox';
import RangeDateBox from './../../components/RangeDateBox';
import TabBoxButton from './../../components/TabBoxButton';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    margin-bottom: 1.5rem;
    padding: 2rem 1.5rem;
    font-size: .875rem;
`;

const FormFilter = styled.div``;

const InputGroup = styled.div`
    margin: 0 2rem 2rem 0;

    &>label{
        margin: 0 .625rem 0 0;
        width: 7.125rem;
        text-align: right;
        line-height: 1rem;
    }

    &>div{
        width: 12rem;
    }
`;

const Button = styled.button`
    margin: 0 .5rem;
    padding: .375rem 1.5rem;

    color: #333;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const HighlightButton = styled(Button)`
    color: #fff;
    background-color: #ee4d2d;
    border-color: #ee4d2d;
`;

const GroupButton = styled.div`
    margin-top: 1.5rem;
    color: #333;

    button{
        position: relative;
        margin-right: -1px;
        padding: .25rem 1.125rem;
        border: 1px solid ${BorderColor.mainColor};

        z-index: 0;

        &:first-child{
            border-radius: 4px 0 0 4px;
        }
        &:last-child{
            border-radius: 0 4px 4px 0;
        }

        &.active{
            color: #ee4d2d;
            border-color: #ee4d2d;
            z-index: 1;
        }
    }
`;

RatingFilter.propTypes = {
    
};

function RatingFilter(props) {
    // Data
    const [listTab, setListTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tất cả",
            "Chưa trả lời",
            "Đã trả lời",
        ]
    })
    const [indexActiveButton, setIndexActiveButton] = React.useState(0);

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive !== listTab.indexActive){
            setListTab({...listTab, indexActive});
        }
    }

    const handleChoseButton = index =>{
        if(index !== indexActiveButton) setIndexActiveButton(index);
    }

    return (
        <WidgetContent>
            <FormFilter className="d-flex flex-wrap">
                <InputGroup className="d-flex align-items-center">
                    <label>Tên sản phẩm:</label>
                    <div>
                        <InputBox/>
                    </div>
                </InputGroup>

                <InputGroup className="d-flex align-items-center">
                    <label>Phân loại hàng:</label>
                    <div>
                        <InputBox/>
                    </div>
                </InputGroup>

                <InputGroup className="d-flex align-items-center">
                    <label>Người mua:</label>
                    <div>
                        <InputBox/>
                    </div>
                </InputGroup>
                <InputGroup className="d-flex align-items-center">
                    <label>Thời gian Đánh giá:</label>
                    <div className="w-auto"><RangeDateBox/></div>
                    
                </InputGroup>

                <InputGroup className="w-100">
                    <HighlightButton>Tìm</HighlightButton>
                    <Button>Nhập Lại</Button>
                </InputGroup>
            </FormFilter>

            <TabBoxButton
                listTab = {listTab.listTab}
                indexActive = {listTab.indexActive}
                handleChoseTab = {handleChoseTab}
            />

            <GroupButton>
                <button 
                    className = {indexActiveButton === 0 && "active"}
                    onClick = {() => handleChoseButton(0)}
                >Tất cả</button>
                <button 
                    className = {indexActiveButton === 1 && "active"}
                    onClick = {() => handleChoseButton(1)}
                >5 Sao</button>
                <button 
                    className = {indexActiveButton === 2 && "active"}
                    onClick = {() => handleChoseButton(2)}
                >4 Sao</button>
                <button 
                    className = {indexActiveButton === 3 && "active"}
                    onClick = {() => handleChoseButton(3)}
                >3 Sao</button>
                <button 
                    className = {indexActiveButton === 4 && "active"}
                    onClick = {() => handleChoseButton(4)}
                >2 Sao</button>
                <button 
                    className = {indexActiveButton === 5 && "active"}
                    onClick = {() => handleChoseButton(5)}
                >1 Sao</button>
            </GroupButton>

        </WidgetContent>
    );
}

export default RatingFilter;