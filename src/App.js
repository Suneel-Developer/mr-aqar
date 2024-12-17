import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Companies from "./pages/Offices";
import Companydetails from "./pages/Offices/Officesdetails";
import CreateAd from "./pages/CreateAd";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Buypackage from "./pages/Buypackage";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/Profile";
import Myads from "./pages/Myads";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offices" element={<Companies />} />
        <Route path="/officesdetails" element={<Companydetails />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/buypackage" element={<Buypackage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/myads" element={<Myads />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
