import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

// Components
import Header from '../feature/Cart/Header';
import VerifyAuthorization from '../feature/PurchaseVerify/VerifyAuthorization';
import VerifyLoading from '../feature/PurchaseVerify/VerifyLoading';
import VerifySuccess from '../feature/PurchaseVerify/VerifySuccess';

// apis
import invoiceApi from './../../api/invoiceAPI';

function PurchaseVerify() {
    const [isShowLoading, setIsShowLoading] = useState(true);
    const [isShowSuccess, setIsShowSuccess] = useState(false);
    const params = useParams();
    const accessToken = localStorage.getItem("accessToken");

    // useEffect
    useEffect(() => {
        if(accessToken) {
            const listInvoiceId = params.id.split(".");
            invoiceApi.verify({listInvoice: listInvoiceId})
            .then(res => {
                setIsShowLoading(false);
                if(res.success) {
                    setIsShowSuccess(true);
                }
            })
            .catch(err => console.log({err}))
        }
    }, []);


    return (
        <div className="purchase-verify-page">
            <Header title = {"Thanh Toán"}/>   

            {!accessToken && <VerifyAuthorization/>}
            {isShowLoading && accessToken && <VerifyLoading/>}
            {isShowSuccess && <VerifySuccess/>}
            
        </div>
    );
}

export default PurchaseVerify;