import UserContext from "@/context/UserContext";
import { useLocalStorage } from "@/hooks/useStorage";
import "@/style/user.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Infomation = (props : any) => {
    const userContext = useContext(UserContext);
    const [, , removeToken] = useLocalStorage('token', '');
    const handleLogout = () => {
            const logout = async () => {
                if (userContext) {
                    await userContext.removeValue();
                    props.setValue(false);
                }
                removeToken();
            };
    
            logout();
    }
    return (
        <div className="login-boxs">
            <div className="lregister-user flex justify-between">
                <div className="login__title hover:text-[#a07b50]"
                >Infomation</div>
                <div className="login__title bg-gray-900 py-1 rounded-lg">
                    <button>Update</button>
                </div>
            </div>
            <div className="register-user md:flex justify-between">
                <div className="register-name w-full md:w-[48%]">
                    <h5>Username</h5>
                    <input name="name" className="" type="text" />
                </div>
                <div className="register-email w-full md:w-[48%]">
                    <h5>Email</h5>
                    <input type="email" name="email" />
                </div>
            </div>
            <div className="register-user md:flex justify-between">
                <div className="w-full md:w-[48%]">
                    <h5>Password</h5>
                    <input name="password" type="password" />
                </div>
                <div className="w-full md:w-[48%]">
                    <h5>Avatar</h5>
                    <input name="avatar" type="text" />
                </div>
            </div>
            <div className="register-user md:flex justify-between text-2xl">
                <div className="w-full md:w-[48%]">
                    <button className="mt-2" onClick={handleLogout}>Sign Out</button>
                </div>
                <div className="w-full md:w-[48%] text-end">
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </div>
    )
}

export default Infomation