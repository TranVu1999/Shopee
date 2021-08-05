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
            title: "Bạn có đơn hàng đang trên đường giao",
            image: "https://cf.shopee.vn/file/b97bdc4be403e9bc28787eaaea6ec6ed_tn",
            description: "📣Shipper bảo rằng: đơn hàng  của bạn vẫn đang trong quá trình vận chuyển và dự kiến được giao trong 1-2 ngày tới. Vui lòng bỏ qua thông báo này nếu bạn đã nhận được hàng nhé!😊",
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
                <button>Đánh dấu Đã đọc tất cả</button>
            </Header>
            <div>
                {renderNotifications()}
            </div>
        </WidgetContent>
    );
}

export default WidgetListNotification;