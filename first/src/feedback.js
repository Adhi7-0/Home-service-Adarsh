import React, { useState } from 'react';
import Navbar from './nav';
import Aboutus from './about.js';
import './feedback.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Axios from 'axios'; // Add this import for Axios


const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    category: '',
    message: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (event) => {
    const rating = parseInt(event.target.value);
    setFeedback((prevState) => ({
      ...prevState,
      rating,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/feedback", feedback)
      .then((response) => {
        console.log("Feedback submitted successfully");
        // Optionally, you can show a success message or perform other actions after successful submission
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        // Optionally, you can show an error message or handle errors
      });

    // Reset the form
    setFeedback({
      category: '',
      message: '',
      rating: 0,
    });
  };
  return (
<div>
  <section>
    <Navbar></Navbar>
  </section>
<section>
<h2 className="feedback-title">Feedback and Rating</h2>
 
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Feedback Category:</label>
          <select
            id="category"
            name="category"
            value={feedback.category}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select a category</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Problem">Problem</option>
            <option value="General Feedback">General Feedback</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleInputChange}
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-group">
  <label htmlFor="rating" className="form-label">Rating:</label>
  <div className="rating-group">
    {[1, 2, 3, 4, 5].map((star) => (
      <label key={star} className="rating-label">
        <input
          type="radio"
          name="rating"
          value={star}
          checked={feedback.rating === star}
          onChange={handleRatingChange}
          className="rating-input"
        />
        <i className="fas fa-star rating-star"></i>
      </label>
      
    ))}
    <div>
      {/* Existing JSX remains unchanged */}
      <input type="file" onChange={handleFileChange} />
      {/* Existing JSX remains unchanged */}
    </div>
  </div>
</div>

        <button type="submit" className="submit-button">Send Feedback</button>
      </form>
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

export default FeedbackPage;
