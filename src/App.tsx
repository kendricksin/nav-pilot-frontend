import React from 'react';
import NavMarks from "./components/NavMarks"
import BearingTable from './components/BearingTable';
import Waypoints from './components/Waypoints';
import ResponsiveAppBar from './components/Navbar';
import FullFeaturedCrudGrid from './components/DataGrid'
import './App.css'
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='navbar'>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<FullFeaturedCrudGrid />} />
        <Route path='NavMarks' element={<NavMarks />} />
        <Route path='Waypoints' element={<Waypoints />} />
        <Route path='BearingTable' element={<BearingTable />} />
      </Routes>
    </div>

  );
}

export default App;
