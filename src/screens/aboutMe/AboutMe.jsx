import React from "react";
import classNames from "classnames/bind";
import styles from "./AboutMe.scss";
import "../scss/GlobalStyles.scss";
import Kkpose from "../../assets/kkpose.png"

const AboutMe = () => {
  const cx = classNames.bind(styles);
  

  return (
    <div className={cx("container")}>
     <img
            style={{ width: "345px", height: "200px", margin:"-10px", paddingRight:"10px" }}
            src={Kkpose}
            alt="Pose"
          ></img>

      <div className={cx("about-me")}>
        About Me
      </div>

      <div className={cx("about-me-desc")}>
        With over 8 years of experience in Civil Engineering <br/>
        and proven results in Infrastructure, Structural, <br/>
        Architectural and External Works projects such as <br/>
        the Changi East Depot Tender, and Changi Airport Runway, <br/>
        I have a strong background in developing practical solutions <br/>
        while minizing unexpected risks. <br/><br/>
        As part of my industrial Proof-of-Concept(POC) <br/>
        I have built and delivered an enterprise <br/>
        Research Data Collection System (RDCS) for NUS Medicine. <br/>
        Having delivered multiple end-to-end solutions throughout<br/>
        the GDipSA program, internship and my prior work history, <br/>
        I am looking to bridge technology and <br/>
        on the ground implementation teams and stakeholders<br/>
        to save cost and improve productvitiy. <br/>
      </div>
    </div>
  );
};

export default AboutMe;
