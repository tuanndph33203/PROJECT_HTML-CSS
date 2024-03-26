import { axiosInstance } from "@/config/axios";

export const getAllCategory = async () => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/category`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
