import React, {useState} from "react"; 
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'



export const RecruiterLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await Axios.post('http://localhost:3001/api/recruiterLogin', {
        username: username,
        password: password,
      });
      
      try {
        if (response.data.success) {
          const recruiterID = response.data.recruiterID;
          if (recruiterID) {
            navigate('/recruiterHome', { state: { recruiterID: recruiterID } });
          } else {
            console.error('Invalid recruiterID received.');
            // Handle the case when recruiterID is null or undefined
          }
        } else {
          // Login failed, display error message or perform other actions
          console.log(response.data.message);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
        // Handle the error as needed
      }
    }
  
    return(
        <div className="App"> 
        <h1> Recruiter Login: </h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor = 'username'> Recruiter Username: </label>
            <input value={username} onChange = {(e) => setUsername(e.target.value)} type='text' placeholder="username"/>
            <br />
            <label htmlFor = 'password'> Recruiter Password: </label>
            <input value={password} onChange = {(e) => setPassword(e.target.value)} type='text' placeholder="password"/>
            <br />
            <button type = 'submit'> Login </button>
            </form>
        </div>
    )
}      

export default RecruiterLogin; 