import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Voucher from '../../common/component/Voucher';

// Theme
import {BorderColor} from './../../theme';

const Header = styled.div`
    padding-bottom: 1rem;
    font-size: 1.125rem;
    color: #333;
    border-bottom: 1px solid ${BorderColor.mainColor};
`;

const Tab = styled.div`
    border-bottom: 1px solid ${BorderColor.mainColor};
    div{
        padding: 1.625rem 2rem .875rem;
        font-size; 1rem;
        cursor: pointer;

        &.active{
            color: #ee4d2d;
            border-bottom: 2px solid #ee4d2d;
        }
    }
`;

const ListVoucher = styled.div`
    gap: 20px;
    &>div{
        width: calc((100% - 20px) / 2);
    }
`;

WidgetExpireVoucher.propTypes = {
    listVoucher: PropTypes.array.isRequired,
};

function WidgetExpireVoucher(props) {

    // Data
    const [hints] = React.useState([
        {
            id: 1,
            type: "shop",
            content: {
                badge: "Shop Yêu Thích",
                title: "Giảm ₫15k Đơn Tối Thiểu ₫245k",
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
                badge: "Shop Yêu Thích",
                title: "Giảm 50% Đơn Tối Thiểu ₫99k Giảm tối đa ₫10k",
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
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 4,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 5,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 6,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 7,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 8,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 9,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        },
        {
            id: 10,
            type: "transport",
            content: {
                badge: "Freeship Xtra",
                title: "Tất cả hình thức thanh toán",
                expire: "30.08.2021",
                url: "#/",
            }
            
        }
    ]);

    const [indexTabActive, setIndexTabActive] = React.useState(0);

    // Function
    const onHandleChoseTab = index =>{
        if(index !== indexTabActive){
            setIndexTabActive(index);
        }
    }

    // Render
    const renderVouchers = () =>{
        return hints.map(item =>{
            return (
                <div key={item.id}><Voucher expired item = {item}/></div>
            );
        });
    }

    return (
        <div>
            <Header>Lịch sử voucher</Header> 
            <Tab className="d-flex">
                <div 
                    className={indexTabActive === 0 && "active"}
                    onClick = {() => {onHandleChoseTab(0)}}
                >Hết hiệu lực</div>
                <div    
                    className={indexTabActive === 1 && "active"}
                    onClick = {() => {onHandleChoseTab(1)}}
                >Đã sử dụng</div>
            </Tab>

            <ListVoucher className="d-flex flex-wrap">{renderVouchers()}</ListVoucher>
        </div>
    );
}

export default WidgetExpireVoucher;