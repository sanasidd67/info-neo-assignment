import React from "react";

const footer = () => {
  return (
    <div>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Newsletter</h4>
                  <p className="mb-3">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit
                    consectetur adipiscing elit.
                  </p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="#">
                  Home
                </a>
                <a href="#">
                  Services
                </a>
                <a href="#">
                  About Us
                </a>
                <a href="#">
                  Latest Projects
                </a>
                <a href="#">
                  testimonial
                </a>
                <a href="#">
                  Our Team
                </a>
                <a href="#">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="">
                  123 Street, New
                  York, USA
                </a>
                <a href="">
                  info@example.com
                </a>
                <a href="">
                  info@example.com
                </a>
                <a href="">
                  +012 345 67890
                </a>
                <a href="" className="mb-3">
                  +012 345 67890
                </a>

              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase  mb-2">Investment</p>
                  <p>
                    Revisiting Your Investment & Distribution Goals
                  </p>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase mb-2">Business</p>
                  <p>
                    Dimensional Fund Advisors Interview with Director
                  </p>
                </div>
                <div className="footer-btn text-start">
                  <a href="#" className="btn btn-light rounded-pill px-4">
                    View All Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <p>Best view in Browser Firefox 60+ | Google Chrome 70+ | IE Edge 12+</p>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
               <p>Managed and Maintained by Tata Consultancy Services Limited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
