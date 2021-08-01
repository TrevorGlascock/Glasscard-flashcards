import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../CommonComponents/DeleteButton";

function DeckListItem({ deck }) {
  console.log(deck); //Delete this later -- For testing purposes

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{deck.name}</h2>
        <p className="card-text">{deck.description}</p>
        <Link to={`/decks/${deck.id}`}>
          <button className="btn btn-secondary">View</button>
        </Link>
        <Link to={`/decks/${deck.id}/study`}>
          <button className="btn btn-primary">Study</button>
        </Link>
        <DeleteButton objToDelete={deck} objType={"deck"} />
      </div>
    </div>
  );
}

export default DeckListItem;
