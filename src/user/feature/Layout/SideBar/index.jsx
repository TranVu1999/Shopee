import React from 'react';
import styled from 'styled-components';

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

    background-color: #c7a17a;
    color: #fff;

    border: 1px solid #c7a17a;
    transition: all .3s ease;

    &:hover{
        background-color: #fff;
        color: #c7a17a;
    }
`


function SideBar(props) {
    const {  
        WidgetProductCategory,
        WidgetSalerooms,
        WidgetBrand,
        WidgetRating,
        WidgetPrice
    } = props;

    return (
        <WidgetContent className = "user-sidebar-content">
            
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
                <Button>Xóa tất cả</Button>
            </WidgetSidebar>
        </WidgetContent>
    );
}

export default SideBar;