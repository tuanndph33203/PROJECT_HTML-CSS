import "@/style/user.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const User = (props: any) => {
  const [change, setChange] = useState<Boolean>(true);
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
        <Login change={change}></Login>
        <Register change={change}></Register>
      </div>
    </div>
  )
}

export default User