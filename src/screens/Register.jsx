import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/appSlice";

const Register = () => {
  const [username, setUsernameReg] = useState("");
  const [password, setPasswordReg] = useState("");

  const dispatch = useDispatch();

  const usernameHandler = (event) => {
    setUsernameReg(event.target.value);
  };

  const passwordHandler = (event) => {
    setPasswordReg(event.target.value);
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameHandler}></input>

        <label>Password</label>
        <input type="text" value={password} onChange={passwordHandler}></input>

        <button
          onClick={async () => {
            dispatch(register({ username, password }));
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
