import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";

function App() {
  return (
    <div className="app">
      <Header/>
      <NavigationTabs/>
      <div className="app_body">
        <h2>App Body</h2>
      </div>
    </div>
  );
}

export default App;
