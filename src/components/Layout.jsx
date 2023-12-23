import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SecretForm from "../pages/SecretForm";
import ErrorPage from "../pages/ErrorPage";


function Layout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/secretform" element={<SecretForm />} />
          <Route exact path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layout;
