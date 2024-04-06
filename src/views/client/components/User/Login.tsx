import useAuthMutation from "@/hooks/useAuth";
import { useEffect } from "react";
const Login = (props: any) => {
    const { mutate, session } = useAuthMutation({ action: "LOGIN" });
    useEffect(() => {
        props.setLogin(true);
    },[session])
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data:', data);
        await mutate(data);
    };
    return (
        <form onSubmit={handleLogin} style={{ display: props.change ? "block" : "none" }} className="login-boxs">
            <div className="login-box">
                <div className="login-user">
                    <h5>Email</h5>
                    <input name="email" type="email" />
                </div>
                <div className="login-user">
                    <h5>Password</h5>
                    <input name="password" type="password" />
                </div>
            </div>
            <div className="login-button">
                <button>Login</button>
            </div>
            <div className="login-box">
                <div className="login-social">
                    <img src="./assets/image/icons/facebook-f.svg" alt="#" />
                    <h5>Facebook</h5>
                </div>
                <div className="login-social">
                    <img src="./assets/image/icons/google.svg" alt="#" />
                    <h5>Google</h5>
                </div>
            </div>
        </form>
    )
}

export default Login