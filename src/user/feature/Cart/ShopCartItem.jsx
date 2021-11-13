import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

// Components
import CheckBox from '../../common/component/CheckBox';

// Theme 
import {BorderColor} from './../../theme';

// Modules
import formatNumber from './../../../utils/formatNumber';

// actions
import {actUpdateCart} from './../../common/module/cart/action';

const iconTicker = <svg enableBackground="new 0 0 12 12" viewBox="0 0 12 12" x="0" y="0" ><g><path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path></g></svg>

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
    line-height: 1.25rem;
    border-bottom: 1px solid ${BorderColor.mainColor};

    .check-box{
        margin-right: 1rem;
    }

    .product-name{
        flex: 1;
        color: rgba(0,0,0,0.8);

        .thumbnail{
            height: 5rem;
            width: 5rem;
            margin-right: 1rem;

            div{
                height: 100%;
            }
        }

        .title{
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-wrap: break-word;
            text-overflow: ellipsis;

            max-height: 2.5rem;
            margin-right: 1rem;

            flex: 3;
            overflow: hidden;
        }

        .classify{
            position: relative;
            flex: 2;
            padding: 0 1.5rem;

            label{
                margin-bottom: 0;
                cursor: pointer;
                span{
                    font-size: 1.125rem;
                }
            }
        }

        .classify-modal{
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, 0);

            display: none;

            box-sizing: content-box;
            width: 19.6875rem;
            max-height: 28.125rem;          
            padding: 1.625rem 1.75rem;

            background-color: #fff;

            border: 1px solid ${BorderColor.mainColor};
            border-radius: 2px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            z-index: 100;

            &:after{
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);

                height: 1rem;
                width: 1rem;

                background-color: #fff;
                border-left: 1px solid ${BorderColor.mainColor};
                border-top: 1px solid ${BorderColor.mainColor};
            }

            p{
                margin-bottom: .5rem;
                text-transform: capitalize;
                color: rgba(0,0,0,0.54);
                font-size: 1rem;
            }

            &>div {
                margin-bottom: 1rem;
            }

            .product-variation{
                display: inline-bock;
                padding: .375rem;
                margin: 0 .875rem .5rem 0;
                min-width: 5rem;

                border: 1px solid ${BorderColor.mainColor};
                border-radius: 2px;

                &:hover {
                    color: #ee4d2d;
                    border-color: #ee4d2d;
                }
            }

            .button-control{
                margin-top: 2rem;

                button{
                    padding: .5rem 1.5rem;
                    color: #555;
                    text-transform: uppercase;
                    border: 1px solid ${BorderColor.mainColor};
                    border-radius: 2px;
                }

                button:last-child{
                    margin-left: .5rem;
                    background: #ee4d2d;
                    color: #fff;
                    border-color: #ee4d2d;
                }
            }
        }

        .classify-modal.active{
            display: block;
        }
    }

    .unit-price{
        width: 8rem;
        color: #888;
    }

    .amount{
        width: 10.5rem;
        color: #888;
    }

    .total{
        width: 9rem;
        color: #ee4d2d;
    }

    .control{
        width: 8.75rem;
        color: #888;
        line-height: 1rem;

        button{
            margin-bottom: .5rem;
        }

        .see-more{
            color: #ee4d2d;
            span.arrow_triangle-down{
                font-size: 1.125rem;
            }
        }
    }

    .product__variant--button {
        margin-bottom: .5rem;
    }
