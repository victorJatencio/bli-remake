import React from 'react';
import "./SidenavLink.css";

function SidenavLink({ name, Icon, selected }) {
  return (
    <div className={`sidenavLink ${selected && 'selected'}`}>
      <div className="sidenavLink__icon">
        {Icon}
      </div>
      <h3>{name}</h3>
    </div>
  )
}

export default SidenavLink
