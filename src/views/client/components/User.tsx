import useAuthMutation from "@/hooks/useAuth";
import "@/style/user.scss";
import { useState } from "react";

const User = (props: any) => {
  // const { mutate, data : user } = useAuthMutation({ action: "REGISTER" });
  const { mutate } = useAuthMutation({ action: "LOGIN" });
  const [change, setChange] = useState<Boolean>(true);
  
  const handleLogin = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    mutate(data);  
  };
  const handleRegister = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    mutate(data);
    
  };
  return (
    <div style={{ display: props.active ? "flex" : "none" }} className="login" id="user">
      <div className="login-form">
        <div className="login-close">
          <strong onClick={() => props.login(false)} className="login__close" id="close">X</strong>
        </div>
        <div className="login-title flex justify-between">
          <div onClick={() => setChange(true)} className={`login__title hover:text-[#a07b50] border-b-2 ${change ? "border-b-indigo-500" : ""}`}
          >Login</div>
          <div onClick={() => setChange(false)} className={`login__title text-[#3c556e] hover:text-[#0056b3] border-b-2 ${change ? "" : "border-b-indigo-500"}`}
          >Register</div>
        </div>
        <form onSubmit={handleLogin} style={{ display: change ? "block" : "none" }} className="login-boxs">
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
        <form method="POST" action="/auth/register" onSubmit={handleRegister} style={{ display: change ? "none" : "block" }} className="register-boxs ">
          <div className="register-user  md:flex justify-between">
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
              <h5>Comfirm Password</h5>
              <input  name="confirmPassword" type="password" />
            </div>
          </div>
          <div className="register-user md:flex justify-between">
            <div className="w-full md:w-[48%]">
              <h5>Avatar</h5>
              <input name="avatar" type="text" />
            </div>
            <div className="register-button">
                <button>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default User