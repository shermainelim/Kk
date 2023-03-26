import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useVerifyResident,
  logOutResident,
  useQueue,
} from "../../redux/appSlice";
import classNames from "classnames/bind";
import styles from "./ResidentPage.scss";
import CustomButton from "../../shared/CustomButton";
import "../scss/GlobalStyles.scss";
import axios from "../../utils/axios";

const ResidentPage = () => {
  const [email, setEmail] = useState("");

  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  const residentData = useVerifyResident();
  const queueNumberCreated = useQueue();
  const residentName = residentData?.[0];

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      email,
      residentName,
      queueNumberCreated,
    };

    const response = await axios.post(
      "https://mysql-deploy-heroku-2.herokuapp.com/api/sendemail",
      data
    );
    console.log(response.data);
    alert("Email Sent!");
  };

  const logoutHandler = async () => {
    dispatch(logOutResident());

    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/" />;
  }

  return (
    <div className={cx("container")}>
      <div>
        <div>
          <b>Full Name:</b> {residentData?.[0]}
        </div>
        <div>
          <b>Address:</b> {residentData?.[1]}
        </div>
        <div>
          <b>Loyalty Card FIN No</b> {residentData?.[2]}
        </div>
        <div>
          <b>Chocolate Ticket No:</b> {queueNumberCreated}
        </div>

        <div className={cx("container")}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <CustomButton
            className="submit-color"
            content="Email Chocolate Ticket"
            clicked={sendEmail}
          ></CustomButton>
        </div>
      </div>

      <CustomButton
        className="logout-color "
        content="Logout"
        clicked={logoutHandler}
      ></CustomButton>
    </div>
  );
};

export default ResidentPage;
