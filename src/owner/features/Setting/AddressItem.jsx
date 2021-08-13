import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    padding: .5rem 0;
    margin-bottom: 1rem;
    font-size: .875rem;
    border-bottom: 1px solid #fafafa;
`;

const WidgetIcon = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;

    svg{
        fill: #00bfa5;
    }
`;

const WidgetValue = styled.div``;

const Row = styled.div`
    margin-bottom: .5rem;
`;

const Label = styled.div`
    min-width: 8rem;
    margin-right: 2rem;
`;

const Value = styled.div`
    color: #333;

    span.name{
        font-size: 1rem;
    }
`;

const Badge = styled.div`
    margin-left: 1rem;

    span{
        display: inline-block;
        padding: 0 .5rem;
        margin-right: .25rem;

        font-size: .675rem;

        color: #40d0bd;
        background-color: #e8f9f7;
        border-radius: 2px;
        line-height: 1.125rem;
    }

    span.secondary{
        color: #eda500;
        background-color: #fff7e0;
    }

    span.warning{
        color: #ee4d2d;
        background-color: #fff1f0;
    }
`;

const ActionButton = styled.div`
    button{
        display: block;
        color: #2673dd;
    }
`;




AddressItem.propTypes = {
    
};

function AddressItem(props) {
    return (
        <WidgetContent className="d-flex">
            <WidgetIcon>
                <svg viewBox="0 0 32 32"><path d="M17.7 29.2H22c.6 0 1 .4 1 1s-.4 1-1 1H10c-.6 0-1-.4-1-1s.4-1 1-1h4.3C11.3 25.4 5 17.1 5 12.4 5 6.2 9.9 1.2 16 1.2s11 5 11 11.2c0 4.7-6.3 13-9.3 16.8zM16 3.2c-5 0-9 4.2-9 9.4s9 15.6 9 15.6 9-10.4 9-15.6c0-5.2-4-9.4-9-9.4zm-5 9c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.3-5-5zm8 0c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.4 3-3z"></path></svg>
            </WidgetIcon>

            <WidgetValue className="flex-fill">
                <Row className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Label>Họ & Tên </Label>
                        <Value>
                            <span className="name">Trần Lê Anh Vũ </span>
                            
                            <Badge className="d-inline-block">
                                <span className="primary">Default Address</span>
                                <span className="warning">Địa chỉ lấy hàng </span>
                                <span className="secondary">Địa chỉ trả hàng </span>
                            </Badge>
                        </Value>
                    </div>
                    <ActionButton>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </ActionButton>
                </Row>

                <Row className="d-flex">
                    <Label>Số điện thoại </Label>
                    <Value>
                        84377670509
                    </Value>
                </Row>

                <Row className="d-flex">
                    <Label>Địa chỉ</Label>
                    <Value>
                        156 Lã Xuân Oai
                        <br />
                        Phường Phước Long B
                        <br />
                        Thành Phố Thủ Đức
                        <br />
                        TP. Hồ Chí Minh
                    </Value>
                </Row>
            </WidgetValue>
        </WidgetContent>
    );
}

export default AddressItem;