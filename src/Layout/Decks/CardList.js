import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardList() {
  const { deckId } = useParams();
  return <h1>Here is a list of cards inside deck {deckId}</h1>;
}

export default CardList;
