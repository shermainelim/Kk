import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "../scss/GlobalStyles.scss";
import Login from "../Login";
import { useIsLoggedInAdmin } from "../../redux/appSlice";

const AdminLogin = () => {
  let navigate = useNavigate();
  const cx = classNames.bind(styles);

  const isLoggedInAdmin = useIsLoggedInAdmin();

  if (isLoggedInAdmin) {
    return <Navigate to="/adminPage" />;
  }

  return (
    <div className={cx("container")}>
      <h2>Admin</h2>
      <div className={cx("login")}>
        <Login staff={false} />
      </div>
    </div>
  );
};

export default AdminLogin;
