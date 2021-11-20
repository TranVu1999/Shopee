import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';
import Purchase from './Purchase';

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

const Step = styled.div`
    position: relative;
    padding: 3.5rem 1.5rem;
    
    &:after{
        content: "";
        position: absolute;
        top: 5.375rem;
        left: 50%;
        transform: translate(-50%, -50%);

        width: calc(100% - 8rem);
        height: 4px;
        background-color: #2dc258;
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

const Stones = styled.div`
    flex: 2;
    
    &>div:first-child{
        padding: 0 1.5rem;
        font-size: .75rem;
        line-height: 16px; 
    }


    &>div:last-child{
        position: relative;
        margin-top: 1.5rem;
        padding: .5rem 1.5rem;
        border-left: 1px solid ${BorderColor.mainColor};

        &:after{
            content: '';
            position: absolute;
            top: 50%;
            left: 1.875rem;
    
            transform: translate(-50%, -50%);
            height: calc(100% - 2.5rem);
            width: 1px;
            background-color: #d8d8d8;
            z-index: 0;
        }
    }

    
`;

const StoneItem = styled.div`
    display: flex;
    align-items: center;
    line-height: 2rem;

    font-size: .875rem;
    color: rgba(0,0,0,.54);

    &>div:first-child{
        position: relative;
        width: .75rem;
        height: .75rem;

        background-color: #d8d8d8;
        border-radius: 50%;
        z-index: 1;
    }

    &:first-child{
        &>div:first-child{
            background-color: #26aa99;
        }

        div{
            color: #26aa99;
        }
    }

    &>div:last-child{
        display: flex;
    }

    .time{
        margin: 0 .875rem 0 1rem;
        color: rgba(0,0,0,.8)!important;
    }
`;

WidgetPurchaseDetail.propTypes = {
    
};

function WidgetPurchaseDetail(props) {
    return (
        <WidgetContent className="bg-white">
            <Header className="d-flex align-items-center justify-content-between">
                <a href="#/" className="d-flex align-items-center">
                    <span className="arrow_carrot-left"></span>
                    TRỞ LẠI 
                </a>

                <div className="d-flex">
                    <div className="purchase__id">ID ĐƠN HÀNG. 210709FKW10K9Q</div>
                    <div className="text-uppercase purchase__status" style={{color: "#ee4d2d"}}>Đơn hàng đã bị hủy</div>
                </div>
            </Header>

            <Step className="d-flex justify-content-between">
                <StepItem>
                    <div className="d-inline-flex align-items-center justify-content-center">1</div>
                    <p>Đơn hàng đã đặt</p>
                    <span>20:32 09-07-2021</span>
                </StepItem>
                <StepItem>
                    <div className="d-inline-flex align-items-center justify-content-center">2</div>
                    <p>đã xác nhận thông tin thanh toán</p>
                    <span>20:32 09-07-2021</span>
                </StepItem>
                <StepItem>
                    <div className="d-inline-flex align-items-center justify-content-center">3</div>
                    <p>Đơn hàng đã bị hủy</p>
                    <span>20:32 09-07-2021</span>
                </StepItem>
                
            </Step>
        
            <WidgetButton>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Đơn hàng đã bị hủy bởi hệ thống</span>
                    <HighlightButton>Mua lần nữa</HighlightButton>
                </div>
                <div className="text-right">
                    <Button>Liên hệ Người bán</Button>
                </div>
            </WidgetButton>

            <WidgetStones>
                <div className="line"></div> 
                <div className="d-flex">
                    <DeliveryAddress>
                        <h5>Địa chỉ nhận hàng</h5>

                        <div>
                            <strong>Trần Lê Anh Vũ</strong>
                            <br />
                            <span>(+84) 377670509</span> <br />
                            <span>156 Lã Xuân Oai, Phường Phước Long B, Quận 9, TP. Hồ Chí Minh</span>
                        </div>
                    </DeliveryAddress>

                    <Stones>
                        <div className="text-right">
                           <span>Nhanh</span><br />
                           <span>VN010428778127</span>
                        </div>
                        <div>
                            <StoneItem>
                                <div></div>
                                <div>
                                    <div className="time">13:51 18-07-2021</div>
                                    Trả hàng thành công
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">19:55 14-07-2021</div>
                                    Đơn hàng sẽ được hoàn trả vì giao hàng không thành công
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">19:40 14-07-2021</div>
                                    Đơn hàng đã đến kho 50-HCM Thu Duc LMHub
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">18:26 14-07-2021</div>
                                    Giao hàng không thành công 
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">08:39 14-07-2021</div>
                                    Đang giao hàng
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">21:23 13-07-2021</div>
                                    Đơn hàng đã đến kho 50-HCM Thu Duc LMHub
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">21:04 12-07-2021</div>
                                    Đơn hàng đã xuất khỏi kho 
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">19:25 12-07-2021</div>
                                    Đơn hàng đã đến kho 50-HCM Binh Tan SOC
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div>
                                    <div className="time">18:27 12-07-2021</div>
                                    Lấy hàng thành công
                                </div>
                            </StoneItem>
                            <StoneItem>
                                <div></div>

                                <div className="d-flex">
                                    <div className="time">12:07 10-07-2021</div>
                                    Người gửi đang chuẩn bị hàng
                                </div>
                            </StoneItem>
                        </div>
                        
                    </Stones>
                </div>
            </WidgetStones>

            {/* <Purchase full/> */}
        </WidgetContent>
    );
}

export default WidgetPurchaseDetail;