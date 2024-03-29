import { login, register } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
type useAuthMutationProps = {
    action: "REGISTER" | "LOGIN";
}
const useAuthMutation = ({action} : useAuthMutationProps) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user:any) => {
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
                    return null
            }
        }
    });

    return { mutate, ...rest };
};

export default useAuthMutation;
