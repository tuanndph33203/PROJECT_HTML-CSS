import { getAllCategory } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

const useCategoryQuery = () => {
    const { data, ...rest } = useQuery({
        queryKey: ["CATEGORY_KEY"],
        queryFn: async () => {
            return await getAllCategory();
        },
    });

    return { data, ...rest };
};

export default useCategoryQuery;
