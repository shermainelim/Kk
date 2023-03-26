import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "../screens/Welcome";
import Resident from "../screens/resident/Resident";
import Staff from "../screens/staff/Staff";

import AdminLogin from "../screens/admin/AdminLogin";
import AdminPage from "../screens/admin/AdminPage";
import AdminPageAck from "../screens/admin/AdminPageAck";
import ErrorPage from "../screens/ErrorPage";
import Login from "../screens/Login";
import Register from "../screens/Register";

import ResidentPage from "../screens/resident/ResidentPage";
import StaffPage from "../screens/staff/StaffPage";
import StaffVoucherAck from "../screens/staff/StaffVoucherAck";
import Profile from "../assets/profile.png";

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
          to="/staff"
          style={{
            color: "rgb(41, 215, 183)",
            textDecoration: "none",
            padding: "20px"
          }}
        >
          
          About Me
        </Link>

        <Link
          to="/"
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
          
          Promo Codes
        </Link>
      </nav>

      <Routes>
        <Route path="/resident" element={<Resident />} />
        <Route path="/residentPage" element={<ResidentPage />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/adminPageAck" element={<AdminPageAck />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/staffPage" element={<StaffPage />} />
        <Route path="/staffVoucherAck" element={<StaffVoucherAck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppNavigator;
