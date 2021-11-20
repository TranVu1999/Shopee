import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PurchaseItem from './Purchase';

// Theme 
import {BorderColor} from "./../../theme";

const WidgetContent = styled.div`
    font-size: 16px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    padding: .5em 1em;
    margin-bottom: 1rem;

    font-size: .875rem;

    color: #212121;
    background: #eaeaea;

    border-radius: 2px;

    span{
        font-size: 1.125rem;
        font-weight: 800;
    }

    input{
        margin-left: 1em;
        flex: 1;
    }
`;

const Tab = styled.div`
    margin-bottom: 1rem;
    border-bottom: 1px solid ${BorderColor.mainColor};
    border-radius: 2px;

    div{
        padding: .75rem 0;
        text-align: center;
        flex: 1;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &.active{
            color: #ee4d2d;
            border-bottom: 2px solid #ee4d2d;
        }
    }
`;


WidgetPurchase.propTypes = {
    listInvoice: PropTypes.array,
};

function WidgetPurchase({listInvoice}) {

    // Data
    const [activeIndex, setActiveIndex] = React.useState(0);

    // Functions
    const onHandleChoseTab = indexTab =>{
        if(indexTab !== activeIndex) setActiveIndex(indexTab);
    }
    
    // render
    const renderListInvoice = () => {
        return listInvoice.map(invoice => {
            return <PurchaseItem key = {invoice._id} invoice = {invoice}/>
        })
    }

    return (
        <WidgetContent>
            <Tab className="d-flex justify-content-between bg-white">
                <div 
                    className={activeIndex === 0 && 'active'}
                    onClick={() => {onHandleChoseTab(0)}}
                >Tất cả</div>
                <div 
                    className={activeIndex === 1 && 'active'}
                    onClick={() => {onHandleChoseTab(1)}}
                >Chờ xác nhận</div>
                <div 
                    className={activeIndex === 2 && 'active'}
                    onClick={() => {onHandleChoseTab(2)}}
                >Chờ lấy hàng</div>
                <div 
                    className={activeIndex === 3 && 'active'}
                    onClick={() => {onHandleChoseTab(3)}}
                >Đang giao</div>
                <div 
                    className={activeIndex === 4 && 'active'}
                    onClick={() => {onHandleChoseTab(4)}}
                >Đã giao</div>
                <div 
                    className={activeIndex === 5 && 'active'}
                    onClick={() => {onHandleChoseTab(5)}}
                >Đã Hủy</div>
            </Tab>
            <Filter>
                <button><span class="icon_search"></span></button>
                <input type="text" placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản phẩm"/>
            </Filter>

            {Array.isArray(listInvoice) && <div className="list-invoice">
                {renderListInvoice()}
            </div>}
            
        </WidgetContent>
    );
}

export default WidgetPurchase;