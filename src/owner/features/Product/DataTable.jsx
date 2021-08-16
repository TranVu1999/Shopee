import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CheckBox from './../../components/CheckBox';
import NoData from './../../components/NoData';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: 0 1.5rem;
    font-size: .875rem;
    border-radius: 4px;
`;

const Header = styled.div`
    padding: .625rem .875rem;

    background-color: #F6F6F6;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px 4px 0 0;
    word-break: break-all;
    gap: 1.25rem;

    .product-action{
        width: 6.625rem;
    }

    .product-sold{
        width: 4.625rem;
    }

    .product-store{
        width: 5.875rem;
    }

    .product-price{
        width: 7.25rem;
    }

    .product-classify{
        width: 5.75rem;
    }

    .product-sku-classify{
        width: 3.5rem;
    }

    .sort-button{
        margin-left: .125rem;

        button{
            color: #999;
            line-height: 0;
        }
    }
`;

const Body = styled.div`
    border: 1px solid ${BorderColor.mainColor};
    border-top: none;
    border-radius: 0 0 4px 4px;
`;

DataTable.propTypes = {
    
};

function DataTable(props) {
    return (
        <WidgetContent>
            <Header className="d-flex align-items-center">
                <div className="check-box"><CheckBox/></div>
                <div className="flex-fill product-name">Tên sản phẩm</div>
                <div className="product-sku-classify">SKU phân loại</div>
                <div className="product-classify">Phân loại hàng</div>
                <div className="d-flex align-items-center product-price">
                    Giá
                    <div className="d-flex flex-column justify-content-center align-items-center sort-button ">
                        <button ><span aria-hidden="true" className="arrow_triangle-up"></span></button>
                        <button ><span aria-hidden="true" className="arrow_triangle-down"></span></button>
                    </div>
                </div>
                <div className="d-flex align-items-center product-store">
                    Kho hàng
                    <div className="d-flex flex-column justify-content-center align-items-center sort-button ">
                        <button ><span aria-hidden="true" className="arrow_triangle-up"></span></button>
                        <button ><span aria-hidden="true" className="arrow_triangle-down"></span></button>
                    </div>
                </div>
                <div className="d-flex align-items-center product-sold">
                    Đã bán
                    <div className="d-flex flex-column justify-content-center align-items-center sort-button ">
                        <button ><span aria-hidden="true" className="arrow_triangle-up"></span></button>
                        <button ><span aria-hidden="true" className="arrow_triangle-down"></span></button>
                    </div>
                </div>
                <div className="product-action">Sửa thông tin</div>
            </Header>

            <Body>
                <NoData/>
            </Body>

        </WidgetContent>
    );
}

export default DataTable;
