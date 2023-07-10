import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Page/Homepage";
import Login from "../Page/Login";
import Register from "../Page/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={< Homepage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
    </Routes>
  );
};

export default MainRoutes;
