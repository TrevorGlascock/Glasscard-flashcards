import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function StudyDeck({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Study"]} />
      <h1>Study deck {deck.id}</h1>
    </>
  ) : (
    <LoadingMessage />
  );
}
export default StudyDeck;
