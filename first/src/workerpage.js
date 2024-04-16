import React, { useState, useEffect } from 'react';
import './workerspage.css';
import Navbar from './nav';
import Aboutus from './about.js';
import defaultWorkerPhoto from './images/worker.png';
const WorkersPage = () => {
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  // Simulating API call to fetch workers data
  useEffect(() => {
    const fetchWorkers = async () => {
      // Simulated delay to mimic API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated workers data
      const data = [
        { id: 1, name: 'Anurag V', occupation: 'Plumber', rating: 4.5, location: 'Coimbatore', photo: '', description: 'Experienced plumber with 10+ years of experience.', phoneNumber: '+7306180880' },
        { id: 2, name: 'Ashok Karthi', occupation: 'Electrician', rating: 4.2, location: 'Palakkad', photo: '', description: 'Certified electrician specializing in residential wiring.', phoneNumber: '+1234567890' },
        { id: 3, name: 'Mathew Thomas', occupation: 'Carpenter', rating: 4.8, location: 'Chennai', photo: '', description: 'Skilled carpenter with expertise in custom furniture making.', phoneNumber: '+1234567890' },
        { id: 4, name: 'Raghav K', occupation: 'Plumber', rating: 4.1, location: 'Palakkad', photo: '', description: 'Experienced plumber with 6+ years of experience.', phoneNumber: '+1234567890' },
        { id: 5, name: 'Sunil P', occupation: 'Electrician', rating: 4.6, location: 'coimbatore', photo: '', description: 'Certified electrician specializing in residential wiring.', phoneNumber: '+1234567890' },
        { id: 6, name: 'Ibrahim M', occupation: 'Carpenter', rating: 3.8, location: 'Chennai', photo: '', description: 'Skilled carpenter with expertise in custom furniture making.', phoneNumber: '+1234567890' },
        { id: 7, name: 'Haridas R', occupation: 'Plumber', rating: 4.2, location: 'Palakkad', photo: '', description: 'Experienced plumber with 8+ years of experience.', phoneNumber: '+1234567890' },
        { id: 8, name: 'Gokul J', occupation: 'Electrician', rating: 3.2, location: 'Chennai', photo: '', description: 'Certified electrician specializing in residential wiring.', phoneNumber: '+1234567890' },
        { id: 9, name: 'Mithun Das', occupation: 'Carpenter', rating: 4.8, location: 'Coimbatore', photo: '', description: 'Skilled carpenter with expertise in custom furniture making.', phoneNumber: '+1234567890' },
        { id: 10, name: 'Nithesh G', occupation: 'Plumber', rating: 4.0, location: 'Palakkad', photo: '', description: 'Experienced plumber with 9+ years of experience.', phoneNumber: '+1234567890' },
        { id: 11, name: 'Ezhil A', occupation: 'Electrician', rating: 4.4, location: 'Coimbatore', photo: '', description: 'Certified electrician specializing in residential wiring.', phoneNumber: '+1234567890' },
        { id: 12, name: 'Adhvik', occupation: 'Carpenter', rating: 4.7, location: 'Chennai', photo: '', description: 'Skilled carpenter with expertise in custom furniture making.', phoneNumber: '+1234567890' },
        { id: 13, name: 'Rakesh V', occupation: 'Plumber', rating: 4.0, location: 'Coimbatore', photo: '', description: 'Experienced plumber with 5+ years of experience.', phoneNumber: '+1234567890' },
        { id: 14, name: 'Joel Mathew', occupation: 'Electrician', rating: 4.8, location: 'Coimbatore', photo: '', description: 'Certified electrician specializing in residential wiring.', phoneNumber: '+1234567890' },
        { id: 15, name: 'Praveen', occupation: 'Carpenter', rating: 4.2, location: 'Palakkad', photo: '', description: 'Skilled carpenter with expertise in custom furniture making.', phoneNumber: '+1234567890' },
        // Add more worker data
      ];

      setWorkers(data);
    };

    fetchWorkers();
  }, []);

  const handleOccupationChange = e => {
    setOccupation(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    const filteredWorkers = workers.filter(worker => {
      const locationMatch = worker.location.toLowerCase().includes(location.toLowerCase());
      const occupationMatch = worker.occupation.toLowerCase() === occupation.toLowerCase();
      return locationMatch && (occupation === '' || occupationMatch);
    });
    setFilteredWorkers(filteredWorkers);
  };

  const handleContact = phoneNumber => {
     // Handle the contact logic here, e.g., initiate a phone call
  const telUri = `tel:${phoneNumber}`;
  window.open(telUri);
  };


  return (
    <div>
      <section> 
        <Navbar></Navbar>
      </section>
    <section className="worker-section">  
    <div className="workers-page">
     
      <h2>Find Workers in Your Area</h2>

      <div className="search-section1">
        <input
          type="text"
          placeholder="Search workers by location"
          value={location}
          onChange={handleLocationChange}
        />

        <select value={occupation} onChange={handleOccupationChange}>
          <option value="">All Occupations</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="carpenter">Carpenter</option>
          {/* Add more options for other occupations */}
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredWorkers.length > 0 ? (
        <ul className="workers-list">
          {filteredWorkers.map(worker => (
            <li key={worker.id}>
              <div className="worker-profile">
                <div className="worker-photo">
                <img src={worker.photo ? worker.photo :defaultWorkerPhoto} alt={worker.name} />
                </div>
                <div className="worker-details">
                  <h2>{worker.name}</h2>
                  <p>Occupation: {worker.occupation}</p>
                  <p>Rating: {worker.rating}</p>
                  <p>Location: {worker.location}</p>
                  <p>{worker.description}</p>
                  <button onClick={() => handleContact(worker.phoneNumber)}>Contact</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workers found.</p>
      )}
    </div>
    </section>
    <section>
      <Aboutus></Aboutus>
    </section>
    <footer>
        <p>&copy; 2023 Household Worker Hub. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default WorkersPage;
