import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, updateProduct } from "@/services/product";
import { IProduct } from "@/interface/product";
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
                        tag: product.name.replace(/\s/g, '_'),
                        image: product.image,
                        description: product.description,
                        discount: product.discount,
                        active: true,
                        featured: true,
                        inStock: product.inStock,
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
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    return { mutate, ...rest };
};

export default useProductMutation;
