import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Components/Header/Header";
import Instruction from "./Components/Instruction/Instruction";
// import Cards from "./Components/Cards/Cards";
// import Wrapper from "./Components/Wrapper/Wrapper";
import Card from "./Components/Card/Card";
import cardDisplay from "./cardDisplay.json";

class App extends Component {
  state = {
    cardDisplay
  };

  render() {
    return (
      <div class="home">
        <h1> Memory Game </h1> <h4> Do not click the same twice! </h4>
        {this.state.cardDisplay.map(cards => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Card id={cards.id} image={cards.URL} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;

// alt={props.name}
//src={props.image}
//           id={props.id}

// export default function App() {
//   return (
//     <div className="App">
//       <Header>
//         <h1> Memory Game </h1> <h4> Do not click the same twice! </h4>
//       </Header>
//       <Instruction> Scores: </Instruction>
//       <Cards> </Cards>
//       <Wrapper>
//         {cardDisplay.map(picture => (
//           <Card key={picture.id} image={picture.URL} />
//         ))}
//       </Wrapper>
//     </div>
//   );
// }

// render() {
//   return (
//     <Wrapper>
//       <Title>Friends List</Title>
//       {this.state.friends.map(friend => (
//         <FriendCard
//           removeFriend={this.removeFriend}
//           id={friend.id}
//           key={friend.id}
//           name={friend.name}
//           image={friend.image}
//           occupation={friend.occupation}
//           location={friend.location}
//         />
//       ))}
//     </Wrapper>
//   );
// }
// }
