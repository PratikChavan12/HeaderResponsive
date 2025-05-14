import React, { useEffect, useState } from "react";

const If_Else_CheckingTax = () => {
  const tax_Amount = 1100000;
  const [tax, setTax] = useState({ percentage: "", amount: "" });


  function taxCheckingAmount(value) {
    if (!value) return 0;
    else if (value === 5) {
      const amount = 800000 - tax_Amount;
      return (amount / 100) * value;      
    } else if (value === 10) {
      const amount = 1200000 - tax_Amount;
      return (amount / 100) * value;
    } else if (value === 15) {
      const amount = 1600000 - tax_Amount;
      return (amount / 100) * value;
    } else if (value === 20) {
      const amount = 2000000 - tax_Amount;
      return (amount / 100) * value;
    } else if (value === 25) {
      const amount = 2400000 - tax_Amount;
      return (amount / 100) * value;
    } else if (value === 30) {
      const amount = tax_Amount - 2400000;
      return (amount / 100) * value;
    }
  }

  function taxStatement(value) {
    const afterTaxAmount = taxCheckingAmount(value);
    setTax(() => ({
      percentage: value,
      amount: afterTaxAmount,
    }));
    if (!value) {
      console.log(`The user has to pay no tax on his income ${tax_Amount}`);
      console.log(
        `The tax in rupees he should pay to government is ${afterTaxAmount}.`
      );
    } else {
      console.log(
        `The user has to pay ${value} tax on his income ${tax_Amount}`
      );
      console.log(
        `The tax in rupees he should pay to government is ${afterTaxAmount}.`
      );
    }
  }

  useEffect(() => {
    if (tax_Amount < 400000) {
      taxStatement(0);
    } else if (tax_Amount <= 800000) {
      taxStatement(5);
    } else if (tax_Amount <= 1200000) {
      taxStatement(10);
    } else if (tax_Amount <= 1600000) {
      taxStatement(15);
    } else if (tax_Amount <= 2000000) {
      taxStatement(20);
    } else if (tax_Amount <= 2400000) {
      taxStatement(25);
    } else if (tax_Amount >= 2400001) {
      taxStatement(30);
    }
  }, [tax_Amount]);

  return (
    <>
      <div className="bg-primary text-white text-center p-5 fs-2">
        If Else Task For Checking Tax & Payment
        <div className="fs-5 mt-3">
          <span className="px-2">
            Amount: <span className="fw-bold">{tax_Amount}</span>
          </span>
          <span className="px-2">
            Percentage: <span className="fw-bold"> {tax.percentage}%</span>
          </span>
          <span className="px-2">
            Pay Tax Amount: <span className="fw-bold"> {tax.amount}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default If_Else_CheckingTax;
