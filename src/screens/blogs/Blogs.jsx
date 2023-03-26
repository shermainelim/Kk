import React from "react";
import classNames from "classnames/bind";
import styles from "./Blogs.scss";
import "../scss/GlobalStyles.scss";
import Cover from "../../assets/cover.png";
import CustomButton from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  
  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  

  return (
    <div className={cx("container")}>
       <img
            style={{ width: "220px", height: "120px" }}
            src={Cover}
            alt="Company Logo"
          ></img>
    <div className={cx("blogs")}>
        CivilTEKK
      </div>

      <div className={cx("blogs-desc")}>
        CivilTekk was created to share my ideas and projects that I feel <br/>
        will benefit the average engineer. Be it in Civil Engineering, CAD <br/>
        , Automation or Software Engineering, anything goes inside CivilTekk. <br/>
        Heck, you can even share what kind of ideas, <br/>
        if I think is feasible, I will try it out and let you know. 
      </div>
      <CustomButton
            className="civil-blog-btn"
            content="Come have a look at my blog"
            clicked={() => {navigate("/")}}
          ></CustomButton>


<div className={cx("blogs")}>
       NextTEKK
      </div>

      <div className={cx("blogs-desc")}>
      NextTEKK was created to provide consulting services<br/>
        for Civil Engineering and Website Consulting Services. <br/>
      </div>
      <CustomButton
            className="civil-blog-btn"
            content="NEXTTEKK"
            clicked={() => {window.location.href = 'https://www.nexttekk.com/'}}
          ></CustomButton>
    </div>
  );
};

export default Blogs;
