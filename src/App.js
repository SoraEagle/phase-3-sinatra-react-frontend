import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {TripsProvider} from './context/trips';
import {ItemsProvider} from './context/items';
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
      
      <TripsProvider>
      <ItemsProvider>
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
        </ItemsProvider>
        </TripsProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Continue editing <code>src/App.js</code> until it works...
        </p>
      </header>

      <footer style={{
          backgroundColor: "coral",
          borderBottom: "2px solid black",
          marginBottom: "12px",
          marginTop: "12px",
          borderTop: "2px solid black",
          paddingTop: "10px",
          textAlign: "center"
        }}>
          <p>@2022 Ruby Faker Inc.</p>
          <p>All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;