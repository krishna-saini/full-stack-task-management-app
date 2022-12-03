import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { account } from "../config/appwriteConfig";
import Button from "../components/UI/Button";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      // match entered data with the data stored in appwrite
      await account.createEmailSession(user.email, user.password);
      console.log("USER LOGGEDIN SUCCESSFULLY");

      // if succeeds, navigate
      navigate("/todos");
    } catch (err) {
      console.log("Error: ", err.message);
      alert(`Unable to login. either ${err.message} or If you haven't created an account, we recommend signing up`);
    }
  };

  const signupHandler = ()=>{
    navigate('/signup')
  }

  return (
    <div className="">
      <form
        className=""
        onSubmit={(e) => loginHandler(e)}
        method="POST"
        action="#"
      >
        <input
          className="
               
            "
          placeholder="Email address"
          type="email"
          name="email"
          id="email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          className="
                
            "
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button>Login</Button>
       
      </form>
      <Button onClick={signupHandler}>SignUp</Button>
    </div>
  );
}

export default Login;
