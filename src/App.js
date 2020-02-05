import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Wrapper from "./Components/Wrapper/Wrapper";
import Card from "./Components/Card/Card";
import cardDisplay from "./cardDisplay.json";

class App extends Component {
  state = {
    cardDisplay
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Header>
            <h1> Memory Game </h1> 
            <br />
            <h4>Do not click the same card twice! </h4>
            </Header>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.cardDisplay.map(cards => {
              return <Card id={cards.id} image={cards.URL} />;
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default App;
