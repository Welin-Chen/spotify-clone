import React from "react";
import "./Login.css";
import logo from "../img/spotify-logo.JPEG";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src={logo}
        // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
