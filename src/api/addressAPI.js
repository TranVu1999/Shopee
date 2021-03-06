import axiosClient from "./axiosClient";

// api/auth
const addressApi = {
    get: () => {
        const url = '/address';
        return axiosClient.get(url);
    },

    remove: (id) => {
        const url = `/address/${id}`;
        return axiosClient.delete(url);
    },

    add: (address) => {
        const url = `/address`;
        return axiosClient.post(url, address);
    },

    edit: (address) => {
        const url = `/address/${address._id}`;
        return axiosClient.put(url, address);
    }

    
}

export default addressApi;