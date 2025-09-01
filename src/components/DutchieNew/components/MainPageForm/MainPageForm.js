import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPageForm.css';
import VendorInput from './VendorInput';
import ApplyCostOptions from './ApplyCostOptions';
import DeliveredOn from './DeliveredOn'; // New import

const MainPageForm = () => {
  const [totalCredits, setTotalCredits] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(0);

  return (
    <div className="rebrand-container">
      <div className="page-heading">
        <button
          className="back-button-circle"
          type="button"
          data-testid="receive-inventory-back-button"
          aria-label="Back"
          role="navigation"
        >
          &lt; {/* Using HTML entity for "<" symbol */}
        </button>
        <div className="heading-content">
          <h1>Receive Inventory</h1>
        </div>
      </div>
      <section className="form-section">
        <article className="content-card">
          <div className="source-section">
            <div className="source-heading">
              <h3>Source</h3>
              <span>Select the source the inventory will come from.</span>
            </div>
            <div className="form-group">
              <div className="form-control select-control" data-testid="select_source-type">
                <div className="select-input">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    aria-labelledby="select-label_ select-input_"
                    id="select-input_"
                  >
                    Pending transfer
                  </div>
                  <input
                    aria-hidden="true"
                    tabIndex={-1}
                    className="native-input"
                    value="pending-transfer"
                  />
                  {/* Dropdown icon SVG can be added here */}
                </div>
              </div>
              <div className="form-control select-control" data-testid="select_source-name">
                <div className="select-input">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    aria-labelledby="select-label_ select-input_"
                    id="select-input_"
                  >
                    <span className="notranslate"></span>
                  </div>
                  <input
                    aria-hidden="true"
                    tabIndex={-1}
                    className="native-input"
                    value="null"
                  />
                  {/* Dropdown icon SVG can be added here */}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <div className="receiving-details">
        <div className="details-title">Receiving details</div>
        <div className="action-buttons">
          <button
            type="button"
            aria-controls="actions-menu"
            aria-haspopup="true"
            id="actions-menu-button"
            label="Actions"
            data-testid="user-actions-menu-button"
            className="navy-button"
          >
            Actions
            {/* End icon SVG can be added here */}
          </button>
          <input id="upload-button-container" type="file" style={{ display: 'none' }} />
          <button
            type="button"
            label="Save"
            data-testid="receive-inventory-save-button"
            id=""
            className="navy-button"
          >
            Save
          </button>
          <button
            type="button"
            disabled
            label="Receive"
            data-testid="receive-inventory-receive-button"
            id=""
            className="navy-button"
          >
            Receive
          </button>
        </div>
      </div>
      <div className="input-fields">
        <VendorInput />
        <div className="form-control input-control">
          <label htmlFor="input-input_Delivered by" id="input-label_Delivered by" required>
            Delivered by <span className="required-asterisk">*</span>
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              id="input-input_Delivered by"
              required
              type="text"
              data-testid="receive-inventory_div_delivery-by"
              value=""
            />
          </div>
        </div>
        <div className="form-control input-control">
          <label htmlFor="input-input_Vendor license #" id="input-label_Vendor license #">
            Vendor license #
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              id="input-input_Vendor license #"
              type="text"
              data-testid="receive-inventory_div_vendor-license"
              value=""
            />
          </div>
        </div>
        <div className="form-control input-control">
          <label htmlFor="input-input_Order title" id="input-label_Order title">
            Order title
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              id="input-input_Order title"
              type="text"
              data-testid="receive-inventory_div_order-title"
              value=""
            />
          </div>
        </div>
        <DeliveredOn /> {/* Replaced static input with DeliveredOn component */}
        <div className="form-control input-control">
          <label htmlFor="input-input_Transaction ID" id="input-label_Transaction ID">
            Transaction ID
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              id="input-input_Transaction ID"
              type="text"
              data-testid="receive-inventory_div_transaction-id"
              value=""
            />
          </div>
        </div>
        <div className="form-control input-control">
          <label htmlFor="input-input_Room" id="input-label_Room" required>
            Room <span className="required-asterisk">*</span>
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              autoComplete="off"
              id="input-input_Room"
              placeholder="Select room"
              required
              type="text"
              data-testid="receive-inventory_div_room"
              value=""
            />
            {/* Dropdown icon SVG can be added here */}
          </div>
        </div>
        <div className="form-control input-control">
          <label htmlFor="input-input_Subroom" id="input-label_Subroom">
            Subroom
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              autoComplete="off"
              disabled
              id="input-input_Subroom"
              placeholder="Select subroom"
              type="text"
              data-testid=""
              value=""
            />
            {/* Dropdown icon SVG can be added here */}
          </div>
        </div>
        <div className="form-control input-control">
          <label htmlFor="input-input_Inventory status" id="input-label_Inventory status">
            Inventory status
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              autoComplete="off"
              id="input-input_Inventory status"
              placeholder="Select a status"
              type="text"
              data-testid="receive-inventory_div_status"
              value=""
            />
            {/* Dropdown icon SVG can be added here */}
          </div>
        </div>
      </div>
      <div className="cost-section">
        <div className="form-control input-control cost-item">
          <label htmlFor="input-input_Total credits" id="input-label_Total credits">
            Total credits
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              autoComplete="off"
              id="input-input_Total credits"
              type="number"
              data-testid="receive-inventory_div_total-credits"
              value={`$${totalCredits}`}
              onChange={(e) => setTotalCredits(parseFloat(e.target.value.replace('$', '')) || 0)}
              className="no-arrows"
            />
          </div>
        </div>
        <div className="form-control input-control cost-item">
          <label htmlFor="input-input_Shipping charges" id="input-label_Shipping charges">
            Shipping charges
          </label>
          <div className="input-field">
            <input
              aria-invalid="false"
              autoComplete="off"
              id="input-input_Shipping charges"
              type="number"
              data-testid="receive-inventory_div_shipping-charges"
              value={`$${shippingCharges}`}
              onChange={(e) => setShippingCharges(parseFloat(e.target.value.replace('$', '')) || 0)}
              className="no-arrows"
            />
          </div>
        </div>
        <ApplyCostOptions />
      </div>
      <div className="notes-section full-width">
        <div className="form-control input-control">
          <label htmlFor="input-input_Notes" id="input-label_Notes">
            Notes
          </label>
          <div className="input-field">
            <textarea
              rows={3}
              aria-invalid="false"
              id="input-input_Notes"
              data-testid="receive-inventory_div_receive-note"
              style={{ height: '144px' }}
            ></textarea>
            <textarea
              aria-hidden="true"
              className="hidden-textarea"
              readOnly
              tabIndex={-1}
              style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', padding: '0px', width: '678px' }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="items-received">
        <div className="items-title">
          Items received<span> - Total: $0.00</span>
        </div>
      
      </div>
    </div>
  );
};

export default MainPageForm;