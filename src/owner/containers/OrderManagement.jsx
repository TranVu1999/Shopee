import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

// Components
import TabBox from '../features/Order/TabBox';
import ListOrder from '../features/Order/ListOrder';
import Filter from '../features/Order/Filter';
import { useEffect } from 'react';

// Constant
import * as URL from './../constant/url';
import TitleContent from '../components/TitleContent';

OrderManagement.propTypes = {
    
};

function OrderManagement(props) {
    // Data
    const {alias} = useParams();

    const [tabBox, setTabBox] = React.useState({
        indexActive: 0,
        listTab: [
            {
                title: "Tất cả",
                url: `${URL.PORTAL_SALE_ORDER}all`
            },
            {
                title: "Chờ xác nhận",
                url: `${URL.PORTAL_SALE_ORDER}unpaid`
            },
            {
                title: "Chuẩn bị hàng",
                url: `${URL.PORTAL_SALE_ORDER}toship`
            },
            {
                title: "Chờ đóng gói",
                url: `${URL.PORTAL_SALE_ORDER}toship`
            },
            {
                title: "Chờ lấy hàng",
                url: `${URL.PORTAL_SALE_ORDER}toship`
            },
            
            {
                title: "Đã giao đơn vị vận chuyển",
                url: `${URL.PORTAL_SALE_ORDER}shipping`
            },
            {
                title: "Hết hàng",
                url: `${URL.PORTAL_SALE_ORDER}completed`
            },
            {
                title: "Đang huỷ",
                url: `${URL.PORTAL_SALE_ORDER}cancelled`
            },
            {
                title: "Trả hàng/Hoàn tiền",
                url: `${URL.PORTAL_SALE_ORDER}returnlist`
            },
            {
                title: "Hoàn thành",
                url: `${URL.PORTAL_SALE_ORDER}returnlist`
            }
        ]
    });

    // handle event
    const onHandleChoseTab = index => {
        if(index !== tabBox.indexActive) {
            setTabBox({...tabBox, indexActive: index});
        }
    }


    return (
        <section className="order-management-page">
            <TitleContent 
                title="Quản lý đơn hàng"
                subTitle="Vui lòng hoàn thành các hóa đơn của bạn!"
            />

            <TabBox tabBox = {tabBox} onChoseTab = {onHandleChoseTab}/>

            <Filter hasTab = {alias === "toship" || alias === "cancelled"}/>

            <ListOrder/>
        </section>
    );
}

export default OrderManagement;