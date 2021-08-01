import React, { useEffect, useState } from "react";
import { listCards } from "../../utils/api";
import CardListItem from "./CardListItem";

function CardList() {
  //cards is a state variable array of each card in the API
  const [cards, setCards] = useState([]);

  //map through every card in cards to create a CardListItem for each.
  const cardList = cards.map((card, key) => (
    <CardListItem key={key} card={card} setCards={setCards} />
  ));

  //Loads Cards from the API on startup
  useEffect(() => {
    const controller = new AbortController(); //to abort old requests

    //Utility function that takes an AbortController signal and makes an API call to {API_BASE_URL}/decks?_embed=cards
    listCards(controller.signal)
      .then(setCards)
      .then(console.log(cards))
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }, []);

  return <>{cardList}</>;
}

export default CardList;
