import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

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
    padding: 1.25em 1.5em 2em;
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
    font-size: 1em;
`;

const TransparentButton = styled(Button)`
    color: #555;
    border-color: ${BorderColor.mainColor};
    background-color: transparent;
`;

const TotalPrice = styled.div`
    text-align: right;
    margin-bottom: 1.5em;

    span{
        margin-right: .5em;
    }

    strong{
        font-size: 1.5em;
        font-weight: 500;
        color: #ee4d2d;
    }
`;


PurchaseItem.propTypes = {
    
};

function PurchaseItem(props) {
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
                <TotalPrice>
                    <span>Tổng số tiền:</span>
                    <strong>₫569.700</strong>
                </TotalPrice>

                <div className="d-flex align-items-center justify-content-between">
                    <span>Hệ thống Shopee đã tự hủy</span>
                    <div>
                        <Button>Mua lần nữa</Button>
                        <TransparentButton>Liên hệ Người bán</TransparentButton>
                        <TransparentButton>Chi Tiết Đơn Hủy</TransparentButton>
                    </div>
                </div>
            </PurchaseFooter>
        </WidgetContent>
    );
}

export default PurchaseItem;