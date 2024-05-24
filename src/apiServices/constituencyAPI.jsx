import axiosInstance from "../config/axios-config";

export const fetchConstituency = async () => {
    try {
        const response = await axiosInstance.get('/api/constituency/');
        console.log(response);
        return response.data;


    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};
