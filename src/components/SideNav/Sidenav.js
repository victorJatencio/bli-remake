import React from 'react';
import "./Sidenav.css";

function Sidenav() {
  return (
    <aside className="sideNav">
      <h4>Main Menu</h4>
      <div className="sideNav__menuGroup">
        <ul className="sidebar_nav">
          <li>My bliq</li>
          <li>Search</li>
          <li>Compare</li>
          <li>Tools</li>
          <li>Search</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidenav
