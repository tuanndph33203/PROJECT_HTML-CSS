import { axiosInstance } from "@/config/axios";

export const register = async (user: any) => {
    try {
        const response = await axiosInstance.post(`http://localhost:3000/auth/register`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (user: any) => {
    try {
        const response = await axiosInstance.post(`http://localhost:3000/auth/login`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
}
