import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin, login } from "../redux/appSlice";
import classNames from "classnames/bind";
import styles from "./Login.scss";
import CustomButton from "../shared/CustomButton";

const Login = ({ staff }) => {
  const [username, setUsernameLogin] = useState("");
  const [password, setPasswordLogin] = useState("");

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  const usernameHandler = (event) => {
    setUsernameLogin(event.target.value);
  };

  const passwordHandler = (event) => {
    setPasswordLogin(event.target.value);
  };

  return (
    <div className={cx("login-container")}>
      <h1>Login</h1>
      <div className={cx("input-box ")}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={usernameHandler}
        ></input>
      </div>
      <div className={cx("input-box ")}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        ></input>
      </div>

      {staff ? (
        <CustomButton
          className="btn"
          content="Login"
          clicked={async () => {
            dispatch(login({ username, password }));
          }}
        >
          Login
        </CustomButton>
      ) : (
        <CustomButton
          className="btn"
          content="Login"
          clicked={async () => {
            dispatch(loginAdmin({ username, password }));
          }}
        ></CustomButton>
      )}
    </div>
  );
};

export default Login;
