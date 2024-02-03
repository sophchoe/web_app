// client/src/services/utility.js

const formatCurrency = (amount, currency = 'USD') => {
  // Example: Format the amount with a specific currency symbol
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return `${currencySymbols[currency]}${amount.toFixed(2)}`;
};

const validateEmail = (email) => {
  // Example: Validate an email address using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { formatCurrency, validateEmail };
