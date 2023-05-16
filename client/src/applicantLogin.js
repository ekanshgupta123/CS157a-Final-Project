import React, {useState} from "react"; 
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'



export const ApplicantLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await Axios.post('http://localhost:3001/api/applicantLogin', {
          username: username,
          password: password,
        });
  
        if (response.data.success) {
          // Login successful, redirect to /home or perform other actions
          navigate('/applicantHome', {state: {username: username}})
        } else {
          // Login failed, display error message or perform other actions
          console.log(response.data.message);
        }
      } catch (error) {
        // Handle any errors that occurred during the API request
        console.error(error);
      }
    };
  
    return(
        <div className="App"> 
        <h1> Applicant Login: </h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor = 'username'> Applicant Username: </label>
            <input value={username} onChange = {(e) => setUsername(e.target.value)} type='text' placeholder="username"/>
            <br />
            <label htmlFor = 'password'> Applicant Password: </label>
            <input value={password} onChange = {(e) => setPassword(e.target.value)} type='text' placeholder="password"/>
            <br />
            <button type = 'submit'> Login </button>
            </form>
        </div>
    )
}      

export default ApplicantLogin; 