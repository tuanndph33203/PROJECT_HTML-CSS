import { getAllProducts, getProductByTag, getProductLimit } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const useProductQuery = ({ tag, quantity }: { tag?: string, quantity?: number }) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            if (tag) {
                return await getProductByTag(tag);
            } else if (quantity) {
                return await getProductLimit(quantity); 
            } else {
                return await getAllProducts();
            }
        },
    });
    return { data, ...rest };
};

export default useProductQuery;
