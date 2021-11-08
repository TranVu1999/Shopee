import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  add: (product) => {
    const url = `/product`;
    console.log({ product });
    return axiosClient.post(url, product);
  },

  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, {
      params,
      header: {
        testing: "test1",
      },
    });
  },

  get: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },

  getList: (filter) => {
    const url = `/product/filter?${filter}`;
    console.log({ url });
    return axiosClient.get(url);
  },
};

export default productApi;
