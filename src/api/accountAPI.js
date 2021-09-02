import axiosClient from "./axiosClient";

// api/auth
const accountApi = {
    getShortInfo: () => {
        const url = '/account/short-information';
        return axiosClient.get(url);
    },
}

export default accountApi;