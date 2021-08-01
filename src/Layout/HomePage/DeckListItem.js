import React from "react";

function DeckListItem({ deck }) {
  console.log(deck);
  return <h1>{deck.name} Deck</h1>;
}

export default DeckListItem;
