import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, updateProduct } from "@/services/product";
import { IProduct } from "@/interface/product";
import Toast from "@/components/Toast";
type useProductMutationProps = {
    action: "CREATE" | "UPDATE" | "DELETE";
}
const useProductMutation = ({action} : useProductMutationProps) => {
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product:IProduct) => {
            switch (action) {
                case "CREATE":
                    await createProduct({
                        name: product.name,
                        price: product.price,
                        tags : product.tags,
                        gallery : product.gallery,
                        attributes : product.attributes,
                        image: product.image,
                        description: product.description,
                        discount: product.discount,
                        featured: false,
                        category:product.category
                    });
                    break;
                case "UPDATE":
                    await updateProduct(product)
                    break;
                case "DELETE":
                    await deleteProduct(product)
                    break;
                default:
                    return null
            }
        },
        onSuccess: (data:any) => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
            Toast({ type: "success", report: data.message });
        },
        onError: (error: any) => {
            console.log(error);
            const message = error.response.data.message;
            message.map((value:string) => {
            Toast({type:"error",report:value})
            })  
        }
    });

    return { mutate, ...rest };
};

export default useProductMutation;
