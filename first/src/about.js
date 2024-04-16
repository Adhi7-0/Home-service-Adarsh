import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';


import './about.css';

const ServicePage = () => {
  return (
    <div id="about-bottom">
      <section className="aboutus-section">
        
        <div className="container py-5">
        <div className="ab-section">
          <h3 className="about-h3">About Us</h3>
          <p className="about-p">Find and contact skilled household workers quickly and easily through our user-friendly website.</p>
        </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Coimbatore,Tamil Nadu</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@hwh.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social me-2" href="/"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social me-2" href="/"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social me-2" href="/"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social me-2" href="/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
  <h4 className="text-light mb-4">Services</h4>
  <div className="d-flex flex-wrap">
    <a className="btn btn-link me-3 mb-2" href="/">Plumbing</a>
    <a className="btn btn-link me-3 mb-2" href="/">Electrical</a>
    <a className="btn btn-link me-3 mb-2" href="/">Painting</a>
    <a className="btn btn-link me-3 mb-2" href="/">Carpentering</a>
  </div>
</div>


            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Enquiry</h4>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2">Enquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ServicePage;
