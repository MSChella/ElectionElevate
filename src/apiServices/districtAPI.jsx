import axiosInstance from "../config/axios-config";

export const fetchDistrict = async () => {
    try {
        const response = await axiosInstance.get('/api/district/');
        return response.data;

    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};