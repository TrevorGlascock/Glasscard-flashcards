import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import NotEnoughCards from "./NotEnoughCards";
import StudyCard from "./StudyCard";

function StudyDeck({ deck }) {
  return deck?.name && deck?.cards?.length ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Study"]} />
      <h1>Study: {deck.name}</h1>
      {deck.cards.length < 3 ? (
        <NotEnoughCards cards={deck.cards} />
      ) : (
        <StudyCard cards={deck.cards} />
      )}
    </>
  ) : (
    <LoadingMessage />
  );
}
export default StudyDeck;
