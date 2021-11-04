import axiosClient from "./axiosClient";

// api/auth
const administrativeUnitApi = {
    getListProvince: () => {
        const url = '/administrative-unit/province';
        return axiosClient.get(url);
    },

    getListDistrict: (provinceCode) => {
        const url = `/administrative-unit/district/${provinceCode}`;
        return axiosClient.get(url);
    },

    getListWard: (districtCode) => {
        const url = `/administrative-unit/ward/${districtCode}`;
        return axiosClient.get(url);
    },
    
}

export default administrativeUnitApi;