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
    },

    update: (data, id) => {
        const url = `/cart/${id}`;
        return axiosClient.put(url, data);
    },

    delete: (id) => {
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    }
    
}

export default cartApi;