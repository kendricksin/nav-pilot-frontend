import React from 'react';
import NavMarks from "./components/NavMarks"
import BearingTable from './components/BearingTable';
import Waypoints from './components/Waypoints';
import Header from './components/Header';
// import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/waypoints" element={<Waypoints />} />
        <Route path="/bearing-table" element={<BearingTable />} />
      </Routes>
    </Router>
  );
}

export default App;
