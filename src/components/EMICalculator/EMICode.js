import React from "react";

const EMICode = () => {
  const codeString = `
import React, { useState, useEffect } from "react";
import "./emicss.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EMICalculatorComp = () => {
  const [cost, setCost] = useState(0);
  const [interestInput, setInterestInput] = useState("");
  const [interest, setInterest] = useState(0);
  const [feeInput, setFeeInput] = useState("");
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

  const formatPercentage = (value) => {
    return value.toFixed(2) + "%";
  };

  const parsePercentageInput = (value) => {
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

  const handleInterestBlur = () => {
    setInterest(parsePercentageInput(interestInput));
    setInterestInput(formatPercentage(parsePercentageInput(interestInput)));
  };

  const handleFeeBlur = () => {
    setFee(parsePercentageInput(feeInput));
    setFeeInput(formatPercentage(parsePercentageInput(feeInput)));
  };

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
        <button
          className="btn btn-secondary mb-3"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      </div>

      {showCode && <EMICode />}

      <div className="inputs-emi">
        <div className="input-inner">
          <h3>Total Cost of Assets</h3>
          <input
            type="text"
            value={formatCurrency(cost)}
            onChange={(e) => setCost(parseCurrencyInput(e.target.value))}
            placeholder="Total Cost of Assets"
          />
        </div>
        <div className="input-inner">
          <h3>Interest Rate</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onBlur={handleInterestBlur}
              placeholder="Interest Rate"
            />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>
        <div className="input-inner">
          <h3>Processing Fee</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={feeInput}
              onChange={(e) => setFeeInput(e.target.value)}
              onBlur={handleFeeBlur}
              placeholder="Processing Fee"
            />
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>
        <div className="input-inner">
          <h3>Down Payment</h3>
          <div className="slider-container">
            <span className="slider-label">{formatCurrency(0)}</span>
            <input
              type="range"
              min={0}
              max={cost}
              className="slider"
              value={downPayment}
              onChange={updateDownPayment}
            />
            <span className="slider-label">{formatCurrency(cost)}</span>
          </div>
          <h4>Down Payment: {formatCurrency(downPayment)}</h4>
        </div>
        <div className="input-inner">
          <h3>Duration</h3>
          <div
            className="btn-group"
            role="group"
            aria-label="Mortgage Duration"
          >
            {tenureOptions.map((option) => (
              <button
                key={option.years}
                type="button"
                className={\`btn btn-primary \${
                  tenure === option.months ? "active" : ""
                }\`}
                onClick={() => setTenure(option.months)}
                style={{
                  backgroundColor:
                    tenure === option.months ? "#0056b3" : "#007bff",
                  borderColor: tenure === option.months ? "#004085" : "#007bff",
                }}
              >
                {option.years} years
              </button>
            ))}
          </div>
        </div>
        <div className="input-inner">
          <h3>Monthly Payment (EMI)</h3>
          <h4>{formatCurrency(emi)}</h4>
        </div>
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
