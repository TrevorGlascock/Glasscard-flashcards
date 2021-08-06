import React from "react";
import DeleteButton from "../CommonComponents/Buttons/DeleteButton";
import StudyButton from "../CommonComponents/Buttons/StudyButton";
import ViewDeckBtn from "../CommonComponents/Buttons/ViewDeckBtn";

function DeckListItem({ deck, setDecks }) {
  return (
    <div className="list-group-item list-group-item-action container">
      <div className="row">
        <div className="col-10">
          <h2 className="h2">{deck.name}</h2>
        </div>
        <div className="col">
          <p className="text-muted">{deck.cards.length} cards</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="">{deck.description}</p>
        </div>
      </div>

      <div className="row justify-content-between px-3">
        <div>
          <ViewDeckBtn path={`/decks/${deck.id}`} />
          <StudyButton path={`/decks/${deck.id}`} />
        </div>
        <div>
          <DeleteButton
            objToDelete={deck}
            objType={"deck"}
            setDecks={setDecks}
          />
        </div>
      </div>
    </div>
  );
}

export default DeckListItem;
