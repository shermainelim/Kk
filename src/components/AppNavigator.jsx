import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "../screens/Welcome";
import ErrorPage from "../screens/ErrorPage";
import Profile from "../assets/profile.png";
import AboutMe from "../screens/aboutMe/AboutMe";
import Blogs from "../screens/blogs/Blogs";

const AppNavigator = () => {
  return (
    <div style={{height:"100%"}}>
    <Router>
      <nav
        style={{
          textAlign: "center",
          flexDirection: "row",
          padding: "20px",
          backgroundColor:"#101535",
          display: "flex",
          justifyContent:"center"
        }}
      >
         <Link
          to="/"
          style={{
            color: "purple",
            textDecoration: "none",
          }}
        >
          <img
            style={{ marginRight: "10px", width: "80px", height: "80px", margin:"-10px", paddingRight:"10px" }}
            src={Profile}
            alt="Company Logo"
          ></img>
         
        </Link>
        <Link
          to="/aboutMe"
          style={{
            color: "rgb(41, 215, 183)",
            textDecoration: "none",
            padding: "20px"
          }}
        >
          
          About
        </Link>

        <Link
          to="/blogs"
          style={{
            color: "rgb(41, 215, 183)",
            textDecoration: "none",
            padding: "20px"
          }}
        >
          
          Blogs
        </Link>

        <Link
          to="/"
          style={{
            color: "rgb(41, 215, 183)",
            textDecoration: "none",
            padding: "20px"
          }}
        >
          
          Promos
        </Link>
      </nav>

      <Routes>
       
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppNavigator;
