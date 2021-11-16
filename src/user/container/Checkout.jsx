import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// Components
import Header from '../feature/Cart/Header';
import ReceivedAddress from '../feature/Checkout/ReceivedAddress';
import CartInfo from '../feature/Checkout/CartInfo';
import Coin from '../feature/Checkout/Coin';
import Footer from '../feature/Checkout/Footer';
import HandlingData from './../feature/Layout/HandlingData'

// apis 
import administrativeUnitApi from './../../api/administrativeUnitAPI';
import addressApi from './../../api/addressAPI';


function Checkout(props) {
    const cart = useSelector(state => state.cartReducer.cart);

    const [listOptionAddress, setListOPtionAddress] = useState([]);
    const [listAddress, setListAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className="checkout-page">
            <Header title = {"Thanh Toán"}/>
            
            <div style={{marginBottom: '16px'}}></div>
            <ReceivedAddress
                listAddress = {listAddress}
                onHandleInitAdministrativeUnit = {onHandleInitListOptionAddress}
                listOptionAddress = {listOptionAddress}
                onHanldeChoseAdministrativeUnit = {onHanldeChoseAdministrativeUnit}
                onHandleAddAddress = {onHanldeAddNewAddress}
            />

            <div style={{marginBottom: '40px'}}></div>

            <CartInfo cart = {cart}/>

            <Coin/>
            <div style={{marginBottom: '20px'}}></div>
            <Footer/>

            {isLoading && <HandlingData/>}
        </div>
    );
}

export default Checkout;