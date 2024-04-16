import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo4.png';
import './home.css';
const HomePage = () => {
    const handleAboutClick = (e) => {
        e.preventDefault();
        const aboutBottom = document.getElementById('about-bottom');
        aboutBottom.scrollIntoView({ behavior: 'smooth' });
      };
    return (
      <div >
        <nav>
      <div className="logo">
          <img src={logo} alt="Company Logo" />
          </div>
        <ul>
        
          <li><a href="/">HOME</a></li>
          <li><a href="/workerpage">SEARCH</a></li>
          <li><a href="/service">SERVICES</a></li>
          <li><a href="/feedback">FEEDBACK</a></li>
          <li><a href="#about" onClick={handleAboutClick}>ABOUT</a></li>
          
        <li className="user-login-profile">
          <img src="./images/profile.png" alt="User Profile" />
          <Link to='/login'>USER</Link>
          <span></span>
        </li>
        </ul>
      </nav>
      </div>
        );
};

export default HomePage;