import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useStaff,
  staffVerifyQueue,
  logOutStaff,
  useIsLoggedInStaff,
  useStaffVerifyQueue,
  useIsStaffChecked,
  issueVoucher,
  useCompletedStatus,
} from "../../redux/appSlice";

import classNames from "classnames/bind";
import styles from "./StaffPage.scss";
import CustomButton from "../../shared/CustomButton";
import "../scss/GlobalStyles.scss";

const StaffPage = () => {
  const [logout, setLogout] = useState(false);

  const [staffFullName, setStaffFullName] = useState("");

  const [uinfin, setUinfin] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [queueNo, setQueueNo] = useState("");

  const staffData = useStaff();
  const isLoggedInStaff = useIsLoggedInStaff();

  let residentQueueData = useStaffVerifyQueue();
  const isStaffChecked = useIsStaffChecked();
  const isCompletedState = useCompletedStatus();

  useEffect(() => {
    if (isLoggedInStaff) {
      setStaffFullName(staffData[0]);
    }
  }, [isLoggedInStaff]);

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  if (logout) {
    return <Navigate to="/" />;
  }

  if (isCompletedState) {
    return <Navigate to="/staffVoucherAck" />;
  }

  const renderQueueDetails = () => {
    console.log("residenntdata4", residentQueueData?.[4]);
    console.log("resudebt5", residentQueueData?.[5]);
    return (
      <div className={cx("data-container")}>
        {!residentQueueData?.[4] ? <h1>Data:</h1> : <h1>Data found</h1>}
        <div>
          <b>Full Name:</b> {residentQueueData?.[0]}
        </div>
        <div>
          <b>Address: </b>
          {residentQueueData?.[1]}
        </div>
        <div>
          <b>Loyalty Card FIN No</b> {residentQueueData?.[2]}
        </div>
        <div>
          <b>Chocolate Ticket No:</b> {residentQueueData?.[3]}
        </div>
        <div>
          <b>Completed:</b> {residentQueueData?.[5]}
        </div>

        {!residentQueueData?.[4] || residentQueueData?.[5] ? null : (
          <CustomButton
            className="chocolate-bar"
            content="Issue Chocolate Bar"
            clicked={voucherHandler}
          ></CustomButton>
        )}
      </div>
    );
  };

  const uinfinHandler = (event) => {
    setUinfin(event.target.value);
  };

  const mobileNoHandler = (event) => {
    setMobileNo(event.target.value);
  };

  const queueNoHandler = (event) => {
    setQueueNo(event.target.value);
  };

  const logoutHandler = async () => {
    dispatch(logOutStaff());

    setLogout(true);
  };

  const buttonHandler = async () => {
    if (staffFullName.length === 0) {
      alert("Please login again");
    } else {
      if (
        (queueNo && uinfin && mobileNo !== "") ||
        (queueNo && uinfin && mobileNo !== null)
      ) {
        dispatch(staffVerifyQueue({ queueNo, uinfin, mobileNo }));
      } else {
        alert("Please fill up all required fields first.");
      }
    }
  };

  const voucherHandler = async () => {
    if (staffFullName.length === 0) {
      alert("Please login again");
    } else {
      dispatch(issueVoucher({ queueNo, uinfin, mobileNo, staffFullName }));
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("description")}>
        Welcome to Staff Page! {staffFullName}
      </div>

      <div className={cx("input-box")}>
        <input
          type="text"
          required
          placeholder="Chocolate Ticket No"
          value={queueNo}
          onChange={queueNoHandler}
        ></input>
      </div>
      <div className={cx("input-box")}>
        <input
          type="text"
          required
          maxLength={9}
          placeholder="Loyalty Fin Card No last 5 characters"
          value={uinfin}
          onChange={uinfinHandler}
        ></input>
      </div>
      <div className={cx("input-box")}>
        <input
          type="tel"
          required
          maxLength={8}
          placeholder="Mobile Number"
          value={mobileNo}
          onChange={mobileNoHandler}
        ></input>
        _
      </div>
      <div>
        <CustomButton
          className="login-verify-color"
          content="Verify Chocolate Ticket"
          clicked={buttonHandler}
        ></CustomButton>
      </div>
      <div>
        <CustomButton
          className="staff-logout"
          content="Logout"
          clicked={logoutHandler}
        ></CustomButton>
      </div>

      {isStaffChecked && renderQueueDetails()}
    </div>
  );
};

export default StaffPage;
