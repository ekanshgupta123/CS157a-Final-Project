import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreateApplicant = (props) => {

    const navigate = useNavigate();
    const [usernameApplicant ,setUsernameApplicant] = useState('')
    const [passwordApplicant ,setPasswordApplicant] = useState('')

    const submitCreateApplicant = async () => {
        try {
          const locationResponse = await Axios.post('http://localhost:3001/api/createApplicant', {
            username: usernameApplicant,
            password: passwordApplicant,
          });
    
          // Handle the successful insertion
          alert("Successful insert");
          navigate('/applicantInfo');
        } catch (error) {
          // Handle any errors
          console.error(error);
        }
        // window.location.href = 'https://www.google.com';
      };

      return (
          <div className="App">
            <h2> Applicant Create Account: </h2>
            <div className = 'form'>
            <label> Applicant Username: </label>
                <input type='text' name='Username' onChange={(e) => {
                setUsernameApplicant(e.target.value)
                }} />
                <br/ >
                <label> Applicant Password: </label>
                <input type='text' name='Password' onChange={(e) => {
                setPasswordApplicant(e.target.value)
                }} />
                <br />
                <button onClick={submitCreateApplicant}> Create Applicant Account </button>
            </div>
          </div>
      )
  
}

export default CreateApplicant;