import React from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/icons/search-icon.png"


export const header = () => {
  return (
    <div>
      <div className="container-fluid topbar px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-muted small me-4">
              Find A
                Location
              </a>
              <a href="tel:+01234567890" className="text-muted small me-4">
                +01234567890
              </a>
              <a href="mailto:example@gmail.com" className="text-muted small me-0">
                
                Example@gmail.com
               
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a href="#">
                <small className="me-3 text-dark">
                  Register
                </small>
              </a>
              <a href="#">
                <small className="me-3 text-dark">
                Login
                </small>
              </a>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-dark"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fa fa-home text-primary me-2"></i> My Dashboard
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-user-alt me-2"></i> My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2"></i> Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-bell me-2"></i> Notifications
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2"></i> Account Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-power-off me-2"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="logo" className="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Opportunities</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
               
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Analytics
               
              </a>
          </ul>
          <div className="search d-lg-block d-none">
            <form className=" position-relative">
              <input type="text" className="form-control bg-secondary border-0 rounded-5 px-4 py-2" placeholder="Search..."/>
              <a href="#" className="position-absolute top-50 end-0 translate-middle-y p-1 me-3">
               <img src={search} alt="search"/>
              </a>
            </form>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
