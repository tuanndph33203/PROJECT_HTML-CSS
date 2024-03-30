import useAuthMutation from "@/hooks/useAuth";

const Register = (props: any) => {
    const { mutate} = useAuthMutation({ action: "REGISTER" });

    const handleRegister = async (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log('Form data:', data);
      await mutate(data);
    };
    return (
        <form method="POST" action="/auth/register" onSubmit={handleRegister} style={{ display: props.change ? "none" : "block" }} className="register-boxs ">
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
                    <input name="confirmPassword" type="password" />
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
    )
}

export default Register