import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

// Theme
import {BorderColor} from './../../theme';
// components
import LoadingData from './../Layout/LoadingData';
import Purchase from './Purchase';
// icons 
import {orderIcon, paidIcon, truckIcon, receivedIcon, starIcon} from './../../../asset/icon';
// modules
import Number from './../../../utils/formatNumber';
// apis
import invoiceApi from './../../../api/invoiceAPI';

const WidgetContent = styled.div`

`;

const Header = styled.div`
    padding: .75rem 1.5rem .75rem .75rem;
    border-bottom: 1px solid ${BorderColor.mainColor};
    font-size: .875rem;

    a {
        span{
            font-size: 1.5rem;
        }

        &:hover{
            color: #ee4d2d;
        }
    }

    .purchase__id{
        padding-right: 1rem;
        border-right: 1px solid ${BorderColor.mainColor};
    }

    .purchase__status{
        padding-left: 1rem;
    }
`;

const StepItem = styled.div`
    width: 8.75rem;
    text-align: center;

    div{
        position: relative;
        width: 3.75rem;
        height: 3.75rem;

        font-size: 2rem;
        font-weight: 800;

        background-color: #fff;

        border: 4px solid #2dc258;
        border-radius: 50%;
        z-index: 1;
    }

    p{  
        margin: 1.125rem 0 0rem;
        font-size: .875rem;
        text-transform: capitalize;
        color: rgba(0,0,0,.8);
        line-height: 20px;
    }

    span{
        font-size: .75rem;
        color: rgba(0,0,0,.26);
        height: .875rem;
    }
`;

const WidgetButton = styled.div`
    font-size: .75rem;
    background-color: #FFFCF5;

    div{
        padding: 1.125rem 1.5rem;

        &:last-child{
            border-top: 1px solid ${BorderColor.mainColor};
        }
    }
`;

const Button = styled.button`
    padding: .5rem 1rem;
    width: 220px;

    font-size: .875rem;

    color: #555;

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 2px;
`;

const HighlightButton = styled(Button)`
    
    background-color: #ee4d2d;
    color: #fff;
    border-color: #ee4d2d;
`;

const WidgetStones = styled.div`
    font-size: .875rem;

    .line{
        margin-bottom: 1.5rem;
        height: .1875rem; 
        width: 100%;
        background-position-x: -1.875rem;
        background-size: 7.25rem .1875rem;
        background-image: repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,transparent 0,transparent 41px,#f18d9b 0,#f18d9b 74px,transparent 0,transparent 82px);
    }
`;

const DeliveryAddress = styled.div`
    padding: 0 1.5rem;
    flex: 1;
    font-size: .75rem;

    h5{
        margin-bottom: 2.75rem;
        text-transform: capitalize;
        font-size: 1.25rem;

        color: rgba(0,0,0,.8);
        line-height: 24px;
    }

    strong{
        font-size: .875rem;
    }
`;

function WidgetPurchaseDetail(props) {
    const params = useParams();
    const [invoice, setInvoice] = useState(null);
    const invoiceSteps = [
        {
            label: "Đơn hàng đã đặt",
            icon: orderIcon
        }, 
        {
            label: "Đã xác nhận thông tin thanh toán",
            icon: paidIcon
        },
        {
            label: "Đã giao đơn vị vận chuyển",
            icon: truckIcon
        },
        {
            label: "Đơn hàng đã nhận",
            icon: receivedIcon
        },
        {
            label: "Đơn hàng đã giao",
            icon: starIcon
        }
        
    ]

    // effect 
    useEffect(() => {
        const invoiceId = params.id;

        const fetchInvoiceDetail = async () => {
            const res = await invoiceApi.getDetail(invoiceId);
            if(res.success) {
                setInvoice(res.invoice);
            }
        }

        if(invoiceId) {
            fetchInvoiceDetail();
        }
        
    }, []);

    // render
    const renderMilestone = () => {
        const {route} = invoice;

        if(route.length) {
            return route.reverse().map((milestone, index) => {
                const {time, label} = milestone;
                const d = new Date(time);
                const hour = Number.formatToNumber(d.getHours());
                const minute = Number.formatToNumber(d.getMinutes());

                const year = d.getFullYear();
                const month = Number.formatToNumber(d.getMonth() + 1);
                const date = Number.formatToNumber(d.getDate());

                return <div className = "stone-item" key = {index}>
                    <div></div>
                    <div>
                        <div className="time">{`${hour}:${minute} ${date}-${month}-${year}`}</div>
                        {label}
                    </div>
                </div>
            })
        }
    }

    const renderInvoiceStep = () => {
        const {route} = invoice;
        const elm = [];

        if(route.length) {
            invoiceSteps.forEach(step => {
                const stone = route.find(routeItem => step.label === routeItem.label);

                if(stone) {
                    elm.push(<StepItem>
                        <div className="d-inline-flex align-items-center justify-content-center">{step.icon}</div>
                        <p>{step.label}</p>
                        <span>20:32 09-07-2021</span>
                    </StepItem>);
                }
            })
        }

        return elm;
        
    }

    console.log({invoice})

    return (
        <WidgetContent>
            {!invoice && <LoadingData/>}

            {invoice && 
                <>
                    <Header className="bg-white d-flex align-items-center justify-content-between">
                        <Link to="/user/purchase" className="d-flex align-items-center">
                            <span className="arrow_carrot-left"></span>
                            TRỞ LẠI 
                        </Link>

                        <div className="d-flex">
                            <div className="purchase__id">ID ĐƠN HÀNG. {invoice._id}</div>
                            <div className="text-uppercase purchase__status" style={{color: "#ee4d2d"}}>{invoice.statuation}</div>
                        </div>
                    </Header>

                    <div className="bg-white d-flex justify-content-between invoice-steps">
                        {renderInvoiceStep()}
                    </div>
                
                    <WidgetButton>
                        <div className="d-flex align-items-center justify-content-between">
                            <span>Đơn hàng đã bị hủy bởi hệ thống</span>
                            <HighlightButton>Mua lần nữa</HighlightButton>
                        </div>
                        <div className="text-right">
                            <Button>Liên hệ Người bán</Button>
                        </div>
                    </WidgetButton>

                    <WidgetStones className="bg-white mb-3">
                        <div className="line"></div> 
                        <div className="d-flex">
                            <DeliveryAddress>
                                <h5>Địa chỉ nhận hàng</h5>

                                <div>
                                    <strong>{invoice.receivedAddress.fullname}</strong>
                                    <br />
                                    <span>(+84) {invoice.receivedAddress.phoneNumber}</span> <br />
                                    <span>{invoice.receivedAddress.houseNumber}, {invoice.receivedAddress.ward}, {invoice.receivedAddress.district}, {invoice.receivedAddress.province}</span>
                                </div>
                            </DeliveryAddress>

                            <div className="invoice-stones">
                                <div className="text-right">
                                    <span>Nhanh</span><br />
                                    <span>VN010428778127</span>
                                </div>
                                <div>{renderMilestone()}</div>
                                
                            </div>
                        </div>
                    </WidgetStones>

                    <Purchase full invoice = {invoice}/>
                </>
            }
        </WidgetContent>
    );
}

export default WidgetPurchaseDetail;