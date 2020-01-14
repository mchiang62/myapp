import React from "react";
import "./Instruction.css";

function Instruction (props) {
    return <h1 className="instruction">{props.children}</h1>;
  }
  
  export default Instruction;