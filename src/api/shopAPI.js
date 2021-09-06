import axiosClient from "./axiosClient";

// api/productApi.js
const shopApi = {
    get: () => {
        const url = '/shop';
        return axiosClient.get(url);
    },
}

export default shopApi;