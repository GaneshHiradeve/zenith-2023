import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const[login,setlogin]=useState('/login');

  const Getdata = () => {
     if(user=='Zenith' && Password=='1234'){
        setlogin('/admin');
     }else{
        setlogin('/login');
     }
  };
  return (
    <>
      <div class="formbold-form-wrapper">
        <h1>Continue to Admin</h1>
        <form >
          <div class="formbold-mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              class="formbold-form-input"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div class="formbold-mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Password"
              class="formbold-form-input"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <Link to={login}>
            <button type="submit" class="formbold-btn" onClick={Getdata}    >
              Submit
            </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
