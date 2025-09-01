import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './ProductSpecific.css';

const ProductSpecific = ({ onCancel, onSave, onLogoClick }) => {
  return (
    <div className="product-specific-container">
      <Navbar onLogoClick={onLogoClick} />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <div className="edit-product-header">
            <h2>Edit product</h2>
            <p>After editing this product below, click "Save" to return to receiving your inventory.</p>
            <div className="action-buttons">
              <button className="cancel-btn" onClick={onCancel}>Cancel</button>
              <button className="save-btn" onClick={onSave}>Save</button>
            </div>
          </div>
          
          <div className="product-title">
            <h3>JBAD | Sour Peach | Gummies | 4pk | 112.59mg</h3>
            <div className="tab-buttons">
              <button className="tab-btn active">Details</button>
              <button className="tab-btn">Location details</button>
              <button className="tab-btn">Online details</button>
              <button className="tab-btn">Online settings</button>
            </div>
            <div className="right-buttons">
              <button className="transactions-btn">Transactions</button>
              <button className="actions-btn">Actions ▼</button>
            </div>
          </div>

          <div className="form-section">
            <h4>Basic information</h4>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="input-input_Name:">Name: <span className="required">*</span></label>
                <input type="text" id="input-input_Name:" placeholder="Enter product name" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_SKU:">SKU: <span className="required">*</span></label>
                <div className="input-with-button">
                  <input type="text" id="input-input_SKU:" placeholder="Enter SKU" />
                  <button className="generate-btn">Generate</button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_NDC:">NDC:</label>
                <input type="text" id="input-input_NDC:" placeholder="Enter NDC" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Master category:">Master category:</label>
                <input type="text" id="input-input_Master category:" placeholder="Enter master category" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_catalog-tags">Category: <span className="required">*</span></label>
                <select id="input-input_catalog-tags">
                  <option>Edibles</option>
                </select>
              </div>

              <div className="form-group">
                <label>Regulatory category:</label>
                <select>
                  <option>Oral</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_catalog-tags">Tags:</label>
                <select id="input-input_catalog-tags">
                  <option>Select tags</option>
                </select>
              </div>

              <div className="form-group">
                <label>Type: <span className="required">*</span> <span className="info-icon">ℹ</span></label>
                <select>
                  <option>Quantity</option>
                </select>
              </div>

              <div className="form-group">
                <label>Default unit: <span className="required">*</span></label>
                <select>
                  <option>Quantity</option>
                </select>
              </div>

              <div className="form-group">
                <label>Cannabis product: <span className="required">*</span></label>
                <select>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Grams / concentration:">Grams / concentration: <span className="required">*</span> <span className="info-icon">ℹ</span></label>
                <input type="number" id="input-input_Grams / concentration:" placeholder="Enter grams/concentration" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Net weight:">Net weight:</label>
                <div className="input-with-unit">
                  <input type="number" id="input-input_Net weight:" />
                  <select className="unit-selector">
                    <option>Unit</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Gross weight:">Gross weight:</label>
                <input type="number" id="input-input_Gross weight:" placeholder="Enter gross weight" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_THC content:">THC content: <span className="required">*</span> <span className="info-icon">ℹ</span></label>
                <div className="input-with-unit">
                  <input type="number" id="input-input_THC content:" placeholder="Enter THC content" />
                  <select className="unit-selector">
                    <option>mg</option>
                    <option>%</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_CBD content:">CBD content: <span className="required">*</span> <span className="info-icon">ℹ</span></label>
                <div className="input-with-unit">
                  <input type="number" id="input-input_CBD content:" placeholder="Enter CBD content" />
                  <select className="unit-selector">
                    <option>mg</option>
                    <option>%</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Base price:">Base price:</label>
                <input type="number" id="input-input_Base price:" placeholder="Enter base price" step="0.01" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Med taxed price:">Med taxed price:</label>
                <input type="number" id="input-input_Med taxed price:" placeholder="Enter med taxed price" step="0.01" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Rec taxed price:">Rec taxed price:</label>
                <input type="number" id="input-input_Rec taxed price:" placeholder="Enter rec taxed price" step="0.01" />
              </div>

              <div className="tax-breakdown">
                <p>Taxed price is determined by adding applicable taxes to the item's base price.</p>
                <p>Editing these fields will also adjust the base price.</p>
                <button className="tax-breakdown-btn">▶ Tax breakdown</button>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Cost:">Cost:</label>
                <input type="number" id="input-input_Cost:" placeholder="Enter cost" step="0.01" />
              </div>

              <div className="form-group">
                <label>Allow automatic discounts: <span className="info-icon">ℹ</span></label>
                <select>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_catalog-tax-categories">Tax categories: <span className="info-icon">ℹ</span></label>
                <select id="input-input_catalog-tax-categories">
                  <option>Select tax categories</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Serving size:">Serving size:</label>
                <input type="number" id="input-input_Serving size:" placeholder="Enter serving size" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Servings per unit:">Servings per unit:</label>
                <input type="number" id="input-input_Servings per unit:" placeholder="Enter servings per unit" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Strain:">Strain: <span className="required">*</span></label>
                <select id="input-input_Strain:">
                  <option>No Strain</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Vendor:">Vendor: <span className="required">*</span></label>
                <select id="input-input_Vendor:">
                  <option>Grow Ohio</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Brand:">Brand: <span className="required">*</span></label>
                <select id="input-input_Brand:">
                  <option>JBAD</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Flavor:">Flavor: <span className="info-icon">ℹ</span></label>
                <input type="text" id="input-input_Flavor:" placeholder="Enter flavor" />
              </div>

              <div className="form-group">
                <label>Dosage:</label>
                <select>
                  <option>Select dosage</option>
                </select>
              </div>

              <div className="form-group">
                <label>Size: <span className="info-icon">ℹ</span></label>
                <select>
                  <option>Select size</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Alternate name:</label>
                <textarea rows="3" placeholder="Enter alternate name"></textarea>
              </div>

              <div className="form-group">
                <label>Available on point of sale:</label>
                <select>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Taxable:</label>
                <select>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Low inventory threshold:">Low inventory threshold:</label>
                <div className="input-with-unit">
                  <input type="number" id="input-input_Low inventory threshold:" placeholder="Enter threshold" />
                  <span className="unit-label">qty</span>
                </div>
              </div>

              <div className="form-group">
                <label>Sync to METRC item: <span className="info-icon">ℹ</span></label>
                <select>
                  <option>No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Available for:">Available for: <span className="required">*</span></label>
                <select id="input-input_Available for:">
                  <option>All enabled customer types selected</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Max quantity per transaction:">Max quantity per transaction: <span className="info-icon">ℹ</span></label>
                <div className="input-with-unit">
                  <input type="number" id="input-input_Max quantity per transaction:" placeholder="Enter max quantity" />
                  <span className="unit-label">qty</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_External ID:">External ID: <span className="info-icon">ℹ</span></label>
                <input type="text" id="input-input_External ID:" placeholder="Enter external ID" />
              </div>

              <div className="form-group full-width">
                <label>Ingredients:</label>
                <textarea rows="3" placeholder="Enter ingredients"></textarea>
              </div>

              <div className="form-group full-width">
                <label>Instructions:</label>
                <textarea rows="3" placeholder="Enter instructions"></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Days supply:">Days supply: <span className="info-icon">ℹ</span></label>
                <input type="number" id="input-input_Days supply:" placeholder="Enter days supply" />
              </div>

              <div className="form-group">
                <label htmlFor="input-input_Expiration days:">Expiration days: <span className="info-icon">ℹ</span></label>
                <input type="number" id="input-input_Expiration days:" placeholder="Enter expiration days" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecific;