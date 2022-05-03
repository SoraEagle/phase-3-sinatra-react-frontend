import React from "react";
import {NavLink} from "react-router-dom";

// Routes: Home, Trips, Items, ...
function NavBar(){
    return(
        <div
        style={{
            backgroundColor: "firebrick",
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
            height: "10vh" //Keeps height of navbar to 10% of browser window's height.
        }}>
            <NavLink to="/" exact>
                Home
            </NavLink>
            {/* <NavLink to="/trips" exact>
                My Trips
            </NavLink> */}
            {/* <NavLink to="/items" exact>
                My Items
            </NavLink> */}
        </div>
    );
}

export default NavBar;