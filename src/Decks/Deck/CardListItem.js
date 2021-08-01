import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../../CommonComponents/DeleteButton";

function CardListItem({ card }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        <Link to={`/decks/${card.id}/edit`}>
          <button className="btn btn-secondary">Edit</button>
        </Link>
        <DeleteButton objToDelete={card} objType={"card"} />
      </div>
    </div>
  );
}

export default CardListItem;
