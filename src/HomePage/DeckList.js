import React, { useEffect, useState } from "react";
import CreateDeckBtn from "../CommonComponents/Buttons/CreateDeckBtn";
import LoadingMessage from "../CommonComponents/LoadingMessage";
import DeckListItem from "./DeckListItem";

function DeckList({ decks, setDecks }) {
  //map through every deck in decks to create a DeckListItem for each.
  const deckList = decks.map((deck, key) => (
    <DeckListItem key={key} deck={deck} setDecks={setDecks} />
  ));
  return deckList?.length ? (
    <>
      <CreateDeckBtn />
      {deckList}
    </>
  ) : (
    <LoadingMessage />
  );
}

export default DeckList;
