import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfilePage = ({ userEmail }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data based on userEmail
    axios.get(`http://localhost:3001/user/${userEmail}`)
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [userEmail]);

  return (
    <div>
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <img
              src={userData.profilePhoto} // Assuming your backend provides profile photo URL
              alt="Profile"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
          </div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <h3>Booking History</h3>
          {/* Display booking history status here */}
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
