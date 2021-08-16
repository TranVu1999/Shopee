import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

// Components
import TabBox from '../components/TabBox';
import ListOrder from '../features/Order/ListOrder';
import Filter from '../features/Order/Filter';
import { useEffect } from 'react';

// Constant
import * as URL from './../constant/url';

OrderManagement.propTypes = {
    
};

function OrderManagement(props) {
    // Data
    const {alias} = useParams();

    const [tab, setTab] = React.useState({
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
                title: "Chờ lấy hàng",
                url: `${URL.PORTAL_SALE_ORDER}toship`
            },
            {
                title: "Đang giao",
                url: `${URL.PORTAL_SALE_ORDER}shipping`
            },
            {
                title: "Đã giao",
                url: `${URL.PORTAL_SALE_ORDER}completed`
            },
            {
                title: "Đơn huỷ",
                url: `${URL.PORTAL_SALE_ORDER}cancelled`
            },
            {
                title: "Trả hàng/Hoàn tiền",
                url: `${URL.PORTAL_SALE_ORDER}returnlist`
            }
        ]
    });

    return (
        <section className="owner-order-manage">
            <TabBox 
                listTab={tab.listTab}
            />

            <Filter hasTab = {alias === "toship" || alias === "cancelled"}/>

            <ListOrder/>
        </section>
    );
}

export default OrderManagement;