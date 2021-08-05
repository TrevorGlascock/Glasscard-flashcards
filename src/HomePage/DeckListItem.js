import React from "react";
import DeleteButton from "../CommonComponents/Buttons/DeleteButton";
import StudyButton from "../CommonComponents/Buttons/StudyButton";
import ViewDeckBtn from "../CommonComponents/Buttons/ViewDeckBtn";

function DeckListItem({ deck, setDecks }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{deck.name}</h2>
        <p className="card-subtitle">{deck.cards.length} cards</p>
        <p className="card-text">{deck.description}</p>
        <ViewDeckBtn path={`/decks/${deck.id}`} />
        <StudyButton path={`/decks/${deck.id}`} />
        <DeleteButton
          objToDelete={deck}
          objType={"deck"}
          setObjState={setDecks}
        />
      </div>
    </div>
  );
}

export default DeckListItem;
