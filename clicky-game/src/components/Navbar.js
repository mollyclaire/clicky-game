import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {

  return (
    <nav className="navbar">
      <span className="navbar-brand" href="/">Clicky Game</span>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
            <span className="message">{props.message}</span>
        </li>
        <li className="nav-item">
            <span className="score">Your Score: {props.score}</span>
        </li>
      </ul>
    </nav>
  );
  }


export default Navbar;