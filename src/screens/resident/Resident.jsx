import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addQueue,
  useIsVerified,
  verifyResident,
  useVerifyResident,
  useIsQueueAdded,
  logOutResident,
} from "../../redux/appSlice";
import classNames from "classnames/bind";
import styles from "./Resident.scss";
import CustomButton from "../../shared/CustomButton";
import "../scss/GlobalStyles.scss";

const Resident = () => {
  const [uinfin, setUinfin] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [logout, setLogout] = useState(false);

  const isVerified = useIsVerified();
  const residentData = useVerifyResident();
  const isQueueAdded = useIsQueueAdded();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cx = classNames.bind(styles);

  if (isQueueAdded) {
    return <Navigate to="/residentPage" />;
  }

  if (logout) {
    return <Navigate to="/" />;
  }

  const logoutHandler = async () => {
    dispatch(logOutResident());
    setLogout(true);
  };

  const uinfinHandler = (event) => {
    setUinfin(event.target.value);
  };

  const mobileNoHandler = (event) => {
    setMobileNo(event.target.value);
  };

  const buttonHandler = async () => {
    if ((uinfin && mobileNo !== "") || (uinfin && mobileNo !== null)) {
      dispatch(verifyResident({ uinfin, mobileNo }));
    } else {
      alert("Please fill up all required fields first.");
    }
  };

  const renderAddQueue = () => {
    return (
      <div className={cx("queue-container")}>
        {!residentData?.[4] ? (
          <h3>
            Please check and confirm that the particulars are correct before
            adding chocolate ticket.
          </h3>
        ) : (
          <h3>Chocolate ticket exist.</h3>
        )}
        <div className={cx("queue-data")}>
          <div>
            <b>Full Name:</b> {residentData?.[0]}
          </div>
          <div>
            <b>Address:</b> {residentData?.[1]}
          </div>
          <div>
            <b>Loyalty Fin Card No:</b> {residentData?.[2]}
          </div>
          <div>
            <b>Chocolate Ticket No:</b> {residentData?.[3]}
          </div>
        </div>

        {!residentData?.[4] ? (
          <CustomButton
            className="add-ticket-btn"
            content="Add Chocolate Ticket"
            clicked={async () => {
              dispatch(addQueue({ uinfin, mobileNo }));
            }}
          ></CustomButton>
        ) : null}
      </div>
    );
  };

  return (
    <div className={cx("container")}>
      <h2>Customer or Resident</h2>
      <div className={cx("description")}>
        Enter your Loyalty Fin Card No last 5 characters and mobile number to
        receive chocolate ticket.
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
          placeholder="mobile no"
          value={mobileNo}
          onChange={mobileNoHandler}
        ></input>
      </div>
      <div className={cx("verifiy-box")}>
        <CustomButton
          className="submit-color"
          content="Verify"
          clicked={buttonHandler}
        >
          Verify
        </CustomButton>
      </div>
      <div className={cx("logout-box")}>
        <CustomButton
          className="logout-color "
          content="Logout"
          clicked={logoutHandler}
        >
          Logout
        </CustomButton>
      </div>
      {isVerified && renderAddQueue()}
    </div>
  );
};

export default Resident;
