import React, { useState, useRef } from 'react';

const VendorInput = () => {
  const vendors = [
    { id: "9181", title: "AT-CPC (Klutch)" },
    { id: "17497", title: "AYR Wellness" },
    { id: "9177", title: "Agri-Med" },
    { id: "9178", title: "Ancient Roots" },
    { id: "9179", title: "Appalachian Pharm" },
    { id: "9180", title: "Ascension Biomedical" },
    { id: "9182", title: "Beneleaves Ltd" },
    { id: "9183", title: "Buckeye Relief" },
    { id: "24647", title: "CannAscend" },
    { id: "81170", title: "Cannamed Therapeutics Processing, LLC" },
    { id: "10053", title: "Certified Cultivators, LLC" },
    { id: "9487", title: "Columbia Care OH LLC" },
    { id: "12072", title: "Corsa Verde, LLC" },
    { id: "9184", title: "Cresco Labs Ohio, LLC" },
    { id: "10125", title: "Curaleaf OGT, Inc" },
    { id: "9185", title: "CureOhio" },
    { id: "15508", title: "Diamond Science" },
    { id: "9189", title: "FN Group Holdings, LLC" },
    { id: "70677", title: "FW Green Investments LLC" },
    { id: "9186", title: "Farkas Farms, LLC" },
    { id: "19405", title: "Farmaceutical RX, LLC" },
    { id: "9188", title: "Fire Rock Ltd." },
    { id: "18627", title: "Franklin Bioscience OH, LLC" },
    { id: "9193", title: "GTI Ohio, LLC" },
    { id: "9190", title: "Galenas LLC" },
    { id: "26983", title: "GaneshTech" },
    { id: "9191", title: "Grassroots" },
    { id: "13616", title: "Green Investment Partners, LLC" },
    { id: "13981", title: "Greenlane Wholesale" },
    { id: "10454", title: "Greenleaf Therapeutics" },
    { id: "83295", title: "Greenlight Non-Cannabis (Accessories/Apparel)" },
    { id: "9192", title: "Grow Ohio" },
    { id: "9194", title: "HEMMA, LLC" },
    { id: "25571", title: "Harvest Grows, LLC" },
    { id: "41058", title: "High Mountain" },
    { id: "17304", title: "Hundred Percent Labs" },
    { id: "20532", title: "Innovative Healing Solutions" },
    { id: "17219", title: "Kiva" },
    { id: "26525", title: "LuvBuds" },
    { id: "22142", title: "MC2P LLC (Lighthouse Sciences)" },
    { id: "30049", title: "Magic Flight" },
    { id: "10498", title: "Main Street Health" },
    { id: "19003", title: "Mother Grows Best, LLC" },
    { id: "70465", title: "NMG OH P1, LLC (BaM)" },
    { id: "26706", title: "Noohra Labs, LLC" },
    { id: "9187", title: "OPC Processing" },
    { id: "9195", title: "Ohio Clean Leaf LLC" },
    { id: "39557", title: "Ohio Green Systems LLC" },
    { id: "57693", title: "Ohio Processing Plant" },
    { id: "16695", title: "PAX" },
    { id: "9197", title: "PharmaCann Ohio LLC" },
    { id: "13993", title: "Puffco" },
    { id: "16123", title: "Pure Ohio LLC" },
    { id: "9198", title: "Pure Ohio Wellness" },
    { id: "9199", title: "Purpose Leaf, LLC" },
    { id: "78902", title: "Randy's All Culture Pioneer" },
    { id: "9200", title: "Riviera Creek Holdings LLC" },
    { id: "9201", title: "Solomon Oil" },
    { id: "78909", title: "Stache" },
    { id: "9202", title: "Standard Farms" },
    { id: "9203", title: "Standard Wellness Company, LLC" },
    { id: "65400", title: "Stashlogix" },
    { id: "35260", title: "Strive Wellness Of Ohio, LLC" },
    { id: "22216", title: "The Smoke Drop" },
    { id: "81786", title: "Trulieve" },
    { id: "9196", title: "UB GOOD" },
    { id: "9204", title: "Verano" },
    { id: "9205", title: "Vireo Ohio" }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVendor, setSelectedVendor] = useState('');
  const dropdownRef = useRef(null);

  const filteredVendors = vendors.filter(vendor =>
    vendor.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor.title);
    const dropdown = document.querySelector('.vendor-dropdown-container');
    if (dropdown) dropdown.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setTimeout(() => {
        const dropdown = document.querySelector('.vendor-dropdown-container');
        if (dropdown) dropdown.style.display = 'none';
      }, 200);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="form-control input-control">
      <label htmlFor="input-input_Vendor" id="input-label_Vendor" required>
        Vendor <span className="required-asterisk">*</span>
      </label>
      <div className="input-field">
        <input
          aria-invalid="false"
          autoComplete="off"
          id="input-input_Vendor"
          placeholder="Select a vendor"
          required
          type="text"
          data-testid="receive-inventory_div_vendor"
          value={selectedVendor}
          onChange={(e) => setSelectedVendor(e.target.value)}
          onFocus={() => {
            const dropdown = document.querySelector('.vendor-dropdown-container');
            if (dropdown) dropdown.style.display = 'block';
          }}
          onBlur={handleBlur}
        />
        <div className="vendor-dropdown-container" ref={dropdownRef}>
          <div className="vendor-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="clear-search" onClick={handleClearSearch}>
              ×
            </button>
          </div>
          <ul className="vendor-dropdown" style={{ maxHeight: '440px', overflowY: 'auto' }}>
            {filteredVendors.map((vendor, index) => (
              <li
                key={vendor.id}
                aria-selected="false"
                className="sc-dvmDTI hlpqcP"
                data-option-index={index}
                id={vendor.id}
                role="option"
                tabIndex={-1}
                title={vendor.title}
                onClick={() => handleVendorSelect(vendor)}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="dropdown-menu-item__text-container">
                  <div className="dropdown-menu-item__label-container">
                    <span className="dropdown-menu-item__primary-label dropdown-menu-item__primary-label--truncated">
                      {vendor.title}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Dropdown icon SVG can be added here */}
      </div>
    </div>
  );
};

export default VendorInput;