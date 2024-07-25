import React from "react";

const EMICode = () => {
  const codeString = `
import React, { useState, useEffect } from "react";
import "./emicss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from 'react-bootstrap';

const EMICalculatorComp = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(120); // Default to 10 years (120 months)
  const [emi, setEmi] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const parseCurrencyInput = (value) => {
    return Number(value.replace(/[^0-9.-]+/g, ""));
  };

  const updateDownPayment = (e) => {
    setDownPayment(Number(e.target.value));
  };

  const calculateEMI = () => {
    if (cost > 0 && interest > 0 && tenure > 0) {
      const loanAmount = cost - downPayment;
      const monthlyInterest = interest / 12 / 100;
      const numerator =
        loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenure);
      const denominator = Math.pow(1 + monthlyInterest, tenure) - 1;
      const calculatedEMI = numerator / denominator;
      setEmi(calculatedEMI);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [cost, interest, fee, downPayment, tenure]);

  const tenureOptions = [
    { years: 10, months: 120 },
    { years: 15, months: 180 },
    { years: 20, months: 240 },
    { years: 25, months: 300 },
    { years: 30, months: 360 },
  ];

  return (
    <div>
      <h1 className="text-center">EMI Calculator</h1>
      <div className="text-center mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {showCode ? 'Hide Code' : 'Show Code'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setShowCode(!showCode)}>
              {showCode ? 'Hide Code' : 'Show Code'}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* EMICode component would be rendered here when showCode is true */}

      <div className="inputs-emi">
        {/* Input fields and other UI elements */}
      </div>
    </div>
  );
};

export default EMICalculatorComp;
  `;

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
        borderRadius: "0.25rem",
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {codeString}
      </pre>
    </div>
  );
};

export default EMICode;
