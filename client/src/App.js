import './App.css';
import React, {useState, useEffect } from "react"; 
import Axios from 'axios'
import CreateApplicant from './createApplicant';
import CreateRecruiter from './createRecruiter';


function App() {


  const [usernameRecruiter ,setUsernameRecruiter] = useState('')
  const [passwordRecruiter ,setPasswordRecruiter] = useState('')

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
        locationId: locationId
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
      <h1> Final Project </h1>
      <CreateApplicant />
      <br />
      <CreateRecruiter />
      <br />
    </div> 
  );
}

export default App;
