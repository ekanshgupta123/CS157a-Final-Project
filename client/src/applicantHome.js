import { useEffect, useState } from "react";
import Axios from 'axios'
import { useLocation } from 'react-router-dom';
import React from 'react'


const ApplicantHome = (props) => {

    const [applicationList, setApplicationList] = useState([])
    const {state} = useLocation();
    const {username} = state;
    const [clickedApplicationID, setClickedApplicationID] = useState(null);


    useEffect(() => {
        Axios.get('http://localhost:3001/api/get/application/').then((response) => {
            console.log(response)
            setApplicationList(response.data)
        });
    }, []);
      

    const submitApplicantApplication = async (applicationID) => {
        try {
            const response = await Axios.get('http://localhost:3001/api/get/applicantID', {
              params: {
                username: username,
              },
            });
          
            console.log("application id: ", applicationID);
            const applicantID = response.data.applicantID;
            console.log(applicantID); // Use the applicantID as needed
            const responsePost = await Axios.post('http://localhost:3001/api/applicantApplication', {
                applicantID: applicantID,
                applicationID: applicationID
            })
            setClickedApplicationID(applicationID);
            alert("Successfully Applied");

          } catch (error) {
            console.error(error);
          }
        
    }

    return (
        <div className="App">
            <h1> Applicant Home Page </h1>
            <h1> Jobs: </h1>
                    {applicationList.map((val) => {
                        return (
                        <div>
                            <h3> 
                                Application ID: {val.ApplicationID} Title: {val.Title} | Role: {val.Description} | Location: {val.Address} | Start Date: {new Date(val.StartDate).toLocaleDateString()} Recruiter Name: {val.FirstName} {val.LastName}
                                &nbsp; 
                                <button
                                    onClick={() => submitApplicantApplication(val.ApplicationID)}
                                    style={{
                                    backgroundColor:
                                        clickedApplicationID === val.ApplicationID ? 'red' : 'inherit',
                                    }}
                                >
                                    Apply
                                </button>
                            </h3>
                        </div>
                        )
                    })}
        </div>
    )
}
export default ApplicantHome;