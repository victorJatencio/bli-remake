import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidenav from "./components/SideNav/Sidenav";
import Maindash from "./components/MainDash/Maindash";

function App() {
  return (
    <div className="app">
      <Header/>
      
      <div className="app__body">
        <div className="app__nav">
          <Sidenav/>
        </div>
        <div className="container">
          <Maindash/>
        </div>
      </div>
    </div>
  );
}

export default App;
