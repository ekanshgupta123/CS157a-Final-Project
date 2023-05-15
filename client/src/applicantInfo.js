import { useState } from "react";
import Axios from 'axios'


const ApplicantInfo = (props) => {

    const [username, setUsername] = useState('')
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

    const submitApplicantInfo = async () => {
        try {
          const locationResponse = await Axios.post('http://localhost:3001/api/insertLocation', {
            address: address,
            city: city,
            state: state
          });
          const locationId = locationResponse.data.insertId
          console.log(locationId)
    
          const experienceResponse = await Axios.post('http://localhost:3001/api/insertCompany', {
            company: company,
            role: role,
            description: description,
            startDate: startDate,
            endDate: endDate
          });
          const experienceId = experienceResponse.data.insertId;
          console.log(experienceId)
      
          const applicantResponse = await Axios.post('http://localhost:3001/api/insertApplicant', {
            firstName: firstName,
            lastName: lastName,
            school: school,
            gradYear: gradYear,
            resume: resume,
            experienceId: experienceId,
            locationId: locationId,
            username: username
          });
          
          // Handle the successful insertion
          alert("Successful insert");
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
        // window.location.href = 'https://www.google.com';
      };

      return (
        <div className="App"> 
        <div className = 'form'>
            <h3> Applicant Info </h3>
            <br />
            <label> Applicant Username: </label>
            <input type='text' name='Username' onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <br />
            <br />
            <h3> Address Info: </h3>
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
            <br />
            <h3> Company Info: </h3>
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
        </div>
        <button onClick={submitApplicantInfo}>Submit Applicant Info</button>
        <br />
    </div>

    )
}
export default ApplicantInfo;
