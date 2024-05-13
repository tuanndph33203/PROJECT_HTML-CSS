import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "@/components/Toast";
type useOrderMutationProps = {
    action: "CREATE";
}
const useOrderMutation = ({action} : useOrderMutationProps) => {
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data : any) => {
            switch (action) {
                case "CREATE":
                    await ({
                        userId : data.userId,
                        productId : data.productId,
                        quantity : data.quantity
                    });
                    break;
            }
        },
        onSuccess: (data:any) => {
            queryClient.invalidateQueries({
                queryKey: ["ORDER_KEY"],
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

export default useOrderMutation;
