import React, { useEffect, useState } from "react";
import CreateDeckBtn from "../CommonComponents/Buttons/CreateDeckBtn";
import LoadingMessage from "../CommonComponents/LoadingMessage";
import DeckListItem from "./DeckListItem";

function DeckList({ decks, setDecks }) {
  //useState variable to store an array of DeckListItem components
  const [deckList, setDeckList] = useState([]);

  //Update deckList whenever there is a change to decks or setDecks
  useEffect(() => {
    //map through every deck in decks to create a DeckListItem for each.
    setDeckList(
      decks.map((deck, key) => (
        <DeckListItem key={key} deck={deck} setDecks={setDecks} />
      ))
    );
  }, [decks, setDecks]);

  //If there is a deckList, and it has a non-zero length, render it, otherwise show LoadingMessage
  return deckList?.length ? (
    <div className="container">
      <div className="row">
        <CreateDeckBtn />
      </div>
      <div className="row">
        <div className="list-group">{deckList}</div>
      </div>
    </div>
  ) : (
    <LoadingMessage />
  );
}

export default DeckList;
