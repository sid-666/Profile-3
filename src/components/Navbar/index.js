import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="header">
      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <h3>Profile</h3>
        </div>
        <div className="top-bar-right">
          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Discover
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
