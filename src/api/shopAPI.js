import axiosClient from "./axiosClient";

// api/productApi.js
const shopApi = {
    get: () => {
        const url = '/shop';
        return axiosClient.get(url);
    },
    update: (id, data) => {
        const url = `/shop/shop-management/${id}`;
        return axiosClient.put(url, data);
    },
}

export default shopApi;