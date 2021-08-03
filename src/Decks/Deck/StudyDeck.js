import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import StudyCard from "./StudyCard";

function StudyDeck({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Study"]} />
      <h1>Study: {deck.name}</h1>
      <StudyCard />
    </>
  ) : (
    <LoadingMessage />
  );
}
export default StudyDeck;
