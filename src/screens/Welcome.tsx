import * as React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./scss/Welcome.scss";
import residentLogo from "../assets/resident.png";
import staffLogo from "../assets/staff.png";
import adminLogo from "../assets/admin.png";
import CustomButton from "../shared/CustomButton";
import "../screens/scss/GlobalStyles.scss";
import Cover from "../assets/cover.png";
import Kk from "../assets/kk2.png"

const Welcome = () => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const renderTekkie = () => {
    return (
      <div className={cx("category")}>
       Civil Engineer By Day, Tekkie By Night
      </div>
    );
  };

  const renderDesc = () => {
    return (
      <div className={cx("category-desc")}>
        CivilTEKK aims to share information about Civil Engineering, <br/>Programming personal projects to help the other aspiring engineers<br/>improve on their productivity and automate more work. <br/>I also share on various tools that make my life easier.
      </div>
    );
  };

  const renderAvatar = () => {
    return (
      <div className={cx("category")}>
        <img style={{ width: "220px", height: "220px" }} src={Kk} alt="Logo" />
      </div>
    );
  };

  return (
    <div data-testid="welcome-container" className={cx("container")}>
     
      <img
            style={{ width: "220px", height: "120px" }}
            src={Cover}
            alt="Company Logo"
          ></img>
    
      {renderTekkie()}
      {renderDesc()}
      {renderAvatar()}
    </div>
  );
};

export default Welcome;
