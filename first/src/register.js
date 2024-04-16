import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './register.css';

const RegistrationForm = () => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registerStatus, setRegisterStatus] = useState("");
 


  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      userName: userName,
      password: password,
    }).then((response) => {
      
      if (response.data.message) {
        setError(response.data.message);
      } else {
        setRegisterStatus('ACCOUNT CREATED SUCCESSFULLY');
        setuserName('');
        setEmail('');
        setPassword('');
        setError('');
        
      }
    })
    .catch((error) => {
      console.error(error);
      setError('Error occurred during registration');
    })
    

    // Perform validation
    if (!userName || !email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    // Mobile number validation using regular expression
    

    // Mobile number validation
    

    // Perform registration logic here
    console.log('userName:', userName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields and error state after successful registration
    setuserName('');
    setEmail('');
    setPassword('');
    setError('');
    //navigate('/login'); // Redirect to login page after successful registration
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <h2 className="register-h2">Create an Account</h2>
      <form  className="register-form">
        <table>
          <tbody>
            <tr>
              <td>
                <label>User Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                />
              </td>
            </tr>
           
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {error && <div className="error">{error}</div>}
        <div className="btn-container">
        <button className="bton-goback" onClick={goBack}>Back</button>
        <button type="submit" onClick={register} className="btn-vreate">Create</button>
        </div>
        <h1 style={{color: 'black', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
      </form>
      <div className="registration-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
