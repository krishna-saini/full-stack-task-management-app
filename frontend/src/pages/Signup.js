import React, { useState } from "react";
import { account } from "../config/appwriteConfig";
import { ID } from "appwrite";
import axios from "axios"

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // sign up
      const newUser = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name
      );
     

      // send data to backend 
      
      
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  return (
    <div className="">
      <form
        className=""
        onSubmit={(e) => handleSignup(e)}
        method="POST"
        action="#"
      >
        <input
          className="
          apperance-none block px-3 py-2
                
            "
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          className="
               
            "
          placeholder="Email address"
          type="email"
          name="email"
          id="email"
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
