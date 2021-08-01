import React from "react";
import { useParams } from "react-router";

function StudyDeck() {
  const { deckId } = useParams();

  return <h1>Study deck {deckId}</h1>;
}
export default StudyDeck;
