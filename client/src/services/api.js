// client/src/services/api.js

const apiUrl = 'https://api.example.com';

const fetchData = async (endpoint) => {
  const response = await fetch(`${apiUrl}/${endpoint}`);
  const data = await response.json();
  return data;
};

export { fetchData };
