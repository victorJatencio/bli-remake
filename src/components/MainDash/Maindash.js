import React from 'react';
import "./Maindash.css";

import BigHero from "../BigHero/BigHero";
import WidgetNav from "../WidgetNav/WidgetNav";

function Maindash() {
  return (
    <div className="mainDash">
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <WidgetNav/>
    </div>
  )
}

export default Maindash
