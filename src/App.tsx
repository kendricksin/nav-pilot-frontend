import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/nav-marks">Nav Marks</Link></li>
          <li><Link to="/waypoints">Waypoints</Link></li>
          <li><Link to="/bearing-table">Bearing Table</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
