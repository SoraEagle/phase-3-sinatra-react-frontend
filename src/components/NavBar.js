import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    height: "50px",
    width: "50px",
    // padding: "12px",
    margin: "0 6px 6px",
    // background: "blue",
    textDecoration: "underline",
    color: "white"
  };

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
            <NavLink style={linkStyles} to="/" exact>
                Home Page
            </NavLink>
            <NavLink style={linkStyles} to="/trips" exact>
                My Trips
            </NavLink>
            <NavLink style={linkStyles} to="/items" exact>
                My Items
            </NavLink>
        </div>
    );
}

export default NavBar;