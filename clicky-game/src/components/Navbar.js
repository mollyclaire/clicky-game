import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {

  return (
    <nav className="navbar">
      <span className="navbar-brand" href="/">Clicky Game</span>
      <ul className="nav navbar-nav">
        <li className="nav-item">
            <span className="message"><strong>{props.message}</strong></span>
        </li>
        <li className="nav-item" id="score">
            <span className="score">Your Score: {props.score}</span>
        </li>
      </ul>
    </nav>
  );
  }


export default Navbar;