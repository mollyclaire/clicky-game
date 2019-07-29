import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">Clicky Game - The Ellsworth Kelly Edition</h1>
    <h5 className="text-center">Click on one of Kelly's masterpieces to earn points, but don't click on an artwork more than once!</h5>
  </div>
</div>
    )
}

export default Jumbotron;