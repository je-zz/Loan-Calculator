import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = ''; // Replace with your real key

const useExchangeRates = (baseCurrency = 'USD') => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`);
        setRates(res.data.conversion_rates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading, error };
};

export default useExchangeRates;
