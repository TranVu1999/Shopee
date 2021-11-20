import React from 'react';
import PropTypes from 'prop-types';

// modules
import Number from './../../../utils/formatNumber';

OrderItem.propTypes = {
    invoice: PropTypes.object.isRequired,
}

function OrderItem({invoice}) {
    const {listProduct, _id, account, total, statuation} = invoice;

    // render
    const renderProduct = () => {
        return listProduct.map(prod => {

            return <div key = {prod._id} className="d-flex flex-fill product">
                <div className = "thumbnail" style={{backgroundImage: `url(${prod.image})`}}/>
                <div className="text">
                    <h5>{prod.title}</h5>
                    <p>Phân loại: {`${prod.variant.firstClassificationName}, ${prod.variant.secondClassificationName}`}</p>
                    <p>x{prod.amount}</p>
                </div>
            </div>
        })
    }

    return (
        <div className="invoice__item">
            <div className="d-flex align-items-center justify-content-between invoice__item__header">
                <div className="d-flex align-items-center customer-thumbnail"> 
                    <img src={account.avatar} alt="avatar" />
                    <label>{account.username}</label>
                    <button><span aria-hidden="true" className="icon_chat_alt"></span></button>
                </div>

                <div>
                    <p>ID Đơng hàng: {_id}</p>
                </div>
            </div>

            <div className="d-flex invoice__item__body">
                <div className="invoice__list-product">
                    {renderProduct()}

                </div>
                <div className="invoice__total">{Number.convertToMoney(total)}</div>

                <div className="invoice__status">
                    <strong>{statuation}</strong>
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