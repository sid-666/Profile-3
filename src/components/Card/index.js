import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="column">
      <a href={props.deploy} target="_blank">
        <img className="thumbnail" src={props.image}></img>
      </a>
      <a href={props.github} target="_blank">
        <h5>{props.title}</h5>
      </a>
      <p className="details"></p>
    </div>
  );
}

export default Card;
