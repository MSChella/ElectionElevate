import axiosInstance from "../config/axios-config";

export const fetchState = async () => {
    try {
        const response = await axiosInstance.get('/api/state/');
        console.log(response);
        return response.data;


    } catch (error) {
        console.error('Error fetching states', error);
        throw error;
    }
};
