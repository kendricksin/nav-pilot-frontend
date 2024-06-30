import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavMarks from "./pages/NavMarks";
import BearingTable from './pages/BearingTable';
import Waypoints from './pages/Waypoints';
import ResponsiveAppBar from './pages/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Create a theme instance.
const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='navbar'>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<NavMarks />} />
          <Route path='NavMarks' element={<NavMarks />} />
          <Route path='Waypoints' element={<Waypoints />} />
          <Route path='BearingTable' element={<BearingTable />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
// import React from 'react';
// import NavMarks from "./pages/NavMarks"

// import ResponsiveAppBar from './pages/Navbar';
// import './App.css'
// import { Routes, Route } from 'react-router-dom';

// const App: React.FC = () => {
//   return (
//     <div className='navbar'>
//       <ResponsiveAppBar />
//       <Routes>
//         <Route path='/' element={<NavMarks />} />
//         <Route path='NavMarks' element={<NavMarks />} />
//         <Route path='Waypoints' element={<Waypoints />} />
//         <Route path='BearingTable' element={<BearingTable />} />
//       </Routes>
//     </div>

//   );
// }

// export default App;
