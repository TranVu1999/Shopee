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
    },

    managementGet: () => {
        const url = '/invoice/management';
        return axiosClient.get(url);
    },

    get: () => {
        const url = '/invoice';
        return axiosClient.get(url);
    }
    
}

export default cartApi;