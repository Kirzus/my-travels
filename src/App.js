import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel App</h1>
        </header>
        <Travel
          destination="Melbourne"
          country="Australia"
          distance="16 781"
          photo="https://www.mantrahotels.com/Portals/0/GalleryImages/System/Locations/Australia/Victoria/Melbourne&Surrounds/Melbourne/Melbourne.t76962.jpg"
        />
        <Travel
          destination="Brazzaville"
          country="Congo"
          distance="5 687"
          photo="https://upload.wikimedia.org/wikipedia/commons/8/89/Brazza_bridge.jpg"
        />
      </div>
    );
  }
}

export default App;
