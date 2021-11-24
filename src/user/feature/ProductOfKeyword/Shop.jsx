import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icons 
import {
    arrowRightIcon, 
    userIcon,
    clothesIcon,
    starIcon,
    messageIcon,
    clockIcon
} from './../../../asset/icon';

const WidgetContainer = styled.div`
    margin-bottom: 1rem;
    font-size: .875rem;
`;

const Title = styled.div`
    b, a {
        font-weight: 400;
        color: #ee4d2d;
    }

    svg {
        margin-left: .5rem;
        height: .625rem;
        width: .625rem;
        fill: currentColor;
    }
`;

const WidgetShop = styled.div`
    background-color: #fff;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.05);
    padding: 1.25rem 1.75rem;

    .left, .right {
        flex: 1;
    }

    svg {
        fill: #ee4d2d;
        width: .75rem;
        height: .75rem;
    }
`;

const Thumbnail = styled.div`
    position: relative;
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
    border: 0.0625rem solid rgba(0,0,0,.09); 

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 1.5rem;
        height: 1.5rem;
        stroke: #c6c6c6;
    }

    .label {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 20%);

        width: 100%;
        font-size: .75rem;
        background-color: #ee4d2d;
        color: #fff;
        border-radius: 4px;
        line-height: 1.25rem;
    }
`;

Shop.propTypes = {
    
};

function Shop(props) {
    return (
        <WidgetContainer>
            <Title className="d-flex align-items-center justify-content-between">
                <p>Shop liên quan đến "<b>thời trang nữ</b>"</p>
                <a className="d-flex align-items-center" href="#/">Thêm Kết Quả {arrowRightIcon}</a>
            </Title>

            <WidgetShop className="d-flex align-items-center">
                <div className="d-flex align-items-center left">
                    <Thumbnail>
                        <div className="avatar">{userIcon}</div>
                        <div className="text-center label">Yêu thích</div>
                    </Thumbnail>

                    <div className="text">
                        <h5>NPSHOP</h5>
                        <span>Tài trợ bởi npshop.vn</span>
                        <div className="statistics">
                            <p><span>149.1k</span> Người Theo Dõi</p>
                            <p><span>44</span> Đang Theo</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="statistics">
                        <div>
                            <p>{clothesIcon} 216</p>
                            <span>Sản Phẩm</span>
                        </div>
                        <div>
                            <p>{starIcon} 4.9</p>
                            <span>Đánh giá</span>
                        </div>
                        <div>
                            <p>{messageIcon} 99%</p>
                            <span>Tỉ Lệ Phản Hồi</span>
                        </div>
                        <div>
                            <p>{clockIcon} trong vài giờ</p>
                            <span>Thời Gian Phản Hồi</span>
                        </div>
                    </div>
                </div>
            </WidgetShop>
        </WidgetContainer>
    );
}

export default Shop;