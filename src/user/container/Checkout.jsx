import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// Components
import Header from '../feature/Cart/Header';
import ReceivedAddress from '../feature/Checkout/ReceivedAddress';
import CartInfo from '../feature/Checkout/CartInfo';
import Coin from '../feature/Checkout/Coin';
import Footer from '../feature/Checkout/Footer';
import HandlingData from './../feature/Layout/HandlingData';
import SuccessPopup from './../feature/Layout/SuccessPopup';
import EmptyCart from './../feature/Cart/EmptyCart';

// apis 
import administrativeUnitApi from './../../api/administrativeUnitAPI';
import addressApi from './../../api/addressAPI';
import invoiceApi from './../../api/invoiceAPI';


function Checkout() {
    const cart = useSelector(state => state.cartReducer.cart);

    const [listOptionAddress, setListOPtionAddress] = useState([]);
    const [isShopSuccessPopup, setIsShowSuccessPopup] = useState(false);
    const [listAddress, setListAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [receivedAddress, setReceivedAddress] = useState("");

    // useEffect
    useEffect(() => {
        const fetchListAddress = async function() {
            const res = await addressApi.get();

            if(res.success) {
                setListAddress(res.listAddress);
                
            }
        }

        fetchListAddress()
    }, []);

    useEffect(() => {
        if(listAddress && listAddress.length === 0) {
            inintListOptionAddress();
        }
    }, [listAddress])

    // functions
    const inintListOptionAddress = () => {
        administrativeUnitApi.getListProvince()
        .then(res => {
            if(res.success) {
                setListOPtionAddress(res.listProvince);
            }
        })
        .catch(err => console.log({err}))
    }

    const getNumProductSelected = () => {
        let numProductSelected = 0;
        cart.forEach(shop => {
            shop.listProduct.forEach(prod => {
                const {isChose} = prod;
                if(isChose) {
                    numProductSelected++;
                }
            })
        });

        return numProductSelected;
    }

    const prepareData = () => {
        const orderData = [];

        cart.forEach(shop => {
            const hasSelected = shop.listProduct.some(prod => prod.isChose);

            if(hasSelected) {
                const row = {
                    shopId: shop._id,
                    message: shop.message
                };
                const listProduct = [];

                shop.listProduct.forEach(prod => {
                    if(prod.isChose) {
                        const product = {
                            productId: prod.product._id,
                            title: prod.product.title,
                            image: prod.product.avatar,
                            cartId: prod._id,
                            amount: prod.amount
                        };

                        const {classification} = prod;
                        if(classification) {
                            const {first, second} = classification;
                            const {tablePrice} = prod.product.classification;
                            const {types} = prod.product.classification.classifies.first;

                            product.image = types.find(type => type.label === classification.first).image;

                            if(first && second) {
                                product.price = tablePrice.find(row => row.firstClassifyName === first && row.secondClassifyName === second).price;
                                product.variant = {
                                    firstClassificationName: first,
                                    secondClassificationName: second
                                }
                            } else if(first) {
                                product.price = tablePrice.find(row => row.firstClassificationName === first).price;
                                product.variant = {
                                    firstClassificationName: first
                                }
                            }
                        }else {
                            product.price = prod.product.price;
                        }

                        listProduct.push(product);
                    }
                });

                row.listProduct = listProduct;

                orderData.push(row);
            }
        })

        return orderData;
    }

    // handle event
    const onHanldeChoseAdministrativeUnit = dataChose => {
        const {type, code} = dataChose;
        if(type === "province") {
            administrativeUnitApi.getListDistrict(code)
            .then(res => {
                console.log({res})
                if(res.success) {
                    setListOPtionAddress(res.listDistrict);
                }
            })
            .catch(err => console.log({err}));
        } else if(type === "district") {
            administrativeUnitApi.getListWard(code)
            .then(res => {
                console.log({res})
                if(res.success) {
                    setListOPtionAddress(res.listWard);
                }
            })
            .catch(err => console.log({err}))
        }
    }

    const onHandleInitListOptionAddress = () => {
        inintListOptionAddress();
    }

    const onHanldeAddNewAddress = address => {
        setIsLoading(true);
        addressApi.add(address)
        .then(res => {
            setIsLoading(false);
            if(res.success) {
                const newAddress = res.address;
                setListAddress([
                    ...listAddress,
                    newAddress
                ])
            }
        })
        .catch(err => console.log({err}));
    }

    const onHandleOrder = () => {
        const data = {listShop: prepareData(), receivedAddress};
        console.log({data})

        setIsLoading(true);
        invoiceApi.add(data)
        .then(res => {
            if(res.success) {
                setIsLoading(false);
                setIsShowSuccessPopup(true);
            }
        })
        .catch(err => console.log(console.log({err})));

        console.log({data});
    }

    const onHandleChoseOtherAddress = addressId => {
        setReceivedAddress(addressId);
    }

    const onHandleCloseSuccessPopup = () => {
        setIsShowSuccessPopup(false);
    }

    const numProductSelected = getNumProductSelected();

    return (
        <div className="checkout-page">
            <Header title = {"Thanh Toán"}/>
            
            <div style={{marginBottom: '16px'}}></div>
            <ReceivedAddress
                onChoseOtherAddress = {onHandleChoseOtherAddress}
                listAddress = {listAddress}
                onHandleInitAdministrativeUnit = {onHandleInitListOptionAddress}
                listOptionAddress = {listOptionAddress}
                onHanldeChoseAdministrativeUnit = {onHanldeChoseAdministrativeUnit}
                onHandleAddAddress = {onHanldeAddNewAddress}
            />

            <div style={{marginBottom: '40px'}}></div>

            {numProductSelected === 0 && 
                <EmptyCart 
                    title = "Bạn chưa chọn sản phẩm."
                    button = {{title: "Quay lại giỏ hàng", url: "/cart"}}
                />
            }

            {numProductSelected > 0 && <>
                <CartInfo cart = {cart}/>

                <Coin/>
                <div style={{marginBottom: '20px'}}></div>
                <Footer cart = {cart} onOrder = {onHandleOrder}/>
            </>}

            

            {isLoading && <HandlingData/>}
            {isShopSuccessPopup && <SuccessPopup onClosePopup = {onHandleCloseSuccessPopup}/>}
        </div>
    );
}

export default Checkout;