// src/components/Home.js

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useExchangeRates from '../hooks/useExchangeRates';
import useEmiCalculate from '../hooks/useEmiCalculate';

const Home = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [currency, setCurrency] = useState('USD');

  const { emi, schedule, calculateEMI } = useEmiCalculate();
  const { rates, loading: ratesLoading, error: ratesError } = useExchangeRates();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleReset = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setCurrency('USD');
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Box display="flex" flexDirection="column" gap={2} maxWidth={400}>
        <TextField
          label="Loan Amount"
          variant="outlined"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          type="number"
        />
        <TextField
          label="Interest Rate (%)"
          variant="outlined"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          type="number"
        />
        <TextField
          label="Term (Years)"
          variant="outlined"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          type="number"
        />
        <FormControl fullWidth>
          <InputLabel id="currency-label">Currency</InputLabel>
          <Select
            labelId="currency-label"
            value={currency}
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => calculateEMI(loanAmount, interestRate, loanTerm)} sx={{ backgroundColor: 'green' }}>
          Calculate
        </Button>
        <Button variant="outlined" color="error" onClick={handleReset}>
          Reset
        </Button>
      </Box>

      {emi && (
        <Typography variant="h6" mt={4}>
          Monthly EMI: <strong>{emi} {currency}</strong>
        </Typography>
      )}

      {schedule.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Amortization Schedule
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{
                  backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
                  color: isDarkMode ? '#fff' : '#000',
                }}>
                  {['Month', 'Principal', 'Interest', 'Remaining Balance'].map((header) => (
                    <th
                      key={header}
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        borderBottom: '1px solid #ccc',
                        color: isDarkMode ? '#fff' : '#000',
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => {
                  const rate = rates[currency] || 1;
                  const format = (val) => Number(val).toFixed(2);
                  return (
                    <tr key={row.month}>
                      <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{row.month}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{format(row.principal)} {currency}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{format(row.interest)} {currency}</td>
                      <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{format(row.balance)} {currency}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default Home;