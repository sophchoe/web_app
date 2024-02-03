// client/src/components/Sidebar/Sidebar.js

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Your sidebar content goes here */}
        <h2>Categories</h2>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