`;

const CartUpdate = styled.div`
    font-size: 1.125rem;
    font-weight: 600;

    button{
        padding: .25rem .375rem;
        border: 1px solid ${BorderColor.mainColor};

        &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        &:last-child{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

    &>span{
        min-width: 2rem;
        padding: 0 .5rem;
        border-top: 1px solid ${BorderColor.mainColor};
        border-bottom: 1px solid ${BorderColor.mainColor};
        line-height: 2rem;

        font-size: .875rem;
    }
`;

ShopCartItem.propTypes = {
    cart: PropTypes.object.isRequired,
};

function ShopCartItem({cart}) {
    // Data
    const {_id, product, amount, classification} = cart;
    const [isShowClassifyModal, setIsShowClassifyModal] = React.useState(false);
    const [prodVariant, setProdVariant] = useState({...classification});
    const dispatch = useDispatch();
    const productUpdate = {
        product: product._id,
        amount: amount,
        classification
    }

    // handle event 
    const handleUpdateNumCart = number => {
        productUpdate.amount += number;

        if(productUpdate.amount) {
            dispatch(actUpdateCart(productUpdate, _id))
        }
    }

    const onHadleChoseProductVariant = prod => {
        const {type, value} = prod;
        setProdVariant({
            ...prodVariant,
            [type]: value
        })
    }

    const handleCloseClassifyBox = () => {
        setIsShowClassifyModal(false);
        setProdVariant(classification);
    }

    const handleUpdateProductVariant = () => {
        let flag = false;
        for(let key in prodVariant) {
            if(prodVariant[key] !== classification[key]) {
                flag = true;
                break;
            }
        }

        if(flag) {
            productUpdate.classification = {...prodVariant};

            console.log({_id});
            console.log({...productUpdate})
            dispatch(actUpdateCart(productUpdate, _id));
        }
    }

    // render
    const renderPrice = () => {
        if(classification) {
            const {tablePrice} = product.classification;
            const {first, second} = classification;

            if(second) {
                return tablePrice.find(row => row.firstClassifyName === first && row.secondClassifyName === second).price;
            } else {
                return tablePrice.find(row => row.firstClassifyName === first).price;
            }
        }

        return product.price;
    }

    const renderClassification = () => {
        if(classification) {
            const {first, second} = classification;

            return first + (second && ", ") + (second || "");
        }

        return "";
    }

    const renderAvatar = () => {
        if(classification) {
            const {first} = classification;
            const {types} = product.classification.classifies.first

            return types.find(type => type.label === first).image;

        }

        return product.avatar;
    }

    const renderClassificationOption = () => {
        const elm = [];
        if(classification) {
            const {first, second} = product.classification.classifies;

            elm.push(<>
                <p>{first.title}:</p>

                <div>
                    {first.types.map(type => (
                        <button 
                            onClick = {() => onHadleChoseProductVariant({type: "first", value: type.label})}
                            className={prodVariant.first === type.label ? "product__variant--button active" : "product__variant--button"}
                            key = {type.label}
                        >{type.label}<div className="ticker">
                        {iconTicker}
                    </div></button>
                    ))}
                </div>
            </>);

            if(second) {
                elm.push(<>
                    <p>{second.title}:</p>
    
                    <div>
                        {second.types.map(type => (
                            <button 
                                onClick = {() => onHadleChoseProductVariant({type: "second", value: type.label})}
                                className={prodVariant.second === type.label ? "product__variant--button active" : "product__variant--button"}
                                key = {type.label}
                            >{type.label}<div className="ticker">
                                    {iconTicker}
                                </div></button>
                        ))}
                    </div>
                </>);
            }
        }

        return elm;
    }

    return (
        <WidgetContent className="d-flex product">
            <div className="check-box">
                <CheckBox/>
            </div>
            <div className="d-flex product-name">
                <Link to={`/product-detail/${product.alias}.${product._id}`} className="d-block thumbnail">
                    <div className="bg-image" style={{backgroundImage: `url(${renderAvatar()})`}}></div>
                </Link>
                <Link to={`/product-detail/${product.alias}.${product._id}`} className="title">{product.title}</Link>

                <div className="classify">
                    <label 
                        className="d-flex align-items-center"
                        onClick = {() => {setIsShowClassifyModal(!isShowClassifyModal)}}
                    >Phân loại hàng: <span className="arrow_triangle-down"></span> </label>
                    <span>{renderClassification()}</span>

                    <div className={isShowClassifyModal ? "classify-modal active" : "classify-modal"}>
                        {renderClassificationOption()}

                        <div className="button-control text-right">
                            <button
                                onClick = {handleCloseClassifyBox}
                            >Trở Lại</button>
                            <button
                                onClick = {handleUpdateProductVariant}
                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="unit-price text-center">₫{formatNumber.convertToMoney(renderPrice())}</div>

            <div className="amount text-center">
                <CartUpdate className="d-inline-flex">
                    <button
                        onClick = {() => handleUpdateNumCart(-1)}
                    ><span className="icon_minus-06"></span></button>
                    <span>{amount}</span>
                    <button
                        onClick = {() => handleUpdateNumCart(1)}
                    ><span className="icon_plus"></span></button>
                </CartUpdate>
            </div>

            <div className="total text-center">₫{formatNumber.convertToMoney(renderPrice() * amount)}</div>

            <div className="control text-center">
                <button className="delete">Xóa</button>

                <button className="d-flex align-items-center see-more">
                    <span>Tìm sản phẩm tương tự</span>
                    <span><span className="arrow_triangle-down"></span></span>
                </button>
            </div>
        </WidgetContent>
    );
}

export default ShopCartItem;