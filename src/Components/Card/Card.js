import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      {/* <div className="row">
        <div className="col-3"> */}
          <div className="img-container">
            <img
              // alt={props.name}
              src={props.image}
              id={props.id}
              height="300px"
              width="300px"
              // onClick={() => props.rearrangeCards(props.id)}
              // className="rearrange"
            />
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Card;
