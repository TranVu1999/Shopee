import React from 'react';
import PropTypes from 'prop-types';

// Components
import SwitchBox from './../../components/SwitchBox';


ShopPrivacy.propTypes = {
    
};

function ShopPrivacy(props) {
    return (
        <div className="owner-setting-shop__widget-list-setup">
            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 1.45c6.931 0 12.55 5.619 12.55 12.55a.55.55 0 0 1-1.1 0C13.45 7.676 8.324 2.55 2 2.55a.55.55 0 0 1 0-1.1zm0 4A8.55 8.55 0 0 1 10.55 14a.55.55 0 0 1-1.1 0A7.45 7.45 0 0 0 2 6.55a.55.55 0 0 1 0-1.1zm0 4A4.55 4.55 0 0 1 6.55 14a.55.55 0 0 1-1.1 0A3.45 3.45 0 0 0 2 10.55a.55.55 0 0 1 0-1.1z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Hoạt động riêng tư</p>
                        <span>Bật hoạt động riêng tư để ẩn hoạt động thích và bình luận của bạn khỏi những người đang theo dõi bạn.</span>
                    </div>
                    <SwitchBox/>

                </div>
                <div className="line"></div>
            </div>

            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.718 13.882l-5.48-5.48a3.75 3.75 0 0 1 5.149-5.45l.685.676.53-.53a3.75 3.75 0 0 1 5.304 5.304l-5.48 5.48a.5.5 0 0 1-.708 0zm5.48-6.187A2.75 2.75 0 1 0 9.31 3.806l-.881.88a.5.5 0 0 1-.705.002l-1.003-.99a2.75 2.75 0 0 0-3.775 3.997l5.127 5.126 5.127-5.126z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Ẩn thích của tôi</p>
                        <span>Người khác sẽ không thấy lượt thích của bạn trong hồ sơ shop nếu kích hoạt.</span>
                    </div>
                    <SwitchBox/>
                </div>
            </div>

        </div>

    );
}

export default ShopPrivacy;