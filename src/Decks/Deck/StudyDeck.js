import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function StudyDeck({ deck }) {
  return (
    <>
      <Breadcrumb navTitles={[deck.name, "Study"]} />
      <h1>Study deck {deck.id}</h1>
    </>
  );
}
export default StudyDeck;
