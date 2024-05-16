import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "@/components/Toast";
import { createOrder } from "@/services/order";
type useOrderMutationProps = {
    action: "CREATE";
}
const useOrderMutation = ({action} : useOrderMutationProps) => {
    const queryClient = useQueryClient();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data : any) => {
            switch (action) {
                case "CREATE":
                    console.log(data);
                    
                    await createOrder({
                        userId : data.userId,
                        customerName: data.firstName + data.lastName,
                        orderNumber : data.phone,
                        orderAddress: `${data.company}-${data.country}-${data.streetAddress}-${data.city}-${data.zipCode}-${data.email}-${data.additionalInfo}`,
                        totalPrice : data.total,
                        items: data.items
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
