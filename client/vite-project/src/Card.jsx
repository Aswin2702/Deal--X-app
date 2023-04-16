import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card justify-center my-auto mx-0'>{props.children}</div>
  );
};

export default Card;
