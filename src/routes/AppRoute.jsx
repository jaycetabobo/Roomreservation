import React from "react";
  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "../components/pages/Lobby";

const Login = React.lazy(() => import("../components/pages/Login"))

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}