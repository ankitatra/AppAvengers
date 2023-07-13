import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Page/Homepage";

import Register from "../Page/Register";
import Login from "../Page/Login";
import PrivateRoute from "./PrivateRoutes";
import Addnotes from "../Page/Addnotes";
import SingleNote from "../Components/SingleNotes";
import EditRoute from "../Components/EditBlog";
import Dashboard from "../Page/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={< Homepage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="/notes" element= {
        <PrivateRoute>
          <Addnotes/>
        </PrivateRoute>
      }/>
      <Route
        path="/dashboard/:id"
        element={
          <PrivateRoute>
            <SingleNote/>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/edit/:id"
        element={
          <PrivateRoute>
            <EditRoute/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
