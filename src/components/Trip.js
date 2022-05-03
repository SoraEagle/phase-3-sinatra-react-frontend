import React, {useContext} from "react";
import {TripsContext} from "./context/MyTrips.js";

function Trip(){
    const {trip, setTrip} = useContext(TripsContext);

    function createTrip(){
        // 
    }

    return(
        <div>
            {/*  */}
        </div>
    );
}

export default Trip;