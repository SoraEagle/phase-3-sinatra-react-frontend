import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
// import {Route, Switch} from "react-router-dom";
// import NavBar from 'NavBar';
// import Home from './Home';

function App(){

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      // .then((trips) => setTrips(trips));
  }, []);

  return(
    <div className="App"
    style={{
      backgroundColor: "orange",
      height: "100vh",
      textAlign: "center"
    }}>
      
      {/* <NavBar />
      <Switch>
          <Route exact path="/trips">
            <Trips />
          </Route>
          <Route exact path="/trips/">
            <NewCoin  />
          </Route>
          <Route exact path="/">
            <div>
              <p>Home Page</p>
              <Home />
            </div>
          </Route>
        </Switch> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;