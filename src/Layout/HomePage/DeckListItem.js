import React from "react";
import { Link } from "react-router-dom";

function DeckListItem({ deck }) {
  console.log(deck); //Delete this later -- For testing purposes

  //Event Handler to Delete deck
  function handleDelete() {
    if (
      window.confirm(`Are you sure you want to delete the "${deck.name}" Deck?`)
    )
      console.log("Deleting this deck!");
  }

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
        <button className="btn btn-danger" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckListItem;
