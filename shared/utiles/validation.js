// project-root/shared/utils/validation.js

const validateEmail = (email) => {
  // Validate email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Validate password strength (e.g., minimum length)
  return password.length >= 8;
};

const validateUsername = (username) => {
  // Validate username format (e.g., alphanumeric characters)
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(username);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername,
};
