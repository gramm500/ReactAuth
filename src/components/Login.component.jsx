import React from "react";
import Input from "./Input.component";

const Login = (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="enter your username" />
      <Input type="password" placeholder="enter your password" />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
