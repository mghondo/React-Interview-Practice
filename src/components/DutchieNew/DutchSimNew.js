import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Add this for Bootstrap icons (if not already included)
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainPageForm from './components/MainPageForm/MainPageForm';
import ProductList from './components/ProductList/ProductList'; // New import (adjust path if needed)
import ProductSpecific from './components/ProductSpecific/ProductSpecific';
import './components/Navbar/Navbar.css';

const DutchSimNew = () => {
  const [showProductSpecific, setShowProductSpecific] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowProductSpecific(true);
  };

  const handleBackToMain = () => {
    setShowProductSpecific(false);
  };

  const handleBackToModal = () => {
    setShowProductSpecific(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (showProductSpecific) {
    return <ProductSpecific onCancel={handleBackToMain} onSave={handleBackToModal} onLogoClick={handleBackToMain} />;
  }

  return (
    <div className="dutch-sim-new">
      <Navbar onLogoClick={handleBackToMain} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <MainPageForm />
          <ProductList 
            onEditProduct={handleEditProduct} 
            showModal={showModal}
            selectedProduct={selectedProduct}
            onCloseModal={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DutchSimNew;