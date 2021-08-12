import React from 'react';
import PropTypes from 'prop-types';

// Components
import SwitchBox from './../../components/SwitchBox';

ShopChat.propTypes = {
    
};

function ShopChat(props) {
    return (
        <div className="owner-setting-shop__widget-list-setup">
            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.536.156l4 2.538a1 1 0 0 1 .464.844v10.458a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.538a1 1 0 0 1 .464-.844l4-2.538a1 1 0 0 1 1.072 0zM8 .999L4 3.538v10.458h8V3.538L8 .999zm1.32 8.204c.214 0 .4.031.56.094a1.1 1.1 0 0 1 .397.252c.105.105.183.23.235.373.034.095.058.194.07.297l.008.156v.3l-.009.159a1.268 1.268 0 0 1-.07.297c-.051.142-.13.265-.234.371-.104.105-.235.19-.392.252a1.505 1.505 0 0 1-.557.094 1.51 1.51 0 0 1-.555-.094 1.165 1.165 0 0 1-.398-.252 1.02 1.02 0 0 1-.24-.371 1.243 1.243 0 0 1-.071-.297l-.01-.158v-.301l.01-.156c.011-.103.035-.202.07-.297.054-.143.134-.268.239-.373.106-.106.238-.19.397-.252a1.48 1.48 0 0 1 .55-.094zm-.463-2.322a.377.377 0 0 1 .412-.165l.09.035.012.007a.313.313 0 0 1 .13.366l-.03.066-2.414 3.863a.376.376 0 0 1-.489.136l-.025-.014a.313.313 0 0 1-.13-.366l.03-.065 2.414-3.863zm.463 3.033a.437.437 0 0 0-.185.037.37.37 0 0 0-.133.102.427.427 0 0 0-.078.148l-.02.086-.006.088v.3l.004.06a.47.47 0 0 0 .121.263c.04.043.085.077.137.102a.386.386 0 0 0 .168.037.54.54 0 0 0 .215-.037.302.302 0 0 0 .127-.102.356.356 0 0 0 .059-.148l.01-.086.003-.088v-.301l-.006-.088-.02-.086a.427.427 0 0 0-.077-.148.37.37 0 0 0-.133-.102.437.437 0 0 0-.186-.037zM6.617 6c.214 0 .4.031.559.094a1.042 1.042 0 0 1 .629.627c.034.094.058.193.07.297l.008.158v.3l-.009.157c-.011.102-.035.2-.07.295-.051.142-.13.265-.234.37a1.13 1.13 0 0 1-.392.253 1.494 1.494 0 0 1-.553.094 1.51 1.51 0 0 1-.555-.094 1.165 1.165 0 0 1-.398-.252 1.02 1.02 0 0 1-.24-.371 1.242 1.242 0 0 1-.072-.295l-.008-.156v-.301l.008-.158c.012-.104.036-.203.072-.297a1.052 1.052 0 0 1 .634-.627C6.226 6.03 6.41 6 6.617 6zm0 .71a.424.424 0 0 0-.183.038.374.374 0 0 0-.131.102.427.427 0 0 0-.078.148l-.02.086-.006.092v.3l.007.088.019.084a.43.43 0 0 0 .078.147.37.37 0 0 0 .133.101.447.447 0 0 0 .189.038c.07 0 .132-.013.184-.038a.338.338 0 0 0 .127-.101.47.47 0 0 0 .074-.147l.019-.084.006-.087v-.301l-.006-.092-.02-.086a.446.446 0 0 0-.075-.148.352.352 0 0 0-.131-.102.437.437 0 0 0-.186-.037z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Cho phép Trả giá</p>
                        <span>Nếu tắt chức năng này, Người mua sẽ không thể trả giá</span>
                    </div>
                    <SwitchBox/>

                </div>
                <div className="line"></div>
            </div>

            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .989a6.98 6.98 0 0 1 4.012 1.26.5.5 0 1 1-.573.82 6.011 6.011 0 1 0 2.556 4.49.5.5 0 1 1 .998-.071A7.011 7.011 0 1 1 8 .989zm6.293 2.076a.5.5 0 0 1 .765.638l-.058.07-7.55 7.266a.5.5 0 0 1-.637.057l-.07-.057L4.147 8.44a.5.5 0 0 1 .638-.765l.07.058 2.243 2.244 7.196-6.913z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Cho phép Chat từ trang Hồ sơ</p>
                        <span>Bật để cho phép mọi người chat với bạn qua trang Hồ sơ. Khuyến khích với người mua.</span>
                    </div>
                    <SwitchBox/>
                </div>
                <div className="line"></div>
            </div>

            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm2.086 2.122l-3.464 3.464a2.5 2.5 0 0 0 3.464-3.464zM7 0a4 4 0 0 1 2.126 7.389c.371.14.725.317 1.057.525a.499.499 0 0 1-.228.944c-.099 0-.31-.101-.316-.105A5 5 0 0 0 2 13v.5a.5.5 0 1 1-1 0V13a6.002 6.002 0 0 1 3.874-5.612A4 4 0 0 1 7 0zm5.5 10a2.5 2.5 0 0 0-2.086 3.878l3.464-3.464A2.488 2.488 0 0 0 12.5 10zM7 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Người dùng đã bị chặn</p>
                        <span>Danh sách người dùng bạn đã chặn từ Chat.</span>
                    </div>
                    <span>Chưa có Người dùng nào bị chặn</span>
                </div>
                
            </div>
        </div>

    );
}

export default ShopChat;