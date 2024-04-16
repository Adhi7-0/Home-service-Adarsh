import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Axios from 'axios';

import Navbar from './nav';
import Aboutus from './about.js';

import './service.css';

const ServicePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [showNotification, setShowNotification] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const bookingData = {
        name: name,
        email: email,
        serviceType: serviceType,
        serviceDate: serviceDate,
        specialRequest: specialRequest,
      };
  
      Axios.post("http://localhost:3001/service", bookingData)
        .then((response) => {
          setShowNotification(true);
  
          // Reset the form
          setName('');
          setEmail('');
          setServiceType('');
          setServiceDate('');
          setSpecialRequest('');
  
          // Hide the success notification after 3 seconds
          setTimeout(() => {
            setShowNotification(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error booking service:", error);
          // Handle error if needed
        });
      // Perform form submission logic here
      // You can access the form values in the state variables (name, email, serviceType, serviceDate, specialRequest)
      // You can send the form data to an API, store it in a database, etc.
      setShowNotification(true);

      // Reset the form
      setName('');
      setEmail('');
      setServiceType('');
      setServiceDate('');
      setSpecialRequest('');
  
      // Hide the success notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };
  
    const inputStyle = {
      height: '55px',
    };
  
    const textareaStyle = {
      height: '100px',
    };
  
    const buttonStyle = {
      borderRadius: '0',
    };

    

  return (
    <div>
        <Navbar></Navbar>
      {/* Slide Bar */}
      <section className="featured-workers-section">
        <h2>Explore Our Services</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={25}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          swipeScrollTolerance={5}
          transitionTime={5000}
          selectedItem={0}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow-prev">
                &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow-next">
                &gt;
              </button>
            )
          }
        >
          <div className="worker-card1">
            <img src="./images/worker1.png" alt="Worker" />
            <h3>Plumbing</h3>
            <p> <i className="fa fa-check text-success me-2"></i>Quality Service</p>
            <p><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
            <p><i className="fa fa-check text-success me-2"></i>24/7 Support</p>
            
          </div>
          <div className="worker-card1">
            <img src="./images/worker2.png" alt="Worker" />
            <h3>Electrical</h3>
            <p><i className="fa fa-check text-success me-2"></i>Quality Service</p>
            <p><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
            <p><i className="fa fa-check text-success me-2"></i>24/7 Support</p>
           
          </div>
          <div className="worker-card1">
            <img src="./images/worker3.png" alt="Worker" />
            <h3>Painting</h3>
            
            <p><i className="fa fa-check text-success me-2"></i>Quality Service</p>
            <p><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
            <p><i className="fa fa-check text-success me-2"></i>24/7 Support</p>
            
          </div>
          <div className="worker-card1">
            <img src="./images/worker4.png" alt="Worker" />
            <h3>Carpentering</h3>
            
            <p><i className="fa fa-check text-success me-2"></i>Quality Service</p>
            <p><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
            <p><i className="fa fa-check text-success me-2"></i>24/7 Support</p>
           
          </div>
          {/* Add more worker cards */}
        </Carousel>
      </section>

      {/* Book a Service */}
     <section>
     <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="bg-light text-center p-5">
          <h2 className="booking">Book For a Service</h2>
          {showNotification && (
                <div className="alert alert-success" role="alert" style={{ backgroundColor: '#d4edda', borderColor: '#c3e6cb', color: '#155724' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm4.354 5.646a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7 10.293l4.646-4.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Your service has been booked
                </div>
              )}
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Your Name"
                  style={inputStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Your Email"
                  style={inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 col-sm-6">
                <select
                  className="form-select border-0"
                  style={inputStyle}
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="1">Plumbing</option>
                  <option value="2">Electrical</option>
                  <option value="3">Painting</option>
                  <option value="4">Carpentering</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <div
                  className="date"
                  id="date1"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    className="form-control border-0 datetimepicker-input"
                    placeholder="Service Date"
                    data-target="#date1"
                    data-toggle="datetimepicker"
                    style={inputStyle}
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0"
                  placeholder="Your Address"
                  style={textareaStyle}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-dark w-100 py-3"
                  type="submit"
                  style={buttonStyle}
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
     </section>
    

<Aboutus></Aboutus>
<footer>
        <p>&copy; 2023 Household Worker Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicePage;
