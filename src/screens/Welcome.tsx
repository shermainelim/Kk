import * as React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./scss/Welcome.scss";
import residentLogo from "../assets/resident.png";
import staffLogo from "../assets/staff.png";
import adminLogo from "../assets/admin.png";
import CustomButton from "../shared/CustomButton";
import "../screens/scss/GlobalStyles.scss";

const Welcome = () => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const renderResident = () => {
    return (
      <div data-testid="welcome-category-resident" className={cx("category")}>
        <img
          data-testid="img-logo-resident"
          className={cx("logo")}
          src={residentLogo}
          alt="Logo"
        />
        <CustomButton
          className="resident-btn"
          testId="resident"
          content="Customers / Residents"
          clicked={() => {
            navigate("/resident");
          }}

          // resident={true}
        ></CustomButton>
      </div>
    );
  };

  const renderStaff = () => {
    return (
      <div className={cx("category")}>
        <img className={cx("logo")} src={staffLogo} alt="Logo" />
        <CustomButton
          className="staff-btn"
          content="Chocolate Staffs"
          clicked={() => {
            navigate("/staff");
          }}

          // staff={true}
        ></CustomButton>
      </div>
    );
  };

  const renderAdmin = () => {
    return (
      <div className={cx("category")}>
        <img className={cx("logo")} src={adminLogo} alt="Logo" />
        <CustomButton
          className="admin-btn"
          content="Administrators"
          clicked={() => {
            navigate("/adminLogin");
          }}
        ></CustomButton>
      </div>
    );
  };

  return (
    <div data-testid="welcome-container" className={cx("container")}>
      <div className={cx("text")} data-testid="text">
        {"Collect a ticket and redeem a bar of chocolate today."}
      </div>
      {renderResident()}
      {renderStaff()}
      {renderAdmin()}
    </div>
  );
};

export default Welcome;
