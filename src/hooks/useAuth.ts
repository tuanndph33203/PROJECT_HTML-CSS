import Toast from "@/components/Toast";
import { login, register } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

type useAuthMutationProps = {
    action: "REGISTER" | "LOGIN";
}
const useAuthMutation = ({ action }: useAuthMutationProps) => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error('UserContext chưa được khởi tạo');
    }
    const { value, setValue }  = userContext
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: any) => {
            switch (action) {
                case "REGISTER":
                    return await register({
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        confirmPassword: user.confirmPassword,
                        avatar: user.avatar,
                    });
                case "LOGIN":
                    return await login({
                        email: user.email,
                        password: user.password
                    });
                default:
                    return null;
            }
        },
        onSuccess: async (data: any) => {
            setValue(data.user);
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

    return { mutate, value, ...rest }; 
};

export default useAuthMutation;
