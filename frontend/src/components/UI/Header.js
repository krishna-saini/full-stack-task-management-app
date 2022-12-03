import Button from "./Button";
import { account } from "../../config/appwriteConfig"
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  const loginHandler = ()=>{}
 
  const signupHandler =()=>{}

  // logout functionality
  const logoutHandler = async ()=>{
    try{
      await account.deleteSession('current');
      // navigate to another route
      navigate('/')
    }catch(err){
      alert(err.message)
    }
  }
  return (
    <div>
      {props.isLoggedIn ? (
        <Button onClick={logoutHandler}>Logout</Button>
      ) : (
        <>
          <Button onClick={loginHandler}>Login</Button>
          <Button onClick={signupHandler}>SignUp</Button>
        </>
      )}
    </div>
  );
}

export default Header;
