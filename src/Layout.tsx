import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

interface LayoutProps {
  children: React.ReactNode; // Content to be rendered within the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
        <Header />
          <nav>
            <ul>
              <li><Link to="/nav-marks">Nav Marks</Link></li>
              <li><Link to="/waypoints">Waypoints</Link></li>
              <li><Link to="/bearing-table">Bearing Table</Link></li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      );
};

export default Layout;
