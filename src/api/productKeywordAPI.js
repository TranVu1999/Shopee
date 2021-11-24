import axiosClient from "./axiosClient";

// api/auth
const productKeywordApi = {
    getListMatched: keyword => {
        const url = `/product-keyword/${keyword}`;
        return axiosClient.get(url);
    }    
}

export default productKeywordApi;