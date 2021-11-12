import axiosClient from "./axiosClient";

// api/auth
const cartApi = {
    add: product => {
        const url = '/cart';
        return axiosClient.post(url, product);
    },

    get: () => {
        const url = '/cart';
        return axiosClient.get(url);
    }
    
}

export default cartApi;