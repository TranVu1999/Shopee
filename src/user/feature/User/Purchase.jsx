import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../../theme';

const WidgetContent = styled.div`
    font-size: 16px;
    background-color: #fff;
`;

// Purchase Header 
const PurchaseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25em 1.5em 2em;

    font-size: .875em;
`;

const Badge = styled.div`
    padding: 0 .5em;
    font-size: .875em;

    background-color: #ee4d2d;
    color: #fff;

    border-radius: 4px;
`;

const Brand = styled.div`
    padding: 0 .5em;
    font-weight: 700;
    color: rgba(0,0,0,.8);
`;

const SmallButton = styled.button`
    padding: 0 .875em;
    margin-right: .625em;

    font-size: .875em;
            
    color: #fff;
    background-color: #ee4d2d;

    border-radius: 2px;
    border: 1px solid transparent;  
    
    span{
        margin-right: .5em;
    }
`;

const SmallTransparentButton = styled(SmallButton)`
    color: #555;
    border-color: ${BorderColor.mainColor};
    background-color: transparent;
`;

const StatusBox = styled.div`
    display: flex;
    align-items: center;

    a{
        color: #26aa99;
        span{
            margin-right: .75em;
        }
    }
`;

const PopupUpdate = styled.div`
    margin: 0 1em;
`;

const Status = styled.div`
    padding-left: 1em;

    text-transform: uppercase;
    color: #ee4d2d;
    border-left: 1px solid ${BorderColor.mainColor};
    line-height: 1em;
`;


// Purchase Body
const PurchaseBody = styled.div`
    
`;

const ProductItem = styled.a`
    display: flex;
    padding: 1.5em 0;
    margin: 0 1.5em;
    border-top: 1px solid ${BorderColor.mainColor};
