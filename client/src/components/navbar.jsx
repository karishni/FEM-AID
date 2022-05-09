import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
//#D4F1F4
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top " style={{backgroundColor: "#5b4a76"}}>
      <NavLink className="navbar-brand" to="/">
        <b style={{color: "#F9B145"}}>FEM-AID</b>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse row" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <NavLink className="nav-link ml-3" to="/">
              Home
            </NavLink> */}
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/login">
                <Button variant="outline-info" style={{borderColor:"#F9B145", color:"#F9B145"}}>Log In</Button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/register">
                  <Button variant="info" style={{backgroundColor:"#F9B145", color: "Black", borderColor:"#F9B145"}}>Register</Button>
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link ml-2" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/me">
                  Hi {user.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/logout">
                  Log Out
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
