import React, { useEffect, useState } from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import { listCards } from "../../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import StudyCard from "./StudyCard";

function StudyDeck({ deck }) {
  const [cards, setCards] = useState([]);

  //Loads the list of cards in current deck from the API on startup
  useEffect(() => {
    const controller = new AbortController(); //to abort old requests

    //API call to {API_BASE_URL}/decks/deckId/?_embed=cards (All cards embedded in the deck)
    async function loadCards() {
      listCards(deck?.id, controller.signal)
        .then(setCards)
        .catch((error) => {
          if (error.name !== "AbortError") throw error;
        });
    }

    loadCards();
    return () => controller.abort(); //cleanup
  }, [deck]);

  return cards && cards?.length ? (
    <>
      <Breadcrumb navTitles={[deck?.name, "Study"]} />
      <h1>Study: {deck?.name}</h1>
      {cards.length < 3 ? (
        <NotEnoughCards cards={cards} />
      ) : (
        <StudyCard cards={cards} />
      )}
    </>
  ) : (
    <LoadingMessage />
  );
}
export default StudyDeck;
