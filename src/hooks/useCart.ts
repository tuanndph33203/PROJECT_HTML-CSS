import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "@/components/Toast";
import { createCart, deleteCart, quantityCart } from "@/services/cart";
type useCartMutationProps = {
    action: "CREATE" | "QUANTITY" | "DELETE";
}
const useCartMutation = ({action} : useCartMutationProps) => {
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data : any) => {
            switch (action) {
                case "CREATE":
                    await createCart({
                        userId : data.userId,
                        productId : data.productId,
                        quantity : data.quantity
                    });
                    break;
                case "QUANTITY":
                    await quantityCart({
                        action: data.action,
                        userId : data.userId,
                        productId : data.productId,
                    })
                    break;
                case "DELETE":
                    await deleteCart({
                        userId : data.userId,
                        productId : data.productId,
                    })
                    break;
                default:
                    return null
            }
        },
        onSuccess: (data:any) => {
            queryClient.invalidateQueries({
                queryKey: ["CART_KEY"],
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

export default useCartMutation;
