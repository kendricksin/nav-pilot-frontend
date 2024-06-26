import React from 'react';
import NavMarks from "./components/NavMarks"
import BearingTable from './components/BearingTable';
import Waypoints from './components/Waypoints';
import Header from './components/Header';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Header />
            <li><Link to = "/">Nav Marks</Link></li>
            <li><Link to = "/waypoints">Waypoints</Link></li>
            <li><Link to = "/bearing-table">Bearing Table</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<NavMarks />} /> 
        <Route path="/waypoints" element={<Waypoints />} />
        <Route path="/bearing-table" element={<BearingTable />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
