import React from "react";
import "./Card.css";

function Card (props) {
    return  (

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    
    </div>


    );


}

