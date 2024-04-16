import React from 'react';
import Navbar from './nav';
import Aboutus from './about.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';


import './home.css';
//import Navabar from '../src/components/nav';


const HomePage = () => {
  
  return (
    
    <div className="homepage">
     <Navbar></Navbar>
      <section className="head">
      <header>
        <h1 className="home-h1">Welcome to Household<br></br> Worker Hub</h1>
        <p>Find skilled professionals for all your household needs</p>
      </header>
      </section>
      <section className="search-section">
        <h2>Find Workers Near You</h2>
        <form className="home-form">
          <div className="form-group1">
           
            <input type="text" id="location" placeholder="Enter your location" />
          </div>
          <div className="form-group1">
           
            <select id="occupation">
              <option value="">Select an occupation</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="carpenter">Carpenter</option>
              <option value="driver">Driver</option>
              {/* Add more options for other occupations */}
            </select>
            
          </div>
          <div>
          <Link to='/workerpage'>
          <button type="submit">Search</button>
          </Link>
          </div>
        </form>
      </section>
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
    <div className="worker-card">
      <img src="./images/worker1.png" alt="Worker" />
      <h3>Plumbing</h3>
      <p></p>
      <Link to='/service'>
      <button >View More</button>
      </Link>
    </div>
    <div className="worker-card">
      <img src="./images/worker2.png" alt="Worker" />
      <h3>Electrical</h3>
      <p></p>
      <Link to='/service'>
      <button>View More</button>
      </Link>
    </div>
    <div className="worker-card">
      <img src="./images/worker3.png" alt="Worker" />
      <h3>Painting</h3>
      <p></p>
      <Link to='/service'>
      <button>View More</button>
      </Link>
    </div>
    <div className="worker-card">
      <img src="./images/worker4.png" alt="Worker" />
      <h3>Carpentering</h3>
      <p></p>
      <Link to='/service'>
      <button>View More</button>
      </Link>
    </div>
    {/* Add more worker cards */}
  </Carousel>
</section>


    <Aboutus></Aboutus>
      <footer>
        <p>&copy; 2023 Household Worker Hub. All rights reserved.</p>
      </footer>
      
    </div>
    
  );
};

export default HomePage;
