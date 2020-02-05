import React from "react";
import "./Scores.css";

function Scores(props) {
  return (
    <div className="game">
      <h2>Your Score: {props.totalScore} </h2>
      <br />
      <h2> Status: {props.status}</h2>
    </div>
  );
}

export default Scores;
