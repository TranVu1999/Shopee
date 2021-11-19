import React from 'react';
import styled from 'styled-components';

// Theme
import { BorderColor } from './../../theme';

const WidgetContent = styled.div`
    padding: .5rem .875rem;

    background-color: #f6f6f6;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    .product-name{
        flex: 1;
    }

    .product-total{
        min-width: 8rem;
        max-width: 8rem;
    }

    .product-status{
        min-width: 11.55rem;
        max-width: 11.55rem;
    }

    .product-type-transport{
        min-width: 8rem;
        max-width: 8rem;
    }

    .product-active{
        min-width: 7rem;
        max-width: 7rem;
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


function HeaderTable(props) {
    // data
    const [isShowListTypeTransport, setIsShowTypeTransport] = React.useState(false);

    return (
        <WidgetContent className="d-flex align-items-center">
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
        </WidgetContent>
    );
}

export default HeaderTable;