import axiosClient from "./axiosClient";

// api/auth
const cartApi = {
    add: invoice => {
        const url = '/invoice';
        return axiosClient.post(url, invoice);
    },

    verify: listInvoiceId => {
        const url = '/invoice/confirm';
        return axiosClient.post(url, listInvoiceId);
    }
    
}

export default cartApi;