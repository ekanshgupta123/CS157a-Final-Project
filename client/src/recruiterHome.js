import { useEffect, useState } from "react";
import Axios from 'axios'
import {useLocation } from 'react-router-dom';


const RecruiterHome = (props) => {
    const {state} = useLocation();
    const {recruiterID} = state;

    const [address ,setAddress] = useState('')
    const [city ,setCity] = useState('')
    const [stateLocation ,setState] = useState('')

    const [title ,setTitle] = useState('')
    const [description ,setDescription] = useState('')
    const [startDate ,setStartDate] = useState('')

    const [applicationList, setApplicationList] = useState([])
    const [applicantList, setApplicantList] = useState([])

    const submitCreateApplication = async () => {
        try {
          const locationResponse = await Axios.post('http://localhost:3001/api/insertLocation', {
              address:address,
              city:city,
              state:stateLocation
          });
    
          // Handle the successful insertion
          const locationId = locationResponse.data.insertId
          
          const roleResponse = await Axios.post('http://localhost:3001/api/createRole', {
              title:title,
              description:description,
              startDate:startDate,
              locationId: locationId
            });
            const roleID = roleResponse.data.insertId
            const applicationResponse = await Axios.post('http://localhost:3001/api/createApplication', {
                roleID:roleID,
                recruiterID: recruiterID
            });

        alert("Successful insert");
        
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
      };
      console.log("sedkmf", recruiterID)
      useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/application/${recruiterID}`).then((response) => {
            setApplicationList(response.data)
        });
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/applicant/${recruiterID}`).then((response) => {
            setApplicantList(response.data)
        })
    })

    return (
        <div className="App">
            <h1> Recruiter Home Page </h1>
            <h3> Create an Application: </h3>
            <div className = 'form'>
                <h3> Application Info: </h3>
                <label> Address: </label>
                <input type='text' name='Address' onChange={(e) => {
                    setAddress(e.target.value)
                }} />
                <br/ >
                <label> City: </label>
                <input type='text' name='City' onChange={(e) => {
                    setCity(e.target.value)
                }} />
                <br/ >
                <label> State: </label>
                <input type='text' name='State' onChange={(e) => {
                    setState(e.target.value)
                }} />
                <br/ >
                <h3> Role Information: </h3>
                <label> Title: </label>
                <input type='text' name='Title' onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <br/ >
                <label> Description: </label>
                <input type='text' name='Description' onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <br/ >
                <label> Start Date: </label>
                <input type='date' name='Start Date' onChange={(e) => {
                    setStartDate(e.target.value)
                }} />
                <button onClick={submitCreateApplication}> Create Application </button>
                <br/ >
                <h1> Your Previous Applications Made: </h1>
                    {applicationList.map((val) => {
                        return (
                        <div>
                            <h3> 
                                Role Title: {val.Title} | Description: {val.Description}
                            </h3>
                        </div>
                        )
                    })}
                <h1> Applicants: </h1>
                {applicantList.map((val) => {
                    return(
                        <div> 
                            <h3>
                                Applicant Name: {val.FirstName} {val.LastName} | School: {val.School} | GradYear: {val.GradYear}
                            </h3>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default RecruiterHome