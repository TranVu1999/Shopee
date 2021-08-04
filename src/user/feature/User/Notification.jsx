import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BorderColor } from '../../theme';

const WidgetContent = styled.div`
    cursor: pointer;
`;

const Thumbnail = styled.div`
    margin-right: 1.25rem;
    height: 5rem;
    width: 5rem;
    background-image: url(${props=>props.image});
`;

const WidgetText = styled.div`
    margin-right: 1.25rem;
    font-size: .875rem;
    color: rgba(0, 0, 0, .54);
    flex: 1;
    line-height: 1.25rem;

    h5{
        margin: 0 0 .625rem;
        font-size: 1rem;
        font-weightL 400;
        color: rgba(0,0,0,.8);
    }

    .time{
        font-size: .875rem;

        span{
            font-size: 1.5rem;
        }
    }
`;

const WidgetStones = styled.div`
    opacity: 0;
    overflow: hidden;
    transition: height .4s cubic-bezier(.4,0,.2,1),opacity .4s cubic-bezier(.4,0,.2,1);
    height: 0;

    &.active{
        opacity: 1;
        overflow: visible;
        height: auto;
    }
`;

const StoneItem = styled.div`
    .dot{
        position: relative;
        margin-right: 1.25rem;
        height: 5rem;
        width: 5rem;
        padding-bottom: 1rem;

        box-sizing: content-box;

        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);

            display: block;
            height: 100%;
            width: 1px;
            background-color: #f8f8f8;
        }

        &:after{
            content: "";
            position: absolute;
            top: .5rem;
            left: 50%;
            transform: translateX(-50%);

            display: block;
            height: .5rem;
            width: .5rem;

            background-color: #f8f8f8;
            border-radius: 50%;
        }
    }
`;

const Control = styled.div`
    font-size: .75rem;
    text-transform: capitalize;

    button{
        padding: 0 .4375rem;
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 2px;

        &:hover{
            color: #ee4d2d;
            border-color: #ee4d2d
        }
    }
    

`;

Notification.propTypes = {
    item: PropTypes.object,
};

Notification.defaultProps = {
    item: {
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
    }
}

function Notification(props) {
    const {
        image, 
        title, 
        description, 
        time, 
        stones
    } = props.item;
    
    const [isShowStones, setIsShowStones] = React.useState(false);

    // Render
    const renderStones = () =>{
        if(stones){
            return stones.map(item =>{
                return (
                    <StoneItem key={item.title} className="d-flex">
                        <div className="dot"></div>
                        <WidgetText>
                            <h5>{item.title}</h5>
                            <div>{item.description}</div>
                            <div className="mt-1 time">{item.time}</div>
                        </WidgetText>
                    </StoneItem>
                );
            });
        }
        return null;
        
    }

    return (
        <WidgetContent>
            <div className="d-flex mb-3">
                <Thumbnail className="bg-image" image = {image}/>
                <WidgetText>
                    <h5>{title}</h5>
                    <div>{description}</div>
                    <div className="mt-1 d-flex align-items-center time">
                        {time}
                        {stones && stones.length > 0 ? <span       className="arrow_carrot-down" 
                        onClick = {() =>{setIsShowStones(!isShowStones)}}></span> : ""}
                        
                    </div>
                </WidgetText>

                <Control>
                    <button>Xem Chi tiết đơn hàng</button>
                </Control>
            </div>
            

            <WidgetStones className={isShowStones ? "active" : ""}>{renderStones()}</WidgetStones>
        </WidgetContent>
    );
}

export default Notification;