import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface NavMark {
  id?: number;
  Name: string;
  LatDeg: number;
  LatMn: number;
  LonDeg: number;
  LonMn: number;
}

const NavMarks: React.FC = () => {
  const [navMarks, setNavMarks] = useState<NavMark[]>([]);
  const [newMark, setNewMark] = useState<NavMark>({ Name: '', LatDeg: 0, LatMn: 0, LonDeg: 0, LonMn: 0 });

  useEffect(() => {
    fetchNavMarks();
  }, []);

  const fetchNavMarks = async () => {
    const response = await axios.get('http://localhost:5000/api/nav-marks');
    setNavMarks(response.data);
  };

  const addNavMark = async () => {
    await axios.post('http://localhost:5000/api/nav-marks', newMark);
    setNewMark({ Name: '', LatDeg: 0, LatMn: 0, LonDeg: 0, LonMn: 0 });
    fetchNavMarks();
  };

  const updateNavMark = async (id: number, updatedMark: NavMark) => {
    await axios.put(`http://localhost:5000/api/nav-marks/${id}`, updatedMark);
    fetchNavMarks();
  };

  const deleteNavMark = async (id: number) => {
    await axios.delete(`http://localhost:5000/api/nav-marks/${id}`);
    fetchNavMarks();
  };

  return (
    <div>
      <h1>Nav Marks</h1>
      <ul>
        {navMarks.map(mark => (
          <li key={mark.id}>
            {mark.Name} - {mark.LatDeg}°{mark.LatMn}' {mark.LonDeg}°{mark.LonMn}'
            <button onClick={() => deleteNavMark(mark.id!)}>Delete</button>
            <button onClick={() => updateNavMark(mark.id!, { ...mark, Name: 'Updated Name' })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newMark.Name} onChange={e => setNewMark({ ...newMark, Name: e.target.value })} placeholder="Name" />
        <input type="number" value={newMark.LatDeg} onChange={e => setNewMark({ ...newMark, LatDeg: +e.target.value })} placeholder="LatDeg" />
        <input type="number" value={newMark.LatMn} onChange={e => setNewMark({ ...newMark, LatMn: +e.target.value })} placeholder="LatMn" />
        <input type="number" value={newMark.LonDeg} onChange={e => setNewMark({ ...newMark, LonDeg: +e.target.value })} placeholder="LonDeg" />
        <input type="number" value={newMark.LonMn} onChange={e => setNewMark({ ...newMark, LonMn: +e.target.value })} placeholder="LonMn" />
        <button onClick={addNavMark}>Add Nav Mark</button>
      </div>
    </div>
  );
}

export default NavMarks;
