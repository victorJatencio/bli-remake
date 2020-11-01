import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";
import BigHero from "./components/BigHero/BigHero";

function App() {
  return (
    <div className="app">
      <Header/>
      <NavigationTabs/>
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <div className="app_body">
        <h2>App Body</h2>
      </div>
    </div>
  );
}

export default App;
