import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import NavMarks from './components/NavMarks.tsx';
import Waypoints from './components/Waypoints.tsx';
import BearingTable from './components/BearingTable.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/nav-marks" element={<NavMarks />} />
            <Route path="/waypoints" element={<Waypoints />} />
            <Route path="/bearing-table" element={<BearingTable />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
