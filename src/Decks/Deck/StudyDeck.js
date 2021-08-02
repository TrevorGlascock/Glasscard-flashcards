import React from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function StudyDeck() {
  const { deckId } = useParams();

  return (
    <>
      <Breadcrumb />
      <h1>Study deck {deckId}</h1>
    </>
  );
}
export default StudyDeck;
