// client/src/services/auth.js

// Mock user data for demonstration purposes
const mockUserData = {
  id: 1,
  username: 'example_user',
  email: 'user@example.com',
  // ... other user properties
};

let currentUser = null;

const login = (username, password) => {
  // Mock authentication logic
  if (username === 'example_user' && password === 'password') {
    currentUser = { ...mockUserData };
    return true; // Authentication success
  } else {
    return false; // Authentication failure
  }
};

const logout = () => {
  // Perform logout logic
  currentUser = null;
};

const getCurrentUser = () => {
  // Return the current user (or null if not authenticated)
  return currentUser;
};

const isAuthenticated = () => {
  // Check if the user is authenticated
  return currentUser !== null;
};

export { login, logout, getCurrentUser, isAuthenticated };
