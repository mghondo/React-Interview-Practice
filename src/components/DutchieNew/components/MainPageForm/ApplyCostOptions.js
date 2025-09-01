import React, { useState, useRef } from 'react';

const ApplyCostOptions = () => {
  const options = [
    "Don't apply cost options",
    "Apply shipping charges to unit cost",
    "Apply credits to unit cost",
    "Apply both credits and shipping charges to unit cost",
  ];

  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const dropdown = document.querySelector('.apply-cost-options-dropdown-container');
    if (dropdown) dropdown.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setTimeout(() => {
        const dropdown = document.querySelector('.apply-cost-options-dropdown-container');
        if (dropdown) dropdown.style.display = 'none';
      }, 200);
    }
  };

  return (
    <div className="form-control input-control">
      <label htmlFor="input-input_Apply cost options" id="input-label_Apply cost options">
        Apply cost options
      </label>
      <div className="input-field">
        <input
          aria-invalid="false"
          autoComplete="off"
          id="input-input_Apply cost options"
          placeholder="Select a cost option"
          required
          type="text"
          data-testid="receive-inventory_div_apply-cost-options"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          onFocus={() => {
            const dropdown = document.querySelector('.apply-cost-options-dropdown-container');
            if (dropdown) dropdown.style.display = 'block';
          }}
          onBlur={handleBlur}
        />
        <div className="apply-cost-options-dropdown-container" ref={dropdownRef}>
          <ul className="apply-cost-options-dropdown" style={{ maxHeight: '440px', overflowY: 'auto' }}>
            {options.map((option, index) => (
              <li
                key={index}
                aria-selected="false"
                className="sc-dvmDTI hlpqcP"
                data-option-index={index}
                role="option"
                tabIndex={-1}
                title={option}
                onClick={() => handleOptionSelect(option)}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="dropdown-menu-item__text-container">
                  <div className="dropdown-menu-item__label-container">
                    <span className="dropdown-menu-item__primary-label dropdown-menu-item__primary-label--truncated">
                      {option}
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

export default ApplyCostOptions;