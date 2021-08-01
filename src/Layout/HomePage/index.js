import React from "react";
import DeckList from "./DeckList";

function HomePage({ decks }) {
  return (
    <>
      <h1>You are on the HomePage!</h1>
      <DeckList decks={decks} />
    </>
  );
}

export default HomePage;
