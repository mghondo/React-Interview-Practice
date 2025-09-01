// components/ProductList/ProductList.js (or wherever you place it)
// components/ProductList/ProductList.js
import React, { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal'; // Adjust path based on structure

const ProductList = ({ onEditProduct, showModal, selectedProduct, onCloseModal }) => {
  const [internalShowModal, setInternalShowModal] = useState(false);
  const [internalSelectedProduct, setInternalSelectedProduct] = useState(null);

  const handleRowClick = (product) => {
    setInternalSelectedProduct(product);
    setInternalShowModal(true);
  };

  const handleClose = () => {
    setInternalShowModal(false);
    if (onCloseModal) onCloseModal();
  };

  const handleEditProductClick = () => {
    onEditProduct(internalSelectedProduct || selectedProduct);
    setInternalShowModal(false);
  };

  // Use external state if available, otherwise use internal state
  const modalShow = showModal || internalShowModal;
  const modalProduct = selectedProduct || internalSelectedProduct;

  const products = [
    {
      status: 'red',
      gtin: '-',
      product: 'M0000160903: Plant Mat-Hybrid-31-Candy Rain-5.66',
      type: 'Weight',
      quantity: '113.2',
      units: 'Gram',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'green',
      gtin: '-',
      product: 'M0000184791: Plant Mat-Hybrid-25-Chemodozer-5.66',
      type: 'Weight',
      quantity: '113.2',
      units: 'Gram',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000123806: Plant Mat-Hybrid-23-Frozen Gelato-5.66',
      type: 'Weight',
      quantity: '226.4',
      units: 'Gram',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000129121: Plant Mat-Indica-23-Lemon Cherry Sherbet-5.66',
      type: 'Weight',
      quantity: '226.4',
      units: 'Gram',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'green',
      gtin: '-',
      product: 'M0000194503: Plant Mat-Hybrid-31-Mystery Marker-5.66',
      type: 'Weight',
      quantity: '113.2',
      units: 'Gram',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'Ember Blueberry I DVP 1g Indica',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: 'Fire Rock Ltd.',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'green',
      gtin: '-',
      product: 'M0000029104: Oil Vap-7-100-Purple Urkle',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000029210: Oil Vap-7-100-Peach Ozz',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000029205: Oil Vap-7-100-Strawberry Diesel Cookies',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000029106: Oil Vap-7-100-SLH',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000103852: Oil Vap-7-100-Banana Mac TTS 510',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000121675: Oil Vap-7-100-Robot Face TTS 510',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    },
    {
      status: 'red',
      gtin: '-',
      product: 'M0000127725: Oil Vap-7-100-Monkey Soap TTS 510',
      type: 'Quantity',
      quantity: '25',
      units: 'Quantity',
      vendor: '-',
      producer: '-',
      room: '-',
      subroom: '-',
      pac: '1A4070300'
    }
  ];

  return (
    <div className="product-list mt-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>STATUS</th>
            <th>GTIN</th>
            <th>PRODUCT</th>
            <th>TYPE</th>
            <th>QUANT.</th>
            <th>UNITS</th>
            <th>VENDOR</th>
            <th>PRODUCER</th>
            <th>ROOM</th>
            <th>SUBROOM</th>
            <th>PAC</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} onClick={() => handleRowClick(product)} style={{ cursor: 'pointer' }}>
              <td><i className={`bi bi-circle-fill ${product.status === 'green' ? 'text-success' : 'text-danger'}`}></i></td>
              <td>{product.gtin}</td>
              <td>{product.product}</td>
              <td>{product.type}</td>
              <td>{product.quantity}</td>
              <td>{product.units}</td>
              <td>{product.vendor}</td>
              <td>{product.producer}</td>
              <td>{product.room}</td>
              <td>{product.subroom}</td>
              <td>{product.pac}</td>
              <td><i className="bi bi-gear"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductModal show={modalShow} onHide={handleClose} product={modalProduct} onEditProduct={handleEditProductClick} />
    </div>
  );
};

export default ProductList;