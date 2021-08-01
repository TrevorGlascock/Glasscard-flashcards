import React from "react";
import { useParams } from "react-router";

function EditDeck() {
  const { deckId } = useParams();

  return <h1>Edit deck {deckId}</h1>;
}
export default EditDeck;
