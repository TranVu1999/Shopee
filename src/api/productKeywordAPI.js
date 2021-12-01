import axiosClient from "./axiosClient";

// api/auth
const productKeywordApi = {
    getListMatched: keyword => {
        const url = `/product-keyword/${keyword}`;
        return axiosClient.get(url);
    },
    
    add: data => {
        const url = `/product-keyword`;
        return axiosClient.post(url, data);
    }
}

export default productKeywordApi;