// project-root/shared/utils/formatting.js

const formatDate = (dateString) => {
  // Format a date string into a human-readable format
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatCurrency = (amount) => {
  // Format a numeric amount into a currency format
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const capitalizeString = (inputString) => {
  // Capitalize the first letter of a string
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

module.exports = {
  formatDate,
  formatCurrency,
  capitalizeString,
};
