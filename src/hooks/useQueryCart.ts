import { getCartByUserId } from "@/services/cart";
import { useQuery } from "@tanstack/react-query";
import { useSessionStorage } from "./useStorage";

const useCartQuery = () => {
    const userTuple = useSessionStorage('user', {});
    const user = userTuple[0];
    const userId = user ? user._id : null;
    const { data, ...rest } = useQuery({
        queryKey: ["CART_KEY",userId],
        queryFn: async () => {
            return await getCartByUserId(userId)
        },
    });
    return { data, ...rest };
};

export default useCartQuery;
