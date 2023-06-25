import React from "react";
  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "../components/pages/Lobby";
import Rooms from "../components/pages/Rooms";
import Bookhistory from "../components/pages/Bookhistory";
const Login = React.lazy(() => import("../components/pages/Login"))
import PrivateRoute from "../ui/PrivateRoute";

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lobby" element={<PrivateRoute component={Lobby} />} />
          <Route path="/rooms" element={<PrivateRoute component={Rooms} />} />
          <Route path="/book-history" element={<PrivateRoute component={Bookhistory} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}