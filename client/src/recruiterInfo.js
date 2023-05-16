import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const RecruiterInfo = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')

    const [address ,setAddress] = useState('')
    const [city ,setCity] = useState('')
    const [state ,setState] = useState('')
    
    const [firstName ,setFirstName] = useState('')
    const [lastName ,setLastName] = useState('')
    const [role ,setRole] = useState('')


    const submitRecruiterInfo = async () => {
        try {
          const locationResponse = await Axios.post('http://localhost:3001/api/insertLocation', {
            address: address,
            city: city,
            state: state
          });
          const locationId = locationResponse.data.insertId
          console.log(locationId)
      
          const recruiterResponse = await Axios.post('http://localhost:3001/api/insertRecruiter', {
            firstName: firstName,
            lastName: lastName,
            role: role,
            locationId: locationId,
            username: username
          });

          const recruiterID = recruiterResponse.data.insertId;
          console.log("skdfkf", recruiterID)
          
          // Handle the successful insertion
          navigate('/recruiterHome', {state: {recruiterID: recruiterID}})
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
            <br />
            <label> Recruiter Username: </label>
            <input type='text' name='Address' onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <br />
            <br />
            <h3> Address Info: </h3>
            <label> Recruiter Address: </label>
            <input type='text' name='Address' onChange={(e) => {
                setAddress(e.target.value)
            }} />
            <br/ >
            <label> Recruiter City: </label>
            <input type='text' name='City' onChange={(e) => {
                setCity(e.target.value)
            }} />
            <br/ >
            <label> Recruiter State: </label>
            <input type='text' name='State' onChange={(e) => {
                setState(e.target.value)
            }} />
            <br/ >
            <h3> Recruiter Info: </h3>
            <label> Recruiter First Name: </label>
            <input type='text' name='firstName' onChange={(e) => {
                setFirstName(e.target.value)
            }} />
            <br/ >
            <label> Recruiter Last Name: </label>
            <input type='text' name='lastName' onChange={(e) => {
                setLastName(e.target.value)
            }} />
            <br/ >
            <label> Recruiter Role: </label>
            <input type='text' name='role' onChange={(e) => {
                setRole(e.target.value)
            }} />
            <br />
                <button onClick={submitRecruiterInfo}>Submit Recruiter Info</button>
        </div>
      </div>
    )
}
export default RecruiterInfo
