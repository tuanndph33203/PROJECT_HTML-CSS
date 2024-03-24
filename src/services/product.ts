import { axiosInstance } from "@/config/axios";

export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const getProductByTag = async (tag: string) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products?tag=${tag}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const getProductLimit = async (quantity: number) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products?_limit=${quantity}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (id: number) => {
    try {
        await axiosInstance.delete(`http://localhost:3000/products/${id}`);
    } catch (error) {
        console.log(error);
    }
}