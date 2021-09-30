import axiosClient from "./axiosClient";

// api/productApi.js
const productCategoryApi = {
    getAll: () => {
        const url = '/product-category';
        return axiosClient.get(url);
    },
}

export default productCategoryApi;