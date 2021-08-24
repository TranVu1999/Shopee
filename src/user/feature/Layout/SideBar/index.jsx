import React from 'react';
import styled from 'styled-components';

// Components
import WidgetTitle from './WidgetTitle';
import WidgetLine from './WidgetLine';
import WidgetLabel from './WidgetLabel';

const Title = styled.div`

`;

const Label = styled.div`
    
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
        <div className = "sidebar-content">
            
            {/* Product Category */}
            <div className="mb-20 sidebar-widget">
                <WidgetTitle 
                    icon = {"icon_ul"} 
                    title = "Tat ca danh muc"
                />
                {WidgetProductCategory}
            </div>


            {/* Saleroom  */}
            <div className="sidebar-widget">
                <WidgetTitle 
                    icon = {"icon_hourglass"} 
                    title = "Bo loc tim kiem"
                />

                <WidgetLabel title = "Noi Ban"/>
                {WidgetSalerooms}

                <WidgetLine/>

                <WidgetLabel title = "Thuong Hieu"/>
                {WidgetBrand}

                <WidgetLine/>

                <WidgetLabel title = "Danh Gia"/>
                {WidgetRating}

                <WidgetLine/>

                <WidgetLabel title = "Khoang Gia"/>
                {WidgetPrice}

                <WidgetLine/>
                <Button>Xoa Tat Ca</Button>
            </div>
        </div>
    );
}

export default SideBar;