import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Instruction from './Components/Instruction/Instruction';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <div className="App">
     <Header>Hello World</Header>
     <Instruction>Clicky Game!</Instruction>

     <Cards></Cards>



    </div>
  );
}

export default App;
