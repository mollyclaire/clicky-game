// Importing all components to use in App.js
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import art from "./cards.json";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {
  // Setting the initial state. I am using the array of artwork images that is imported from cards.json.
  state = {
    art,
    clickedArtworks: [],
    score: 0,
    goal: 12,
    message: ""
  };
  // The shuffleArt method compares the id of the clicked image with one that is stored in the clickedArtworks array.
  shuffleArt = id => {
    let clickedArtworks = this.state.clickedArtworks;

    // If the id of the clicked artwork ...
    if(clickedArtworks.includes(id)) {
      this.setState({ clickedArtworks: [], score: 0, message:  "Sorry, you've clicked that one before! Game over." });
      return;
    } else {
      clickedArtworks.push(id)

      if(clickedArtworks.length === 12) {
        this.setState({score: 12, message: "You Won! Great Job!", clickedArtworks: []});
        console.log('You Win');
        return;
      }

      this.setState({ art, clickedArtworks, score: clickedArtworks.length, message: "" });

      // Fisher-Yates Shuffling Algorithm for shuffling items in my art array
      const shuffle = art => {
        var i,
            j,
            temp;
        for (i = art.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = art[i];
            art[i] = art[j];
            art[j] = temp;
        }
         
      };
      shuffle(art);
    }
  }

// Renders the imported Navbar with the current score and message, the Jumbotron,
// the Wrapper, and the Footer. When rendering the Wrapper, it maps over this.state.art and renders a Card component for each art object.
render() {
  return (
    
    <div>
      <Navbar 
      score={this.state.score}
      message={this.state.message} 
      />
      <Jumbotron />
      <Wrapper>
        {this.state.art.map(item => (
              <Card
                shuffleArt={this.shuffleArt}
                id={item.id}
                key={item.id}
                image={item.image}
              />
        ))}
      </Wrapper>
      <Footer />
    </div>
        
  );
}
}

export default App;
