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

    getPassword: () => {
        const url = '/account/password';
        return axiosClient.get(url);
    },

    update: (id, user) => {
        const url = `/account/${id}`;
        return axiosClient.put(url, user);
    },

    getVerifyCode: () => {
        const url = `/account/password/send-verify-code`;
        return axiosClient.get(url);
    },

    updatePassword: (password) => {
        const url = `/account/password`;
        return axiosClient.put(url, password);
    },

    
}

export default accountApi;