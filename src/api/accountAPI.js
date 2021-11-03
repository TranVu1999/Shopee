import axiosClient from "./axiosClient";

// api/auth
const accountApi = {
    getShortInfo: () => {
        const url = '/account/short-information';
        return axiosClient.get(url);
    },

    getFullInfo: () => {
        const url = '/account/full-information';
        return axiosClient.get(url);
    },

    update: (id, user) => {
        const url = `/account/${id}`;
        return axiosClient.put(url, user);
    },

    
}

export default accountApi;