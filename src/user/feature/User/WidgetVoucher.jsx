import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

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

WidgetVoucher.propTypes = {
    
};

function WidgetVoucher(props) {

    

    return (
        <div className = "f-16">
            <VoucherHeader>
                <div className = "d-flex align-items-start justify-content-between page-user--header border-none" >
                    <p>Địa chỉ của tôi</p>
                    <div>
                        <a href="#/">Tìm thêm voucher</a>
                        <a href="#/">Xem lịch sử voucher</a>
                        <a href="#/">Tìm hiểu thêm</a>
                    </div>
                </div>
            </VoucherHeader>

            <VoucherForm>
                <form>
                    <div class="m-0 d-flex align-items-center justify-content-center form-group ">
                        <label>Email address</label>
                        <input type="email" className="form-control"  placeholder="Nhập mã voucher tại đây"/>
                        <button type="submit" className="btn align-self-stretch" disabled>Lưu</button>
                    </div>
                </form>
            </VoucherForm>
            
            <VoucherTabs className="d-flex align-items-center justify-content-between">
                <TabItem className="active">Tất Cả</TabItem>
                <TabItem>Shopee</TabItem>
                <TabItem>Shop</TabItem>
                <TabItem>Nạp thẻ & Dịch vụ</TabItem>
                <TabItem>Scan & Pay</TabItem>
                <TabItem>Từ Đối Tác</TabItem>
            </VoucherTabs>

            <VoucherFilter className="d-flex">
                <div className="active">Mới nhất</div>
                <div>Phổ biến</div>
                <div>Sắp hết hạn</div>
            </VoucherFilter>
        </div>
    );
}

export default WidgetVoucher;