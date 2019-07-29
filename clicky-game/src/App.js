// import React from 'react';
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import art from "./cards.json";
import Row from 'react-bootstrap/Row';

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    art,
    clickedArtworks: [],
    score: 0,
    goal: 12,
    status: ""
  };

render() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Row>
        {this.state.art.map(item => (
              <Card
                shuffleScoreCard={this.shuffleScoreCard}
                id={item.id}
                key={item.id}
                image={item.image}
              />
            ))}
        </Row>
      </div>
    </div>
  );
}
};
export default App;
