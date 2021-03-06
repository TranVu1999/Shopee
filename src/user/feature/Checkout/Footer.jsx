import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// modules
import Number from '../../../utils/formatNumber';

const WidgetContainer = styled.div`
    font-size: .875rem;
    .top {
        padding: 1.5rem 1.5rem;
        background-color: #fff;

        h5 {
            margin: 0;
            font-size: 1.125rem;
            color: #222;
        }

        span {
            margin-right: 2rem;
        }

        button {
            color: #05a;
            text-transform: uppercase;
        }
    }

    .middle {
        padding: .5rem 1.5rem;
        background-color: #FFFEFB;

        &>div {
            display: flex;
            justify-content: end;
            padding: .3125rem 0;

            span:last-child {
                text-align: right;
                min-width: 180px;
            }

            span.price {
                color: #ee4d2d;
                font-size: 1.25rem;
                font-weight: 500;
            }
        }
    }

    .bottom {
        padding: 1.5rem 1.5rem;
        background-color: #FFFEFB;
        border-top: 1px dashed rgba(0,0,0,.09);

        button {
            padding: .5rem 3rem;
            background-color: #ee4d2d;
            color: #fff;
            font-size: 1rem;
            text-transform: uppercase;

            &:hover {
                background-color: #f05d40;
            }
        }
    }
`;

Footer.propTypes = {
    cart: PropTypes.array.isRequired,
    onOrder: PropTypes.func.isRequired,
};

function Footer({cart, onOrder}) {
    // functions
    const collectProductSelected = () => {
        let totalPrice = 0;
        let numProduct = 0;
        let numProductSelected = 0;
        cart.forEach(shop => {
            shop.listProduct.forEach(prod => {
                numProduct += prod.amount;
                if(prod.isChose) {
                    numProductSelected++;
                    const {classification: {first, second}, amount} = prod;
                    if(!prod.product.classification) {
                        totalPrice += prod.product.price * amount;
                    } else {
                        const {tablePrice} = prod.product.classification;
                        let rowPrice = null;
                        if(first && second) {
                            rowPrice = tablePrice.find(row => row.firstClassifyName === first && row.secondClassifyName === second);

                        } else if(first) {
                            rowPrice = tablePrice.find(row => row.firstClassifyName === first);
                        }
                        totalPrice += rowPrice.price * amount;
                    }

                    

                }
            })
        });
        return {totalPrice, numProduct, numProductSelected};
    }

    // handle function
    const onHandleOrder = () => {
        if(!onOrder) return;
        onOrder();
    }

    const {totalPrice} = collectProductSelected();

    return (
        <WidgetContainer>
            <div className="container">
                <div className="footer__container">
                    <div className="d-flex align-items-center justify-content-between top">
                        <h5>Ph????ng th???c thanh to??n</h5>

                        <div>
                            <span>Thanh to??n khi nh???n h??ng</span>
                            <button>Thay ?????i</button>
                        </div>
                    </div>

                    <div className="middle">
                        <div>
                            <span>T???ng ti???n h??ng</span>
                            <span><small>???</small>{Number.convertToMoney(totalPrice)}</span>
                        </div>
                        <div>
                            <span>Ph?? v???n chuy???n</span>
                            <span><small>???</small>38.000</span>
                        </div>
                        <div>
                            <span>T???ng thanh to??n</span>
                            <span className="price"><small>???</small>{Number.convertToMoney(totalPrice + 38000)}</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between bottom">
                        <span>Nh???n "?????t h??ng" ?????ng ngh??a v???i vi???c b???n ?????ng ?? tu??n theo <a href="#/">??i???u kho???n Shopee</a></span>
                        <button onClick = {onHandleOrder}>?????t H??ng</button>
                    </div>
                </div>
            </div>
            
        </WidgetContainer>
    );
}

export default Footer;