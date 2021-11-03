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
    }

    
}

export default addressApi;