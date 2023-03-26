import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  useStaffVerifyQueue,
  completeVoucher,
  useCompleteIssueVoucher,
} from "../../redux/appSlice";
import CustomButton from "../../shared/CustomButton";
import classNames from "classnames/bind";
import styles from "./StaffVoucherAck.scss";
import "../scss/GlobalStyles.scss";

const StaffVoucherAck = () => {
  const [logoutVoucher, setLogoutVoucher] = useState(false);

  const residentQueueData = useStaffVerifyQueue();
  const completedIndicator = useCompleteIssueVoucher();

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  if (logoutVoucher) {
    return <Navigate to="/staffPage" />;
  }

  const logoutVoucherHandler = async () => {
    dispatch(completeVoucher());

    setLogoutVoucher(true);
  };

  return (
    <div className={cx("container")}>
      <h1>Chocolate Bar Issued</h1>
      <div>
        <b>Full Name:</b> {residentQueueData?.[0]}
      </div>
      <div>
        <b>Address:</b> {residentQueueData?.[1]}
      </div>
      <div>
        <b>Loyalty Card FIN No: </b>
        {residentQueueData?.[2]}
      </div>
      <div>
        <b>Chocolate Ticket No:</b> {residentQueueData?.[3]}
      </div>
      <div>
        <b>Completed:</b> {completedIndicator}
      </div>
      <CustomButton
        className="btn"
        content="New Entry"
        clicked={logoutVoucherHandler}
      ></CustomButton>
    </div>
  );
};

export default StaffVoucherAck;
