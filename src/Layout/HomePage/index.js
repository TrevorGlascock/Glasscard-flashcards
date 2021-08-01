import React from "react";
import CreateDeckBtn from "./CreateDeckBtn";
import DeckList from "./DeckList";

function HomePage({ decks }) {
  return (
    <>
      <CreateDeckBtn />
      <DeckList decks={decks} />
    </>
  );
}

export default HomePage;
