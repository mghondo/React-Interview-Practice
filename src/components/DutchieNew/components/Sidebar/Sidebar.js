import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent navigation
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section">Products</div>
      <a href="#" onClick={handleLinkClick} className="sidebar-item active">
        Inventory
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Manifests
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Orders
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Journal
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Vendors
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Brands
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Strains
      </a>
      <hr className="sidebar-divider" />
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Configure
      </a>
      <a href="#" onClick={handleLinkClick} className="sidebar-item">
        Help center
      </a>
    </div>
  );
};

export default Sidebar;