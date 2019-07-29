import React from "react";
import "../styles/Card.css";

const Card = props => (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.shuffleArt(props.id)}
                />
            </div>
        </div>
  );
  
  export default Card;