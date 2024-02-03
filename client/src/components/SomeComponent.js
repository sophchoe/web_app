// client/src/components/SomeComponent.js

import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const SomeComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData('someEndpoint');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      {/* Use the fetched data in your component */}
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default SomeComponent;
