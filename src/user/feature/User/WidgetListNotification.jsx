import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';
import Notification from './Notification';

const WidgetContent = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Header = styled.div`
    padding: .75rem 1.5rem;
    font-size: .875em;
    color: rgba(0,0,0,.8);
    border-bottom: 1px solid ${BorderColor.mainColor};

    button:hover{
        color: #ee4d2d;
    }
`;


WidgetListNotification.propTypes = {
    items: PropTypes.array,
};

WidgetListNotification.defaultProps = {
    items: []
}

function WidgetListNotification(props) {
    const [notifications] = React.useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/e4198899d0625a2a85acc81eaadc99a1_tn",
            title: "Parcel Cancelled",
            description: "Parcel VN214297270991P has been cancelled as it was not possible to perform delivery and collect payment. Please note that we will disable your Cash-on-Delivery option once 3 unsuccessful delivery attempts are recorded on our system.",
            time: "13:11 20-07-2021",
            stones: [
                {
                    title: "Order Cancelled",
                    description: "Order 210709FKW10K9Q  has been cancelled as it was not possible to perform delivery and collect payment.",
                    time: "13:51 18-07-2021"
                },
                {
                    title: "Order Cancelled",
                    description: "Order 210709FKW10K9Q  has been cancelled as it was not possible to perform delivery and collect payment.",
                    time: "13:51 18-07-2021"
                }
            ]
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/e4198899d0625a2a85acc81eaadc99a1_tn",
            title: "Parcel Cancelled",
            description: "Parcel VN214297270991P has been cancelled as it was not possible to perform delivery and collect payment. Please note that we will disable your Cash-on-Delivery option once 3 unsuccessful delivery attempts are recorded on our system.",
            time: "13:11 20-07-2021",
            stones: [
                {
                    title: "Order Cancelled",
                    description: "Order 210709FKW10K9Q  has been cancelled as it was not possible to perform delivery and collect payment.",
                    time: "13:51 18-07-2021"
                },
                {
                    title: "Order Cancelled",
                    description: "Order 210709FKW10K9Q  has been cancelled as it was not possible to perform delivery and collect payment.",
                    time: "13:51 18-07-2021"
                }
            ]
        },
        {
            id: 3,
            title: "B???n c?? ????n h??ng ??ang tr??n ???????ng giao",
            image: "https://cf.shopee.vn/file/b97bdc4be403e9bc28787eaaea6ec6ed_tn",
            description: "????Shipper ba??o r????ng: ????n ha??ng  cu??a ba??n v????n ??ang trong qua?? tri??nh v????n chuy????n va?? d???? ki????n ????????c giao trong 1-2 nga??y t????i. Vui lo??ng bo?? qua th??ng ba??o na??y n????u ba??n ??a?? nh????n ????????c ha??ng nhe??!????",
            time: "13:11 20-07-2021"
        }
    ]);

    // Render
    const renderNotifications = () =>{
        return notifications.map(item =>{
            return <Notification key = {item.id} item ={item}/>
        })
    }

    return (
        <WidgetContent className='f-16 bg-white'>
            <Header className="text-right">
                <button>????nh d???u ???? ?????c t???t c???</button>
            </Header>
            <div>
                {renderNotifications()}
            </div>
        </WidgetContent>
    );
}

export default WidgetListNotification;