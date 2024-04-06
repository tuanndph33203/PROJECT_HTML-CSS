import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Infomation from "./Infomation";
import { useSessionStorage } from "@/hooks/useStorage";

const User = (props: any) => {
  const [value] = useSessionStorage('user', '');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(true);
  useEffect(() => {
    setIsLoggedIn(value!=='')
  },[value])
  return (
    <div style={{ display: props.active ? "flex" : "none" }} className="login" id="user">
      <div className="login-form">
        <div className="login-close">
          <strong onClick={() => props.login(false)} className="login__close" id="close">X</strong>
        </div>
        <div className="auth" style={{ display: isLoggedIn ? "none" : "block" }}>
          <div className="login-title flex justify-between">
            <div onClick={() => setChange(true)} className={`login__title hover:text-[#a07b50] border-b-2 ${change ? "border-b-indigo-500" : ""}`}>Login</div>
            <div onClick={() => setChange(false)} className={`login__title text-[#3c556e] hover:text-[#0056b3] border-b-2 ${change ? "" : "border-b-indigo-500"}`}>Register</div>
          </div>
          <Login change={change} setLogin={setIsLoggedIn}></Login>
          <Register change={change}></Register>
        </div>
        <div className="infomation" style={{ display: isLoggedIn ? "block" : "none" }}>
          <Infomation setLogin={setIsLoggedIn}></Infomation>
        </div>
      </div>
    </div>
  )
}

export default User;
