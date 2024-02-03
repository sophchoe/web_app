// project-root/shared/utils/authentication.js

const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

const generateAuthToken = (userId, expiresIn = '1d') => {
  return jwt.sign({ userId }, secretKey, { expiresIn });
};

const verifyAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

const checkUserRole = (user, requiredRole) => {
  // Check if the user has the required role
  return user && user.role === requiredRole;
};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
  checkUserRole,
};
