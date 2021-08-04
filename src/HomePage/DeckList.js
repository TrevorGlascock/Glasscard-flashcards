import React, { useEffect, useState } from "react";
import CreateDeckBtn from "../CommonComponents/Buttons/CreateDeckBtn";
import LoadingMessage from "../CommonComponents/LoadingMessage";
import DeckListItem from "./DeckListItem";

function DeckList({ decks, setDecks }) {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    //map through every deck in decks to create a DeckListItem for each.
    setDeckList(
      decks.map((deck, key) => (
        <DeckListItem key={key} deck={deck} setDecks={setDecks} />
      ))
    );
  }, [decks]);

  return deckList?.length ? (
    <>
      <CreateDeckBtn setDecks={setDecks} />
      {deckList}
    </>
  ) : (
    <LoadingMessage />
  );
}

export default DeckList;
