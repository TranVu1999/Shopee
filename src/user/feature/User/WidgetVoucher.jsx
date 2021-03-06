import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Theme
import {BorderColor} from './../../theme';
import Voucher from '../../common/component/Voucher';

const WidgetContent = styled.div`
    padding: 1.25rem 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const VoucherHeader = styled.div`
    font-size: .875em;

    a{
        display: inline-block;
        padding: 0 1em;
        color: #ee4d2d;

        &:nth-child(2){
            border-left: 1px solid ${BorderColor.mainColor};
            border-right: 1px solid ${BorderColor.mainColor};
        }

        &:last-child{
            color: #757575;
        }
    }
`;

const VoucherForm = styled.div`
    padding: 2em;
    background: rgba(0,0,0,.03);

    label{
        margin: 0;
        text-transform: capitalize;
        font-size: 1rem;
        color: rgba(0,0,0,.87);
    }

    input{
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        width: 25.875rem;
        margin: 0 .5rem;
    }

    button{
        
        width: 6.25rem;
        background-color: rgba(0,0,0,.1);
    }
`;

const VoucherTabs = styled.div`
    margin-bottom: 1rem;
`;

const TabItem = styled.div`
    padding: .875em 0 .875em;
    text-align: center;
    font-weight: 600;
    flex: 1 1 auto;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &.active{
        color: #ee4d2d;
        border-bottom: 2px solid #ee4d2d;
    }
`;

const VoucherFilter = styled.div`
    background-color: #f6f6f6;
    font-size: .875em;

    div{
        cursor: pointer;
        padding: .875em 3em;

        &.active{
            color: #ee4d2d;
        }
    }
`;

const ListVoucher = styled.div`
    gap: 20px;
    &>div{
        width: calc((100% - 20px) / 2);
    }
`;


const Title = styled.h5`
    font-size: 1rem;
    color: rgba(0,0,0,.87);
`;

WidgetVoucher.propTypes = {
    
};

function WidgetVoucher(props) {
    // Data
    const [items] = React.useState([
        {
            id: 1,
            type: "shop",
            content: {
                badge: "Shop Y??u Th??ch",
                title: "Gi???m ???15k ????n T???i Thi???u ???245k",
                expire: "04.10.2021",
                url: "#/",
                image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc",
                brand: "SoTa Shop"
            }
            
        },
        {
            id: 2,
            type: "shop",
            content: {
                badge: "Shop Y??u Th??ch",
                title: "Gi???m 50% ????n T???i Thi???u ???99k Gi???m t???i ??a ???10k",
                expire: "30.08.2021",
                url: "#/",
                image: "https://cf.shopee.vn/file/d39d6bb8f5ab6c2ee72efb026469f0b1",
                brand: "MONA MASK OFFICIAL STORE"
            }
            
        },
        {
            id: 3,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 4,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 5,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 6,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 7,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 8,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 9,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 10,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "T????t ca?? hi??nh th????c thanh toa??n",
                expire: "30.08.2021",
                url: "#/",
            }
            
        }
    ]);


    const [hints] = React.useState([
        {
            id: 1,
            type: "hint",
            content: {
                badgeShop: "Shop Y??u Th??ch",
                title: "[S???N] V??y tr???ng tr??? vai tay b???ng c??c b???c ti???u th?? xinh x???n",
                value: "50",
                price: "123.00",
                condition: "????n T???i Thi???u ???600k",
                url: "#/",
                image: "https://cf.shopee.vn/file/63ebf3719cf3f4b3978d0505ad4073c7",
            }
            
        },
        {
            id: 2,
            type: "hint",
            content: {
                badgeShop: "Shop Y??u Th??ch",
                title: "(H??ng c?? s???n) V??y tr???ng midi vintage n?? tay ????????????????",
                value: "50",
                price: "159.00",
                condition: "????n T???i Thi???u ???600k",
                url: "#/",
                image: "https://cf.shopee.vn/file/cec51b7160ed80f9a158e507004bb3ce",
            }
            
        },
        {
            id: 3,
            type: "hint",
            content: {
                badgeShop: "Shop Y??u Th??ch",
                title: "V??y tr???ng n??? d??? ti???c tay d??i d??ng x??e Jina ??i ti???c ??i ch??i ??i c?????i",
                value: "10",
                price: "300.00",
                condition: "????n T???i Thi???u ???600k",
                url: "#/",
                image: "https://cf.shopee.vn/file/55eeed5203d9aef5f40d31fc410e2062",
            }
            
        },
        {
            id: 4,
            type: "hint",
            content: {
                badgeShop: "Shop Y??u Th??ch",
                title: "??o Polo nam Leo Vatino v???i Cotton c?? s???u cao c???p xu???t x???n d???t bo d??y d???n chu???n form ??o thun c??? b??? tay ng???n - Galvin",
                value: "50",
                price: "48.00",
                condition: "????n T???i Thi???u ???600k",
                url: "#/",
                image: "https://cf.shopee.vn/file/551d891431a0600e155299591a38be70",
            }
            
        }
         
    ]);

    // Render
    const renderListVoucher = () =>{
        return items.map(item =>{
            return (
                <div key={item.id}><Voucher item = {item}/></div>
            );
        });
    };

    const renderListHintVoucher = () =>{
        return hints.map(item =>{
            return (
                <div key={item.id}><Voucher item = {item}/></div>
            );
        });
    };

    return (
        <div className = "f-16">
            <WidgetContent className="bg-white mb-4">
                <VoucherHeader>
                    <div className = "d-flex align-items-start justify-content-between page-user--header border-none" >
                        <p>?????a ch??? c???a t??i</p>
                        <div>
                            <a href="#/">T??m th??m voucher</a>
                            <Link to={`/user/voucher-history`}>Xem l???ch s??? voucher</Link>
                            <a href="#/">T??m hi???u th??m</a>
                        </div>
                    </div>
                </VoucherHeader>

                <VoucherForm>
                    <form>
                        <div class="m-0 d-flex align-items-center justify-content-center form-group ">
                            <label>Email address</label>
                            <input type="email" className="form-control"  placeholder="Nh???p m?? voucher t???i ????y"/>
                            <button type="submit" className="btn align-self-stretch" disabled>L??u</button>
                        </div>
                    </form>
                </VoucherForm>
                
                <VoucherTabs className="d-flex align-items-center justify-content-between">
                    <TabItem className="active">T???t C???</TabItem>
                    <TabItem>Shopee</TabItem>
                    <TabItem>Shop</TabItem>
                    <TabItem>N???p th??? & D???ch v???</TabItem>
                    <TabItem>Scan & Pay</TabItem>
                    <TabItem>T??? ?????i T??c</TabItem>
                </VoucherTabs>

                <VoucherFilter className="d-flex">
                    <div className="active">M???i nh???t</div>
                    <div>Ph??? bi???n</div>
                    <div>S???p h???t h???n</div>
                </VoucherFilter>

                <ListVoucher className="d-flex flex-wrap">{renderListVoucher()}</ListVoucher>
            </WidgetContent>
            

            <WidgetContent className="bg-white">
                <Title className="mb-5">Voucher g???i ??</Title>
                <ListVoucher className="d-flex flex-wrap">{renderListHintVoucher()}</ListVoucher>
            </WidgetContent>
        </div>
    );
}

export default WidgetVoucher;