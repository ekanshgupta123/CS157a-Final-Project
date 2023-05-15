import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateRecruiter = (props) => {
    const navigate = useNavigate();

    const [usernameRecruiter ,setUsernameRecruiter] = useState('')
    const [passwordRecruiter ,setPasswordRecruiter] = useState('')

    const submitCreateRecruiter = async () => {
        try {
          const locationResponse = await Axios.post('http://localhost:3001/api/createRecruiter', {
            username: usernameRecruiter,
            password: passwordRecruiter,
          });
    
          // Handle the successful insertion
          alert("Successful insert");
          navigate('/recruiterInfo');
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
        // window.location.href = 'https://www.google.com';
      };

      return (
        <div className="App">
        <h2> Recruiter Create Account: </h2>
        <div className = 'form'>
        <label> Recruiter Username: </label>
          <input type='text' name='Username' onChange={(e) => {
            setUsernameRecruiter(e.target.value)
        }} />
          <br/ >
          <label> Recruiter Password: </label>
          <input type='text' name='Password' onChange={(e) => {
            setPasswordRecruiter(e.target.value)
        }} />
          </div>
          <button onClick={submitCreateRecruiter}>Submit Create Recruiter Account </button>
        </div>
      )
}

export default CreateRecruiter ;