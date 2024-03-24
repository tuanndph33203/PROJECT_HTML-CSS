import "@/style/user.scss";
import { Link } from "react-router-dom";

const User = (props:any) => {
  return (
    <div style={{display: props.active ? "flex" : "none"}} className="login" id="user">
      <div className="login-form">
        <div className="login-close">
          <strong onClick={() => props.login(false)} className="login__close" id="close">X</strong>
        </div>
        <div className="login-boxs">
          <div className="login-title">
            <div className="login__title">Login</div>
          </div>
          <div className="login-box">
            <div className="login-user">
              <h5>Username</h5>
              <input type="text" />
            </div>
            <div className="login-user">
              <h5>Password</h5>
              <input type="text" />
            </div>
          </div>
          <div className="login-button">
            <Link to="/admin">
            <button>Login</button>
            </Link>
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
        </div>
      </div>
    </div>
  )
}

export default User