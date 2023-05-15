import './App.css';
import React, {useState, useEffect } from "react"; 
import Axios from 'axios'

function App() {

  const [address ,setAddress] = useState('')
  const [city ,setCity] = useState('')
  const [state ,setState] = useState('')

  const [company ,setCompany] = useState('')
  const [role ,setRole] = useState('')
  const [description ,setDescription] = useState('')
  const [startDate ,setStartDate] = useState(null)
  const [endDate ,setEndDate] = useState(null)

  const [firstName ,setFirstName] = useState('')
  const [lastName ,setLastName] = useState('')
  const [school ,setSchool] = useState('')
  const [gradYear ,setGradYear] = useState(0)
  const [resume ,setResume] = useState(null)

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/location").then((response) => {
      console.log(response.data)
    });
  }, []);

  // const submitAddressInfo = () => {
  //   console.log("submitCompanyInfo function called");
  //   Axios.post('http://localhost:3001/api/insertLocation' , 
  //   {address:address, city:city, state:state }) 
  //   .then(() => {
  //       console.log("sdknf") 
  //       alert("successful insert")
  //     });
  // };


  // const submitCompanyInfo = () => {
  //   Axios.post('http://localhost:3001/api/insertCompany' , 
  //   {company:company, role:role, description:description, startDate: startDate, endDate: endDate}) 
  //   .then(() => {
  //       console.log("sdknf") 
  //       alert("successful insert")
  //     })
  // };

  // const sumbitApplicantInfo = () => {
  //   Axios.post('http://localhost:3001/api/insertApplicant' , 
  //   {firstName:firstName, lastName:lastName, school:school, gradYear: gradYear, resume: resume}) 
  //   .then(() => {
  //       alert("successful insert")
  //     })
  // };


  const submitApplicantInfo = () => {
    Axios.post('http://localhost:3001/api/insertLocation', {
      address: address,
      city: city,
      state: state
    }, (locationResponse) => {
      const locationId = locationResponse.data.insertId;
  
      Axios.post('http://localhost:3001/api/insertCompany', {
        company: company,
        role: role,
        description: description,
        startDate: startDate,
        endDate: endDate
      }, (experienceResponse) => {
        const experienceId = experienceResponse.data.insertId;
  
        Axios.post('http://localhost:3001/api/insertApplicant', {
          firstName: firstName,
          lastName: lastName,
          school: school,
          gradYear: gradYear,
          resume: resume,
          experienceId: experienceId,
          locationId: locationId
        }, (applicantResponse) => {
          // Handle the successful insertion
          alert("Successful insert");
        });
      });
    });
  };


  return (
    <div className="App">
      <h1> Final Project </h1>
      <h3> Address Info: </h3>
      <div className = 'form'>
        <label> Applicant Address: </label>
        <input type='text' name='Address' onChange={(e) => {
          setAddress(e.target.value)
        }} />
        <br/ >
        <label> Applicant City: </label>
        <input type='text' name='City' onChange={(e) => {
          setCity(e.target.value)
        }} />
        <br/ >
        <label> Applicant State: </label>
        <input type='text' name='State' onChange={(e) => {
          setState(e.target.value)
        }} />
        <br/ >
        {/* <button onClick={submitAddressInfo}>Submit Address Info</button> */}
      </div>
      <br />
      <h3> Company Info: </h3>
      <div className='form'>
        <label> Company: </label>
          <input type='text' name='Company' onChange={(e) => {
            setCompany(e.target.value)
          }} />
          <br />
        <label> Role: </label>
          <input type='text' name='Role' onChange={(e) => {
            setRole(e.target.value)
          }} />
          <br />
        <label> Description: </label>
          <input type='text' name='Description' onChange={(e) => {
            setDescription(e.target.value)
          }} />
          <br />
        <label> Start Date: </label>
          <input type='date' name='Start Date' onChange={(e) => {
            setStartDate(e.target.value)
          }} />
          <br />
        <label> End Date: </label>
          <input type='date' name='End Date' onChange={(e) => {
            setEndDate(e.target.value)
          }} />
          <br />
          {/* <button onClick={submitCompanyInfo}>Submit Company Info</button> */}
        <br />
      <h3> Applicant Info: </h3>
      <div className = 'form'>
        <label> Applicant First Name: </label>
        <input type='text' name='firstName' onChange={(e) => {
          setFirstName(e.target.value)
        }} />
        <br/ >
        <label> Applicant Last Name: </label>
        <input type='text' name='lastName' onChange={(e) => {
          setLastName(e.target.value)
        }} />
        <br/ >
        <label> Applicant School: </label>
        <input type='text' name='School' onChange={(e) => {
          setSchool(e.target.value)
        }} />
        <br/ >
        <label> Applicant Grad Year: </label>
        <input type='text' name='gradYear' onChange={(e) => {
          setGradYear(e.target.value)
        }} />
        <br/ >
        <label> Applicant Resume: </label>
        <input type='file' name='Resume' onChange={(e) => {
          setResume(e.target.value)
        }} />
        <br/ >
        <button onClick={submitApplicantInfo}>Submit Applicant Info</button>
      </div>
      </div>
    </div> 
  );
}

export default App;
