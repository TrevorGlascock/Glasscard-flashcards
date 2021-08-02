import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../CommonComponents/DeleteButton";
import StudyButton from "../CommonComponents/StudyButton";

function DeckListItem({ deck }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{deck.name}</h2>
        <p className="card-text">{deck.description}</p>
        <Link className="mx-1" to={`/decks/${deck.id}`}>
          <button className="btn btn-secondary">
            <span class="oi oi-eye pr-2" title="eye" aria-hidden="true"></span>
            View
          </button>
        </Link>
        <StudyButton path={`/decks/${deck.id}`} />
        <DeleteButton objToDelete={deck} objType={"deck"} />
      </div>
    </div>
  );
}

export default DeckListItem;
