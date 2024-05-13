import Toast from "@/components/Toast";
import { axiosInstance } from "@/config/axios";
export const createOrder = async (data : any) => {
    try {
        await axiosInstance.post(`http://localhost:3000/order`, data);
        Toast({ type:"success",report:`Mua Thành Công`});
    } catch (error) {
        Toast({ type:"error",report:`Mua Thất Bại !`});
        throw error;
    }
}

