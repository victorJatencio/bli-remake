import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidenav from "./components/SideNav/Sidenav";
import Maindash from "./components/MainDash/Maindash";

import { useDataLayerValue } from "./StateProvider";

function App() {

  const [{collapsed}, dispatch] = useDataLayerValue();

  const reorderLayout = () => {
    document.getElementsByClassName("app__nav").style.position = "relative";
  }

  return (
    <div className="app">
      <Header/>
      
      <div className="app__body">
        <div className={`${collapsed ? reorderLayout : "app__nav" }`}>
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
