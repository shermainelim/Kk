import * as React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./scss/Welcome.scss";
import "../screens/scss/GlobalStyles.scss";
import Cover from "../assets/cover.png";
import Kk from "../assets/kk2.png"
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const renderTekkie = () => {
    return (
      <div className={cx("category")}>
         <TypeAnimation
      sequence={[
        "Civil Engineer By Day",
        2000,
        "Software Engineer By Night",
        2000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={20}
      
      style={{ fontSize: '1.5em', display: 'inline-block' }}
    />
      
      </div>
    );
  };

  const renderDesc = () => {
    return (
      <div className={cx("category-desc")}>
        CivilTEKK aims to share information <br/>
        on Civil Engineering and Programming <br/>
        with personal projects to help<br/>
        aspiring engineers improve on their<br/>
        productivity and automate work. <br/>
        I also share on various tools that<br/>
        I use to make my life easier.
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
