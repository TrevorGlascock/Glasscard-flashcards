import React from "react";
import CardListItem from "./CardListItem";

function CardList({ cards }) {
  //map through every card in cards to create a CardListItem for each.
  const cardList = cards?.map((card, key) => (
    <CardListItem key={key} card={card} />
  ));

  return <>{cardList}</>;
}

export default CardList;
