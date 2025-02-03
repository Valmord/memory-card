import { useState } from "react";
import "./Card.css";
import image from "./assets/testpic.jpg";

const Card = function Card({ data, setScore, order, handleClick }) {
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ order }}
      data-name={data.name}
    >
      <img src={data.image} alt="" role="presentation" />
      <h2>{data.name}</h2>
    </div>
  );
};

export default Card;
