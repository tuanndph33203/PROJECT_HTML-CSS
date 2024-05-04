import Toast from "@/components/Toast";
import { axiosInstance } from "@/config/axios";
export const getCartByUserId = async (id: string) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/cart/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
export const deleteCart = async (data: {userId:string,productId:string}) => {
    try {
        await axiosInstance.delete(`http://localhost:3000/cart/remove/${data.userId}/${data.productId}`);
        Toast({ type:"success",report:`Xóa Giỏ Hàng Thành Công !`});
    } catch (error) {
        Toast({ type:"error",report:`Xóa  Giỏ Hàng Thất Bại !`});
        throw error;
    }
}
export const quantityCart = async ({ action, userId, productId } : {action : string, userId:string,productId:string}) => {
    try {
        await axiosInstance.post(`http://localhost:3000/cart/${action}`, {userId,productId});
        Toast({ type:"success",report:`Sửa Sản Phẩm Thành Công`});
    } catch (error) {
        Toast({ type:"error",report:`Sửa Sản Phẩm Thất Bại`});
        throw error;
    }
};
export const createCart = async (data : any) => {
    try {
        await axiosInstance.post(`http://localhost:3000/cart`, data);
        Toast({ type:"success",report:`Thêm Giỏ Hàng Thành Công`});
    } catch (error) {
        Toast({ type:"error",report:`Thêm Giỏ Hàng Thất Bại !`});
        throw error;
    }
}

