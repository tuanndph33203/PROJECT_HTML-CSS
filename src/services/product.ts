import Toast from "@/components/Toast";
import { axiosInstance } from "@/config/axios";
import { IProduct } from "@/interface/product";

export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products`);
        return response.data.data
    } catch (error) {
        console.log(error);
    }
}
export const getProductByTag = async (tag: string) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products/${tag}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}
export const getProductLimit = async (quantity: number) => {
    try {
        const response = await axiosInstance.get(`http://localhost:3000/products/limit/${quantity}`);
        return response.data.data
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (product:IProduct) => {
    try {
        await axiosInstance.delete(`http://localhost:3000/products/${product.id}`);
        Toast({ type:"success",report:`Xóa Sản Phẩm Thành Công : ${product.name}`});
    } catch (error) {
        Toast({ type:"error",report:`Xóa Sản Phẩm Thất Bại : ${product.name}`});
        console.log(error);
    }
}
export const updateProduct = async (product: IProduct) => {
    try {
        await axiosInstance.put(`http://localhost:3000/products/${product.id}`, product);
        Toast({ type:"success",report:`Sửa Sản Phẩm Thành Công : ${product.name}`});
    } catch (error) {
        Toast({ type:"error",report:`Sửa Sản Phẩm Thất Bại : ${product.name}`});
        throw new Error('Failed to update product'+error);
    }
};
export const createProduct = async (product: IProduct) => {
    try {
        await axiosInstance.post(`http://localhost:3000/products`, product);
        Toast({ type:"success",report:`Thêm Sản Phẩm Thành Công : ${product.name}`});
    } catch (error) {
        Toast({ type:"error",report:`Thêm Sản Phẩm Thất Bại : ${product.name}`});
        throw new Error('Failed to create product');
    }
}

