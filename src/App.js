import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Wrapper from "./Components/Wrapper/Wrapper";
import Scores from "./Components/Scores/Scores";
import Card from "./Components/Card/Card";
import cardDisplay from "./cardDisplay.json";

class App extends Component {
  state = {
    cardDisplay,
    clickedMarioIds: [],
    score: 0,
    goal: 5,
    status: ""
  };

  // shuffle cards when clicked

  rearrangeCards = id => {
    let clickedMarioIds = this.state.clickedMarioIds;

    if (clickedMarioIds.includes(id)) {
      this.setState({
        clickedMarioIds: [],
        score: 0,
        status: "You lost! :( Click to play again!"
      });
      return;
    } else {
      clickedMarioIds.push(id);

      if (clickedMarioIds.length === 5) {
        this.setState({
          score: 5,
          status: "You Won! :) Click to play again!",
          clickedMarioIds: []
        });
        return;
      }

      this.setState({ cardDisplay, clickedMarioIds });

      for (let i = cardDisplay.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDisplay[i], cardDisplay[j]] = [cardDisplay[j], cardDisplay[i]];
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Header>
              Memory Game
              <br />
              <br />
              Do not click the same card twice!
            </Header>
          </div>
        </div>
        <Scores
          goal={5}
          totalScore={this.state.score}
          status={this.state.status}
        />
        <div className="container">
          <div className="row">
            {this.state.cardDisplay.map(cards => {
              return (
                <Card
                  rearrangeCards={this.rearrangeCards}
                  id={cards.id}
                  image={cards.URL}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <p>Thank you for playing!</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default App;
