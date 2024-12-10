import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Category from "./pages/Category";
import Companies from "./pages/Companies";
import Companydetails from "./pages/Companies/Companydetails";
import CreateAd from "./pages/CreateAd";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companydetails" element={<Companydetails />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
