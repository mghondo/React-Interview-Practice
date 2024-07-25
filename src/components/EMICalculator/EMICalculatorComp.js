import React, { useState, useEffect } from "react";
import "./emicss.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EMICalculatorComp = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(120); // Default to 10 years (120 months)
  const [emi, setEmi] = useState(0);

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
          <h3>Interest Rate in %</h3>
          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(Number(e.target.value))}
            placeholder="Interest Rate in %"
            step="0.1"
          />
        </div>
        <div className="input-inner">
          <h3>Processing Fee in %</h3>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
            placeholder="Processing Fee in %"
            step="0.1"
          />
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
                className={`btn btn-primary ${
                  tenure === option.months ? "active" : ""
                }`}
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
