import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
//#D4F1F4
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor: "#194376" }}>
      <NavLink className="navbar-brand" to="/">
        <b style={{ color: "white" }}>FEM-AID</b>
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
                  <Button variant="outline-info" style={{ borderColor: "white", color: "white" }}>Log In</Button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/register">
                  <Button variant="info" style={{ backgroundColor: "white", color: "Black", borderColor: "#194376" }}>Register</Button>
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/me" style={{ color: "white" }}>
                    Hi {user.username}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ml-2" to="/" style={{ color: "white" }}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ml-2" to="/dashboard" style={{ color: "white" }}>
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ml-2" to="/diseasepred" style={{ color: "white" }}>
                    Diseases
                  </NavLink>
                </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/logout" style={{ color: "white" }}>
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
