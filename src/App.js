import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
// import Home from './components/Home';

function App(){
  // Add useStates

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      // .then((trips) => setTrips(trips));
  }, []);

  return(
    <div className="App"
    style={{
      backgroundColor: "aqua",
      height: "100vh",
      textAlign: "center"
    }}>
      
      <NavBar />
      {/* <Switch style={{
      }}> */}
          {/* <Route path="/trips">
            <Trips />
          </Route> */}
          {/* <Route path="/trips/">
            <NewCoin  />
          </Route> */}
          {/* <Route path="/">
            <div>
              <p>Home Page</p>
              <Home />
            </div>
          </Route> */}
        {/* </Switch> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Continue editing <code>src/App.js</code> until it works...
        </p>
      </header>
    </div>
  );
}

export default App;