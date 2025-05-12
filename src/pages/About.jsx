import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const About = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* About Page Description Section */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', mt:5}}>
        <Typography variant="h4" gutterBottom>
          About Loan Calculator
        </Typography>
        <Typography variant="h6" paragraph>
          Welcome to the Loan Calculator and Exchange Rate Application. This application helps you
          calculate your loan EMI (Equated Monthly Installment) and also provides real-time exchange
          rates for various currencies.
        </Typography>
      </Paper>

      {/* Live Exchange Rates Section */}
      <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Live Exchange Rates (Sample Details)
        </Typography>
        <Typography variant="body1" paragraph>
          This feature allows you to see the real-time exchange rates for various currencies such as:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">USD to INR: 82.50</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">EUR to INR: 90.40</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">GBP to INR: 105.60</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1">AUD to INR: 56.10</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" paragraph>
          The exchange rates are provided in real-time and help you make informed decisions when dealing
          with international currencies.
        </Typography>
      </Paper>

      {/* Loan EMI Calculator Section */}
      <Paper sx={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Loan EMI Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          The Loan EMI Calculator feature allows users to calculate the monthly installments (EMI) they
          need to pay for a loan based on three key factors:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Loan Amount:</strong> The total amount you plan to borrow.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Interest Rate:</strong> The annual rate of interest charged on the loan.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Loan Term:</strong> The duration of the loan in years.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          By inputting these details, the app calculates the EMI that you will pay each month for the
          given loan. It uses the standard formula for EMI calculation:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>EMI Calculation Formula:</strong> 
          <code>
            EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
          </code>
        </Typography>
        <Typography variant="body2" paragraph>
          Where:
          <ul>
            <li><strong>P</strong> is the principal loan amount.</li>
            <li><strong>r</strong> is the monthly interest rate (annual rate divided by 12).</li>
            <li><strong>n</strong> is the number of monthly payments (loan term in years × 12).</li>
          </ul>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ marginTop: '20px' }}
        >
          Try Loan EMI Calculator
        </Button>
      </Paper>
    </Box>
  );
};

export default About;
