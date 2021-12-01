import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WidgetContent = styled.div`
    font-size: .875rem;
`;

const WidgetSidebar = styled.div`
    margin-bottom: 2rem;
`;

const Title = styled.h5`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0,0,0,.05);

    h5{
        margin: 0;

        font-size: 1rem;
        font-weight: 700;
        text-transform: capitalize;

        color: rgba(0,0,0,.8);
    }
`;

const Label = styled.div`
    font-size: 15px;
    text-transform: capitalize;
    margin-bottom: 10px;
`;


const Button = styled.button`
    width: 100%;
    padding: 5px 15px;

    background-color: #ee4d2d;
    color: #fff;

    border: 1px solid #ee4d2d;
    transition: all .3s ease;

    &:hover{
        background-color: #fff;
        color: #ee4d2d;
    }
`
SideBar.propTypes = {
    onResetFilter: PropTypes.func,
}

function SideBar({
    WidgetProductCategory,
    WidgetSalerooms,
    WidgetBrand,
    WidgetRating,
    WidgetPrice,
    onResetFilter
}) {

    // handle event
    const onHandleResetFilter = () => {
        if(!onResetFilter) return;
        onResetFilter();
    }

    return (
        <WidgetContent className = "sidebar">
            
            {/* Product Category */}
            <WidgetSidebar>
                <Title>
                    <h5 className = "d-flex align-items-center">
                        <span aria-hidden="true" className = "mr-2 icon_ul" ></span>
                        Tất cả Danh mục
                    </h5>
                </Title>

                {WidgetProductCategory}
            </WidgetSidebar>


            {/* Saleroom  */}
            <WidgetSidebar className="sidebar-widget">
                <Title>
                    <h5 className = "d-flex align-items-center">
                        <span aria-hidden="true" className = "mr-2 icon_hourglass" ></span>
                        Bộ lọc tìm kiếm
                    </h5>
                </Title>

                <Label>Nơi bán</Label>
                {WidgetSalerooms}

                <div className="mt-3 mb-4 line"></div>

                <Label>Thương hiệu</Label>
                {WidgetBrand}

                <div className="mt-3 mb-4 line"></div>

                <Label>Đánh giá</Label>
                {WidgetRating}

                <div className="mt-3 mb-4 line"></div>

                <Label>Khoảng giá</Label>
                {WidgetPrice}

                <div className="mt-3 mb-4 line"></div>
                <Button
                    onClick = {onHandleResetFilter}
                >Xóa tất cả</Button>
            </WidgetSidebar>
        </WidgetContent>
    );
}

export default SideBar;