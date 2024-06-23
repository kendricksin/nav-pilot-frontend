import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Waypoint {
  ID: number;
  LatDeg: number;
  LatMn: number;
  LonDeg: number;
  LonMn: number;
}

const Waypoints: React.FC = () => {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const [newWaypoint, setNewWaypoint] = useState<Waypoint>({ ID: 0, LatDeg: 0, LatMn: 0, LonDeg: 0, LonMn: 0 });

  useEffect(() => {
    fetchWaypoints();
  }, []);

  const fetchWaypoints = async () => {
    const response = await axios.get('http://localhost:5000/api/waypoints');
    setWaypoints(response.data);
  };

  const addWaypoint = async () => {
    await axios.post('http://localhost:5000/api/waypoints', newWaypoint);
    setNewWaypoint({ ID: 0, LatDeg: 0, LatMn: 0, LonDeg: 0, LonMn: 0 });
    fetchWaypoints();
  };

  const updateWaypoint = async (id: number, updatedWaypoint: Waypoint) => {
    await axios.put(`http://localhost:5000/api/waypoints/${id}`, updatedWaypoint);
    fetchWaypoints();
  };

  const deleteWaypoint = async (id: number) => {
    await axios.delete(`http://localhost:5000/api/waypoints/${id}`);
    fetchWaypoints();
  };

  return (
    <div>
      <h1>Waypoints</h1>
      <ul>
        {waypoints.map(waypoint => (
          <li key={waypoint.ID}>
            {waypoint.LatDeg}°{waypoint.LatMn}' {waypoint.LonDeg}°{waypoint.LonMn}'
            <button onClick={() => deleteWaypoint(waypoint.ID)}>Delete</button>
            <button onClick={() => updateWaypoint(waypoint.ID, { ...waypoint, LatDeg: 0 })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="number" value={newWaypoint.LatDeg} onChange={e => setNewWaypoint({ ...newWaypoint, LatDeg: +e.target.value })} placeholder="LatDeg" />
        <input type="number" value={newWaypoint.LatMn} onChange={e => setNewWaypoint({ ...newWaypoint, LatMn: +e.target.value })} placeholder="LatMn" />
        <input type="number" value={newWaypoint.LonDeg} onChange={e => setNewWaypoint({ ...newWaypoint, LonDeg: +e.target.value })} placeholder="LonDeg" />
        <input type="number" value={newWaypoint.LonMn} onChange={e => setNewWaypoint({ ...newWaypoint, LonMn: +e.target.value })} placeholder="LonMn" />
        <button onClick={addWaypoint}>Add Waypoint</button>
      </div>
    </div>
  );
}

export default Waypoints;
