import React from "react";
import "./Card.css";

function Card(props) {
  return (
          <div className="card">
            <div className="img-container">
              <img
                alt="mario"
                src={props.image}
                id={props.id}
                height="250px"
                width="250px"
                onClick={() => props.rearrangeCards(props.id)}
                className="rearrange"
              />
            </div>
          </div>
  );
}

export default Card;
