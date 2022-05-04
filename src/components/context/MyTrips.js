import React, {useEffect, useState} from "react";

const TripsContext = React.createContext();

function TripsProvider({children}){
    const [trips, setTrips] = useState([]); // State variables for setting a list of the API's trips.
    useEffect(() => {
      fetch("http://localhost:9292/trips") //default GET request to the database.
        .then((r) => r.json())
        .then((data) => setTrips(data)); // sets trips.
    }, []);

    return(
      <TripsContext.Provider value={{trips, setTrips}}>
        {children}
      </TripsContext.Provider>
    );
}
  
export {TripsContext, TripsProvider};