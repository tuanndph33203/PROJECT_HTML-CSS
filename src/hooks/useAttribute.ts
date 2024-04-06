// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import Toast from "@/components/Toast";
// import { createAttribute } from "@/services/attribute";
// type useAttributeMutationProps = {
//     action: "CREATE" | "UPDATE" | "DELETE";
// }
// const useAttributeMutation = ({action} : useAttributeMutationProps) => {
//     const queryClient = useQueryClient();
//     const { mutate, ...rest } = useMutation({
//         mutationFn: async (data) => {
//             switch (action) {
//                 case "CREATE":
//                     await createAttribute({
//                         name: data.name,
//                         values: data.values,
//                     });
//                     break;
//                 // case "UPDATE":
//                 //     await updateAttribute(data)
//                 //     break;
//                 // case "DELETE":
//                 //     await deleteAttribute(data)
//                 //     break;
//                 default:
//                     return null
//             }
//         },
//         onSuccess: (data:any) => {
//             queryClient.invalidateQueries({
//                 queryKey: ["ATTRIBUTE_KEY"],
//             });
//             Toast({ type: "success", report: data.message });
//         },
//         onError: (error: any) => {
//             console.log(error);
//             const message = error.response.data.message;
//             message.map((value:string) => {
//             Toast({type:"error",report:value})
//             })  
//         }
//     });

//     return { mutate, ...rest };
// };

// export default useAttributeMutation;
