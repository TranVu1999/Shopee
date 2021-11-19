import React from 'react';

function OrderItem() {
    return (
        <div className="invoice__item">
            <div className="d-flex align-items-center justify-content-between invoice__item__header">
                <div className="d-flex align-items-center customer-thumbnail"> 
                    <img src="https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e" alt="avatar" />
                    <label>tranvu123456</label>
                    <button><span aria-hidden="true" className="icon_chat_alt"></span></button>
                </div>

                <div>
                    <p>ID Đơng hàng: 2008021BDWTG74</p>
                </div>
            </div>

            <div className="d-flex invoice__item__body">
                <div className="invoice__list-product">
                    <div className="d-flex flex-fill text">
                        <div className = "thumbnail" style={{backgroundImage: "url(https://cf.shopee.vn/file/ebb8179179b1042ea213642eb95b4bcc_tn)"}}/>
                        <div>
                            <h5>Giày bata nữ hồng - pinky girl</h5>
                            <p>Phân loại: Pink, 38</p>
                            <p>x1</p>
                        </div>
                    </div>

                </div>
                <div className="invoice__total">1.000</div>

                <div className="invoice__status">
                    <div className="badge warning">
                        <span aria-hidden="true" className="icon_clock_alt"></span>
                        Cần được xử lý trong 22 giờ
                    </div>
                    <strong>Chờ lấy hàng</strong>
                    <p>Để tránh việc giao hàng trễ, vui lòng giao hàng/chuẩn bị hàng trước: 04-08-2021</p>
                </div>
                <div className="invoice__type-transport">Người bán tự vận chuyển</div>
                <div className="invoice__active">
                    <button>Giao</button>
                    <button>In phiếu giao</button>
                </div>
            </div>

        </div>
    );
}

export default OrderItem;