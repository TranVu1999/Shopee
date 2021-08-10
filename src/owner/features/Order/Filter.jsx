import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import { BorderColor } from './../../theme';
import RangeDateBox from '../../components/RangeDateBox';
import SelectBox from '../../components/SelectBox';

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

const Button = styled.button`
    padding: 0 1.25rem;
    margin: 0 1rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
    color: #333;
`;

const ButtonHamburger = styled(Button)`
    margin: 0;
    padding: 0 .5rem;
    font-size: 1.5rem;
    color: #999;
`;

const Tab = styled.div`
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    div{
        position: relative;
        padding: .375rem 1.125rem;
        margin-right: .25rem;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border: 1px solid ${BorderColor.mainColor};
        border-bottom: none;

        cursor: pointer;

        &.active{
            font-weight: 600;
            color: #fff;
            background-color: #ee4d2d;
            border-color: #ee4d2d;
        }
    }
`;

const Title = styled.div`
    position: relative;
    padding: 1.125rem 1.5rem;
    color: #333;
    z-index: 9;

    h4{
        font-size: 1.375rem;
        color: #333;
        font-weight: 600;
    }

    button{
        height: 2.5rem;
        min-width: 5rem;
        padding: 0 1rem;
        margin-left: 1rem;

        font-weight: 600;
        font-size: .875rem;

        color: #fff;
        background-color: #ee4d2d;

        border-color: #ee4d2d;
        border-radius: 4px;

        span{
            margin-right: .5rem;
        }
    }
`;

const HeaderList = styled.div`
    padding: .5rem .875rem;

    background-color: #f6f6f6;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    .product-name{
        flex: 1;
    }

    .product-total, .product-name, .product-status, .product-type-transport{
        margin-right: 1rem;
    }

    .product-total{
        min-width: 6rem;
        max-width: 6rem;
    }

    .product-status{
        min-width: 11.375rem;
        max-width: 11.375rem;
    }

    .product-type-transport{
        min-width: 9rem;
        max-width: 9rem;
    }

    .product-active{
        min-width: 10.5rem;
        max-width: 10.5rem;
    }
`;

const DropDown = styled.div`
    position: relative;
`;

const ResultSelected = styled.div`
    position: relative;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;

    cursor: pointer;

    span{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
    }
`;

const WidgetOptions = styled.div`
    position: absolute;
    top: 130%;
    left: 0;
    width: 100%;
    padding: .125rem 0;

    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-top: none;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;


    div{
        padding: .5rem .875rem;
        cursor: pointer;
        line-height: 1rem;

        &:hover{
            background-color: rgba(0,0,0,.2);
        }
    }
`;

Filter.propTypes = {
    
};

function Filter(props) {
    // Data
    const [indexOpenTab, setIndexOpenTab] = useState(0);
    const [selectInfo, setSelectInfo] = useState({
        indexSelected: 0,
        listOption: [
            "Ngày xác nhận đặt đơn giảm dần",
            "Ngày xác nhận đặt đơn tang dần"
        ]
    });
    const [isShowListTypeTransport, setIsShowTypeTransport] = useState(false);

    // Handle event
    const handleChoseTab = index =>{
        if(indexOpenTab !== index) setIndexOpenTab(index);
    }

    return (
        <WidgetContent >
            <div className="d-flex align-items-center justify-content-between mb-5 position-relative" style={{zIndex: 100}}>
                <Search className="d-flex">
                    <input className="flex-fill" type="text" placeholder="Tìm đơn hàng"/>
                    <button><span aria-hidden="true" className="icon_search"></span></button>
                </Search>

                <WidgetDate className="d-flex align-items-center">
                    <span>Ngày đặt hàng</span>
                    <RangeDateBox/>
                    <Button className="align-self-stretch">Xuất</Button>
                    <ButtonHamburger className="align-self-stretch">
                        <span aria-hidden="true" className="icon_menu"></span>
                    </ButtonHamburger>
                </WidgetDate>
            </div>
            
            <Tab className="d-flex">
                <div 
                    className = {indexOpenTab === 0 && "active"}
                    onClick = {() => {handleChoseTab(0)}}
                >Tất cả</div>

                <div 
                    className = {indexOpenTab === 1 && "active"}
                    onClick = {() => {handleChoseTab(1)}}
                >Chưa xử lý</div>

                <div 
                    className = {indexOpenTab === 2 && "active"}
                    onClick = {() => {handleChoseTab(2)}}
                >Đã xử lý</div>
            </Tab>
            
            <Title className="d-flex align-items-center justify-content-between">
                <h4>29 Đơn hàng</h4>

                <div className="d-flex align-items-center justify-content-end flex-fill">
                    <span className="mr-3">Sắp xếp theo</span>

                    <SelectBox 
                        listOption={selectInfo.listOption}
                        indexSelected = {selectInfo.indexSelected}
                        handleSelectOption = {index => setSelectInfo({...selectInfo, indexSelected: index})}
                    />

                    <button><span aria-hidden="true" className="icon_creditcard"></span>Giao Hàng Loạt</button>
                </div>
            </Title>

            <HeaderList className="d-flex align-items-center">
                <div className="product-name">Sản phẩm</div>
                <div className="product-total">Tổng cộng</div>
                <div className="product-status">Trạng thái | Đếm ngược</div>
                <div className="product-type-transport">
                    <DropDown>
                        <ResultSelected
                            onClick = {() => setIsShowTypeTransport(!isShowListTypeTransport)}
                        >
                            Vận Chuyển 
                            <span aria-hidden="true" className="arrow_carrot-down"></span>
                        </ResultSelected>

                        <WidgetOptions style = {{display: isShowListTypeTransport ? "block" : "none"}}>
                            <div>BEST Express</div>
                            <div>Giao Hàng Tiết Kiệm</div>
                            <div>Giao Hàng Nhanh</div>
                            <div>NowShip</div>
                            <div>Ninja Van</div>
                            <div>Viettel Post</div>
                            <div>VNPost Nhanh</div>
                        </WidgetOptions>
                    </DropDown>
                </div>
                <div className="product-active">Thao tác</div>
            </HeaderList>

        </WidgetContent>
    );
}

export default Filter;