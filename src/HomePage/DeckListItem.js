import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../CommonComponents/DeleteButton";
import StudyButton from "../CommonComponents/StudyButton";
import ViewDeckBtn from "./ViewDeckBtn";

function DeckListItem({ deck }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{deck.name}</h2>
        <p className="card-text">{deck.description}</p>
        <ViewDeckBtn path={`/decks/${deck.id}`} />
        <StudyButton path={`/decks/${deck.id}`} />
        <DeleteButton objToDelete={deck} objType={"deck"} />
      </div>
    </div>
  );
}

export default DeckListItem;
