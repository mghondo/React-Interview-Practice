import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ onLogoClick }) => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); onLogoClick && onLogoClick(); }}>dutchie</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex mx-auto my-2 my-lg-0" style={{ flexGrow: 1, maxWidth: '600px' }}>
            <input className="form-control custom-search-input" type="search" placeholder="Search..." aria-label="Search" />
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle custom-dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Verdant Creations LLC
              </a>
              <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle custom-dropdown-toggle" href="#" id="locationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Verdant Creations LLC - Columbus
              </a>
              <ul className="dropdown-menu" aria-labelledby="locationDropdown">
                <li><a className="dropdown-item" href="#">Option A</a></li>
                <li><a className="dropdown-item" href="#">Option B</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-person-circle"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-question-circle"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;