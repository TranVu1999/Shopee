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
    return axiosClient.get(url);
  },

  getDeliveryAddress: (catId) => {
    const url = `/product/list-delivery-address/${catId}`;
    return axiosClient.get(url);
  },

  getBrand: (catId) => {
    const url = `/product/list-brand/${catId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
