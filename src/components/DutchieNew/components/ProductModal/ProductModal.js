// src/components/DutchieNew/components/ProductModal/ProductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProductModal.css'; // Import CSS

const ProductModal = ({ show, onHide, product, onEditProduct }) => {
  
  const handleEditProductClick = (e) => {
    e.preventDefault();
    onHide(); // Close the modal first
    onEditProduct(); // Then navigate to edit product
  };
  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Receive package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row gx-2">
          <div className="col-6">
            <label htmlFor="input-input_Listed product" className="input-label">Listed product</label>
            <div className="input-field">
              <input
                type="text"
                className="form-control"
                id="input-input_Listed product"
                value={product ? product.product : ''}
                readOnly
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="input-input_Catalog product" className="input-label">Catalog product <span className="required-asterisk">*</span> <a href="#" onClick={handleEditProductClick} style={{color: 'blue', textDecoration: 'none'}}>Edit Product</a></label>
            <div className="input-field">
              <select className="form-control" id="input-input_Catalog product">
                <option>Select product</option>
                {/* Add options as needed */}
              </select>
            </div>
          </div>
        </div>
        <div className="row gx-1"> {/* Reduced gutter to gx-1 to minimize spacing */}
          <div className="col-4">
            <label htmlFor="input-input_Tags" className="input-label">Tags</label>
            <div className="input-field">
              <select className="form-control" id="input-input_Tags">
                <option>Select tags</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <label htmlFor="input-input_Type" className="input-label">Type</label>
            <div className="input-field">
              <input
                type="text"
                className="form-control"
                id="input-input_Type"
                value="Weight"
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <label htmlFor="input-input_Quantity" className="input-label">Quantity <span className="required-asterisk">*</span></label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Quantity" defaultValue="566" />
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Vendor" className="input-label">Vendor <span className="required-asterisk">*</span></label>
            <div className="input-field">
              <select className="form-control" id="input-input_Vendor">
                <option>Select a vendor</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Room" className="input-label">Room <span className="required-asterisk">*</span></label>
            <div className="input-field">
              <select className="form-control" id="input-input_Room">
                <option>Tagging Needed</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Building" className="input-label">Building</label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_Building" />
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Grams/concentration" className="input-label">Grams/concentration</label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Grams/concentration" />
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Subroom" className="input-label">Subroom</label>
            <div className="input-field">
              <select className="form-control" id="input-input_Subroom">
                <option>Select subroom</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Flower equivalent" className="input-label">Flower equivalent</label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_Flower equivalent" />
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Expiration date" className="input-label">Expiration date</label>
            <div className="input-field">
              <input type="date" className="form-control" id="input-input_Expiration date" />
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Packaging date" className="input-label">Packaging date</label>
            <div className="input-field">
              <input type="date" className="form-control" id="input-input_Packaging date" />
            </div>
          </div>
          <div className="col">
            {/* Empty column for spacing */}
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Package ID" className="input-label">Package ID <span className="required-asterisk">*</span></label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_Package ID" />
            </div>
          </div>
          <div className="col">
            {/* Empty columns for spacing */}
          </div>
          <div className="col">
            {/* Empty columns for spacing */}
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_External package ID" className="input-label">External package ID</label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_External package ID" defaultValue="1A4070100000C81000012792" />
              <i className="bi bi-info-circle" title="Tooltip text from OCR"></i>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Lot name/batch ID" className="input-label">Lot name/batch ID</label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_Lot name/batch ID" />
              <i className="bi bi-info-circle" title="A unique numerical identifier associated with a specific batch of cannabis. This is a way to distinguish separate batches of the same product. It is also used by regulatory bodies to monitor quality control and testing - especially, but not limited to, food-based cannabis products."></i>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Package NDC" className="input-label">Package NDC</label>
            <div className="input-field">
              <input type="text" className="form-control" id="input-input_Package NDC" />
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Strain" className="input-label">Strain</label>
            <div className="input-field">
              <select className="form-control" id="input-input_Strain">
                <option>Select a strain</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Tax per unit" className="input-label">Tax per unit</label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Tax per unit" />
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Cost per unit" className="input-label">Cost per unit <span className="required-asterisk">*</span></label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Cost per unit" />
            </div>
          </div>
        </div>
        <div className="row gx-2">
          <div className="col">
            <label htmlFor="input-input_Price per unit" className="input-label">Price per unit</label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Price per unit" />
            </div>
          </div>
          <div className="col">
            <label htmlFor="input-input_Total package cost" className="input-label">Total package cost</label>
            <div className="input-field">
              <input type="number" className="form-control" id="input-input_Total package cost" />
            </div>
          </div>
          <div className="col">
            {/* Empty column for spacing */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} className="navy-button">Cancel</Button>
        <Button variant="primary" onClick={onHide} className="navy-button">Receive</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;