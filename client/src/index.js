import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateApplicant from "./createApplicant";
import ApplicantInfo from "./applicantInfo";
import RecruiterInfo from "./recruiterInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="createApplicant" element={< CreateApplicant/>} />
        <Route path="applicantInfo" element={< ApplicantInfo />} />
        <Route path="recruiterInfo" element={< RecruiterInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);