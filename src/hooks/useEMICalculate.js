// src/hooks/useEmiCalculate.js

import { useState } from 'react';

const useEmiCalculate = () => {
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = (loanAmount, interestRate, loanTerm) => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(loanTerm) * 12;
    const R = annualRate / 12 / 100;

    if (!P || !R || !N) return;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));

    // Calculate schedule
    let balance = P;
    const amortization = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emiValue - interest;
      balance -= principal;

      amortization.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setSchedule(amortization);
  };

  return { emi, schedule, calculateEMI };
};

export default useEmiCalculate;
