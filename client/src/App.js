import './App.css';
import React, {useState, useEffect } from "react"; 
import Axios from 'axios'
import CreateApplicant from './createApplicant';
import CreateRecruiter from './createRecruiter';
import ApplicantLogin from './applicantLogin';
import RecruiterLogin from './recruiterLogin';


function App() {

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/location").then((response) => {
      console.log(response.data)
    });
  }, []);

  return (
    <div className="App">
      <h1> Final Project </h1>
      <CreateApplicant />
      <br />
      <CreateRecruiter />
      <br />
      <ApplicantLogin />
      <br />
      <RecruiterLogin />
      <br />
    </div> 
  );
}

export default App;
