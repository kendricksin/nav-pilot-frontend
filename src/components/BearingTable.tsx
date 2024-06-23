import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Bearing {
  ID: number;
  Bearing: string;
}

const BearingTable: React.FC = () => {
  const [bearings, setBearings] = useState<Bearing[]>([]);

  useEffect(() => {
    fetchBearings();
  }, []);

  const fetchBearings = async () => {
    const response = await axios.get('http://localhost:5000/api/bearing-table');
    setBearings(response.data);
  };

  return (
    <div>
      <h1>Bearing Table</h1>
      <ul>
        {bearings.map(bearing => (
          <li key={bearing.ID}>{bearing.Bearing}</li>
        ))}
      </ul>
    </div>
  );
}

export default BearingTable;
