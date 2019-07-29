import React from "react";
import "../styles/Card.css";
import Col from 'react-bootstrap/Col';


const Card = props => (
    <Col sm={12} md={4} lg={3}>
        <div className="card">
            <img alt={props.name} src={props.image} id={props.id}
                onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
        </div>
    </Col>
  );
  
  export default Card;