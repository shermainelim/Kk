import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AdminPage.scss";
import { useDispatch } from "react-redux";
import {
  logOutAdmin,
  useAdmin,
  register,
  useIsLoggedInAdmin,
  useRegisterCreated,
} from "../../redux/appSlice";
import CustomButton from "../../shared/CustomButton";
import "../scss/GlobalStyles.scss";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [logout, setLogout] = useState(false);

  //data
  const [adminFullName, setAdminFullName] = useState("");

  const adminData = useAdmin();
  const isLoggedInAdmin = useIsLoggedInAdmin();
  const isRegisterCreated = useRegisterCreated();

  useEffect(() => {
    if (isLoggedInAdmin) {
      setAdminFullName(adminData[0]);
    }
  }, [isLoggedInAdmin]);

  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  if (logout) {
    return <Navigate to="/" />;
  }

  if (isRegisterCreated) {
    return <Navigate to="/adminPageAck" />;
  }

  const logoutHandler = async () => {
    dispatch(logOutAdmin());

    setLogout(true);
  };

  return (
    <div className={cx("container")}>
      <div>Welcome to Admin Page ! {adminFullName}</div>

      <div className={cx("App")}>
        <div className={cx("registration")}>
          <h2>Create New Staff</h2>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {username.length === 0 && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Username is required
            </div>
          ) : null}
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {password.length === 0 && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Password is required
            </div>
          ) : null}
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {confirmPassword.length === 0 && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Confirm Password is required
            </div>
          ) : null}
          {confirmPassword !== password && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Confirm password not match
            </div>
          ) : null}
          <label>Full Name</label>
          <input
            type="text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          {fullName.length === 0 && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Full name is required
            </div>
          ) : null}
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {email.length === 0 && formSubmitted ? (
            <div style={{ color: "darkred", marginBottom: "20px" }}>
              Email is required
            </div>
          ) : null}
          <CustomButton
            className="btn"
            content="Register Staff"
            clicked={async () => {
              setFormSubmitted(true);
              if (
                username.length !== 0 &&
                password.length &&
                confirmPassword.length !== 0
              ) {
                if (password === confirmPassword) {
                  dispatch(register({ username, password, fullName, email }));
                }
              }
            }}
          ></CustomButton>

          <CustomButton
            className="btn"
            content="Logout"
            clicked={logoutHandler}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
