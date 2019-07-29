import React from "react";
import "../styles/Navbar.css";

// const styles = {
//   backgroundColor: "#555555",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   color: "white"

// }

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
            <a className="nav-link" href="/">Clicky Game</a>
        </li>
        {/* <li className="nav-item active">
            <a className="nav-link" href="/">Click on any image to begin</a>
        </li> */}
        <li className="nav-item active">
            <a className="nav-link" href="/">Your Score: </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;