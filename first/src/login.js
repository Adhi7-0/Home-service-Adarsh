import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
    email: email,
    password: password,
  }).then((response) => {
    if (response.data.message) {
      setLoginStatus(response.data.message);
    } else {
      setLoginStatus("Login successful!");
      setTimeout(() => {
      window.location.href = '/home';
    }, 2000);
      // Redirect the user to the desired page after successful login.
      
    }
  }).catch((error) => {
    setError('Invalid email or password.');
    setLoginStatus('');
  })
  
    // Perform validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password)
    //navigate('/home');
    setTimeout(() => {
      window.location.href = '/home';
    }, 2000);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/home');
  };
  return (
    <div className="login-container">
      <h2 className="login-h2">Login</h2>
      <form className="login-form" >
        <table className="login-table">
          <tbody>
            <tr>
              <td>Email:</td>
              <td>
                <input
                className="input-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                className="input-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {error && <div className="error">{error}</div>}
        <div className="button-container">
          <button className="button-goback" onClick={goBack} >Back</button>
          <button type="submit" onClick={login} className="button-login">Login</button>
        </div>
        <h1 style={{color: 'black', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
      </form>
      <div className="registration-link">
        Don't have an account? <Link to="/register">Create</Link>
      </div>
    </div>
  );
};

export default Login;