`;

const Thumbnail = styled.div`
    flex-shrink: 1;
    width: 80px;
    height: 80px;
    margin-right: 1em;

    img{
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.div`
    flex: 1;
    
    p{
        margin: 0;
    }
`;

const UnitPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    del{
        font-size: .875em;
        margin-right: .5em;
        color: rgba(0,0,0,.3);
    }

    span{
        font-size: 1em;
        color: #ee4d2d;
    }
`;

// Purchase Footer
const PurchaseFooter = styled.div`
    border-top: 1px solid ${BorderColor.mainColor};

    span{
        font-size: .875em;
        color: #222;
    }

    button:last-child{
        margin-right: 0;
    }
`;

const Button = styled(SmallButton)`
    padding: .5em 1.25em;
    font-size: .875rem;
`;

const TransparentButton = styled(Button)`
    color: #555;
    border-color: ${BorderColor.mainColor};
    background-color: transparent;
`;

const TotalPrice = styled.div`
    padding: 1.125rem 1.5rem;
    margin-bottom: 1.5em;
    text-align: right;

    span{
        margin-right: .5em;
    }

    strong{
        font-size: 1.5em;
        font-weight: 500;
        color: #ee4d2d;
    }
`;

const WidgetButton = styled.div`
    padding: 1.125rem 1.5rem;
`;

const PurchaseFooterTable = styled.div`
    div.row{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 1.5rem;

        text-align: right;
        border-bottom: 1px dotted ${BorderColor.mainColor};
    }

    span.label{
        padding: .5rem 1rem .5rem 0;
        color: rgba(0,0,0,.54);

        font-size: .75rem;

        flex: 1;
        border-right: 1px dotted ${BorderColor.mainColor};
    }

    span.value{
        width: 240px;
        font-size: .875rem;
        color: rgba(0,0,0,.8);

        strong{
            color: #ee4d2d;
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`;

const PaymentNotice = styled.div`
    padding: .5rem 1.25rem;
    border: 1px solid rgba(224,168,0,.4);
    border-radius: 2px;

    svg{
        margin-right: .75rem;
        color: #ffbf00;
    }

    span{
        font-size: .75rem;
        color: rgba(0,0,0,.54);
    }
`


Purchase.propTypes = {
    full: PropTypes.bool,
};

Purchase.defaultProps = {
    full: false
}

function Purchase({full}) {

    // Render
    const renderFooterPurchase = () =>{
        if(full){
            return (
                <PurchaseFooterTable>
                    <div>
                        <div className="row">
                            <span className="label">Tổng tiền hàng</span>
                            <span className="value">₫549.000</span>
                        </div >
                        <div className="row">
                            <span className="label">Phí vận chuyển</span>
                            <span className="value">₫20.700</span>
                        </div>
                        <div className="row">
                            <span className="label">Tổng số tiền</span>
                            <span className="value"><strong>₫569.700</strong> </span>
                        </div>
                    </div>

                    <PaymentNotice>
                        <svg height="16" width="16" viewBox="0 0 16 16" class="shopee-svg-icon hYpjMQ "><g fill-rule="evenodd"><path d="m8 15c-3.8596721 0-7-3.1397891-7-6.9994612 0-3.8602109 3.1403279-7.0005388 7-7.0005388 3.8602109 0 7 3.1403279 7 7.0005388 0 3.8596721-3.1397891 6.9994612-7 6.9994612z" fill="none" stroke-width="1" stroke="currentColor"></path><path d="m10.4132188 9.3999583h-5.050999c-.204396 0-.3841766-.1081321-.4918691-.297583-.0404396-.0712089-.1556047-.3239567.0413188-.6303309.0694507-.1248354.1643959-.2835171.2738467-.4593416.1050552-.1701102.1969235-.3371435.2791214-.5112098.086154-.1789015.1617586-.3705502.2259345-.5709901.0553847-.1771432.0839562-.3674733.0839562-.5652758 0-.2738467.0404396-.5287923.1204398-.7556059.075165-.2197807.1797806-.4193415.3098907-.5934078.125275-.1674729.2747258-.3151655.4457152-.4382426.1397805-.0989013.2826379-.1775828.4276932-.2369235.6247463-.29029 1.6628604-.0523078 1.6487945.0083517.1424179.0589012.2707698.1279123.3890118.2096707.1767036.1217585.333627.2747258.4646163.4540668.1283519.1784619.2312092.3810997.3050556.6013199.0760441.2232971.1147255.4738471.1147255.7437377 0 .1912092.0281319.3802205.0848353.5626385.0637364.2052751.1397805.3995612.2268136.5780231.0887914.1850553.1832971.3542864.2821984.5050559.1046156.1604399.1982421.297583.2826379.4123085.0874727.1160442.1296706.2505499.122198.3876931-.0061539.1107695-.0404396.2162642-.0989013.3041764-.0562639.0870331-.1305497.1591212-.2101103.2026378-.0685716.0404396-.1665937.0892309-.2769236.0892309zm-3.9906114.7572683h3.0423323c-.1878895.8170573-.6949449 1.2255859-1.5211662 1.2255859s-1.3332766-.4085286-1.5211662-1.2255859z" stroke="none" fill="currentColor"></path></g></svg>

                        <span>Vui lòng thanh toán <strong>₫569.700</strong> khi nhận hàng.</span>
                    </PaymentNotice>
                    
                    <div>
                        <div className="row">
                            <span className="label">Phương thức Thanh toán</span>
                            <span className="value">Thanh toán khi nhận hàng</span>
                        </div>
                    </div>
                </PurchaseFooterTable>
            );
        }

        return (
            <>
                <TotalPrice>
                    <span>Tổng số tiền:</span>
                    <strong>₫569.700</strong>
                </TotalPrice>

                <WidgetButton className="d-flex align-items-center justify-content-between">
                    <span>Hệ thống Shopee đã tự hủy</span>
                    <div>
                        <Button>Mua lần nữa</Button>
                        <TransparentButton>Liên hệ Người bán</TransparentButton>
                        <TransparentButton>Chi Tiết Đơn Hủy</TransparentButton>
                    </div>
                </WidgetButton>
            </>
        );
    }
    
    return (
        <WidgetContent>
            <PurchaseHeader>
                <div className = "d-flex">
                    <Badge>Yêu thích</Badge>
                    <Brand>tuvinashop</Brand>
                    <div>
                        <SmallButton>
                            <span className="icon_chat_alt"></span>
                            Chat
                        </SmallButton>
                        <SmallTransparentButton>
                            <span className="icon_house_alt"></span>
                            Xem Shop
                        </SmallTransparentButton>
                    </div>
                </div>

                <div>
                    <StatusBox>
                        <a href="#/"><span className="icon_cart_alt"></span>Trả hàng thành công</a>

                        <PopupUpdate>
                            <span className="icon_question_alt2"></span>
                        </PopupUpdate>

                        <Status>Đã Hủy</Status>
                    </StatusBox>
                </div>
            </PurchaseHeader>

            <PurchaseBody>
                <ProductItem href="#/">
                    <Thumbnail>
                        <img src="https://cf.shopee.vn/file/e4198899d0625a2a85acc81eaadc99a1_tn" alt="product" />
                    </Thumbnail>
                    <Title>
                        <p>Bếp Hồng Ngoại Sunhouse SHD6011 - Không Kén Nồi - Tặng Kèm Vĩ Nướng -  Hàng Chính Hãng (Bảo Hành 12 Tháng)</p>
                        <span>x1</span>
                    </Title>

                    <UnitPrice>
                        <del>₫845.000</del>
                        <span>₫845.000</span>
                    </UnitPrice>
                </ProductItem>

                <ProductItem href="#/">
                    <Thumbnail>
                        <img src="https://cf.shopee.vn/file/e4198899d0625a2a85acc81eaadc99a1_tn" alt="product" />
                    </Thumbnail>
                    <Title>
                        <p>Bếp Hồng Ngoại Sunhouse SHD6011 - Không Kén Nồi - Tặng Kèm Vĩ Nướng -  Hàng Chính Hãng (Bảo Hành 12 Tháng)</p>
                        <span>x1</span>
                    </Title>

                    <UnitPrice>
                        <del>₫845.000</del>
                        <span>₫845.000</span>
                    </UnitPrice>
                </ProductItem>
            </PurchaseBody>

            <PurchaseFooter>
                {renderFooterPurchase()}
            </PurchaseFooter>
        </WidgetContent>
    );
}

export default Purchase;