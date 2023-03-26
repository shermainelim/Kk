import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { completeRegister } from "../../redux/appSlice";
import classNames from "classnames/bind";
import styles from "./AdminPageAck.scss";
import CustomButton from "../../shared/CustomButton";
import "../scss/GlobalStyles.scss";

const AdminPageAck = () => {
  const [logoutCompleteRegister, setLogoutCompleteRegister] = useState(false);

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  if (logoutCompleteRegister) {
    return <Navigate to="/adminPage" />;
  }

  const completeRegisterHandler = async () => {
    dispatch(completeRegister());

    setLogoutCompleteRegister(true);
  };

  return (
    <div className={cx("container")}>
      <h2>Staff Creation Successful.</h2>
      <CustomButton
        className="btn"
        content="New Staff Entry"
        clicked={completeRegisterHandler}
      ></CustomButton>
    </div>
  );
};

export default AdminPageAck;
