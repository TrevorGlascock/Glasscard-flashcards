import React, { useEffect, useState } from "react";
import CardListItem from "./CardListItem";

function CardList({ cards, setCards }) {
  //map through every card in cards to create a CardListItem for each.

  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    setCardList(
      cards?.map((card, key) => (
        <CardListItem key={key} card={card} setCards={setCards} />
      ))
    );
  }, [cards]);

  return <>{cardList}</>;
}

export default CardList;
