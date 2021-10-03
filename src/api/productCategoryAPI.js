import axiosClient from "./axiosClient";

// api/productApi.js
const productCategoryApi = {
    getAll: () => {
        const url = '/product-category';
        return axiosClient.get(url);
    },

    get(id, type) {
        const url = `/product-category/${id}/${type}`;
        return axiosClient.get(url);
    },
}

export default productCategoryApi;