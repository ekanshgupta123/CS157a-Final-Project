import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateApplicant from "./createApplicant";
import ApplicantInfo from "./applicantInfo";
import RecruiterInfo from "./recruiterInfo";
import RecruiterHome from "./recruiterHome";
import ApplicantHome from "./applicantHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="createApplicant" element={< CreateApplicant/>} />
        <Route path="applicantInfo" element={< ApplicantInfo />} />
        <Route path="recruiterInfo" element={< RecruiterInfo />} />
        <Route path="recruiterHome" element={< RecruiterHome />} />
        <Route path="applicantHome" element={< ApplicantHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);