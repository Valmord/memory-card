import "./Card.css";
import image from "./assets/testpic.jpg";

const Card = function Card({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="" role="presentation" />
      <h2>{data.name}</h2>
    </div>
  );
};

export default Card;
