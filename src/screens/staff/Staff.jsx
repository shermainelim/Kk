import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../Login";

import classNames from "classnames/bind";
import styles from "./Staff.scss";
import "../scss/GlobalStyles.scss";
import { useIsLoggedInStaff } from "../../redux/appSlice";

const Staff = () => {
  const cx = classNames.bind(styles);
  const isLoggedInStaff = useIsLoggedInStaff();

  if (isLoggedInStaff) {
    return <Navigate to="/staffPage" />;
  }
  return (
    <div className={cx("container")}>
      <h2>Staff</h2>

      <div className={cx("login")}>
        <Login staff={true} />
      </div>
    </div>
  );
};

export default Staff;
