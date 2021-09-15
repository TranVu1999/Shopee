import axiosClient from "./axiosClient";

// api/productApi.js
const shopApi = {
    get: () => {
        const url = '/shop';
        return axiosClient.get(url);
    },
    update: (shop) => {
        const url = '/shop';
        return axiosClient.post(url, shop);
    },
}

export default shopApi;