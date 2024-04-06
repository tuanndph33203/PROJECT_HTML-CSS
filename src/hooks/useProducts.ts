import { getAllProducts, getProductBySlug, getProductLimit } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const useProductQuery = ({ slug, quantity }: { slug?: string, quantity?: number }) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY",slug],
        queryFn: async () => {
            if (slug) {
                return await getProductBySlug(slug);
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
