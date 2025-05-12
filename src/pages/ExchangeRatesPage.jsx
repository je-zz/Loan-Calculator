import React, { useState } from 'react';
import useExchangeRates from '../hooks/useExchangeRates';
import { TextField, Typography, Box, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ExchangeRatesPage = () => {
  const { rates, loading, error } = useExchangeRates();
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const convert = () => {
    if (!amount || !rates[fromCurrency] || !rates[toCurrency]) return 0;
    const baseAmount = amount / rates[fromCurrency]; // Convert to USD
    return (baseAmount * rates[toCurrency]).toFixed(2);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, margin: 'auto', mt:10 }}>
      <Typography variant="h4" gutterBottom>Live Currency Exchange</Typography>

      {loading ? (
        <Typography>Loading exchange rates...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select value={fromCurrency} label="From" onChange={(e) => setFromCurrency(e.target.value)}>
              {Object.keys(rates).map((cur) => (
                <MenuItem key={cur} value={cur}>{cur}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select value={toCurrency} label="To" onChange={(e) => setToCurrency(e.target.value)}>
              {Object.keys(rates).map((cur) => (
                <MenuItem key={cur} value={cur}>{cur}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="h6" mt={2}>
            Converted Amount: <strong>{convert()} {toCurrency}</strong>
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ExchangeRatesPage;