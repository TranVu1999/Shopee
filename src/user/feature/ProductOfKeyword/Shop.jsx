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

Shop.propTypes = {
    
};

function Shop(props) {
    return (
        <div className = "Widget-shop">
            <div className="d-flex align-items-center justify-content-between title">
                <p>Shop liên quan đến "<b>thời trang nữ</b>"</p>
                <a className="d-flex align-items-center" href="#/">Thêm Kết Quả {arrowRightIcon}</a>
            </div>

            <div className="d-flex align-items-center shop-container">
                <div className="d-flex align-items-center left">
                    <div className = "thumbnail">
                        <div className="avatar">{userIcon}</div>
                        <div className="text-center label">Yêu thích</div>
                    </div>

                    <div className="text">
                        <h5>NPSHOP</h5>
                        <span>Tài trợ bởi npshop.vn</span>
                        <div className="d-flex">
                            <p><span>149.1k</span> Người Theo Dõi</p>
                            <p><span>44</span> Đang Theo</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="d-flex justify-content-end statistics">
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
            </div>
        </div>
    );
}

export default Shop;